'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { getSupabaseClient } from '@/lib/supabase/client';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    title: '',
    email: '',
    content: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const title = formData.title.trim();
    const email = formData.email.trim();
    const content = formData.content.trim();

    if (!title || !email || !content) {
      setFeedback({
        type: 'error',
        message: '모든 필드를 입력해주세요.',
      });
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);

    try {
      const supabase = getSupabaseClient();
      const { error } = await supabase.from('woon_home_contact').insert({
        title,
        email,
        content,
        created_at: new Date().toISOString(),
      });

      if (error) {
        throw error;
      }

      setFeedback({
        type: 'success',
        message: '문의가 전송되었습니다. 빠르게 답변드릴게요!',
      });
      setFormData({
        title: '',
        email: '',
        content: '',
      });
    } catch (error) {
      console.error('Failed to submit contact form:', error);
      setFeedback({
        type: 'error',
        message: '전송에 실패했습니다. 잠시 후 다시 시도해주세요.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6 py-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">이름</Label>
          <Input
            id="title"
            type="text"
            placeholder="이름을 입력하세요"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">이메일</Label>
          <Input
            id="email"
            type="email"
            placeholder="이메일을 입력하세요"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="content">메시지</Label>
          <Textarea
            id="content"
            placeholder="메시지를 입력하세요"
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            rows={8}
            required
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full transition-all duration-200 hover:scale-[1.02] hover:shadow-md active:scale-[0.98]"
        >
          {isSubmitting ? '전송 중…' : '전송하기'}
        </Button>
        {feedback && (
          <p
            className={`text-sm ${
              feedback.type === 'error' ? 'text-red-500' : 'text-green-600'
            }`}
            aria-live="polite"
          >
            {feedback.message}
          </p>
        )}
      </form>
    </div>
  );
}
