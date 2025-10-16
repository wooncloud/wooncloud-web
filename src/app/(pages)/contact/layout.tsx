import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Contact | 문의',
  description:
    '운구름에게 문의하세요. 질문, 이직 제안, 커뮤니티 참여 등 다양한 문의를 환영합니다.',
  keywords: ['문의', '이메일', 'contact', '커뮤니티', '질문', '이직 제안'],
  path: '/contact',
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
