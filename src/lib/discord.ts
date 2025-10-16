export async function sendDiscordNotification(data: {
  title: string;
  email: string;
  content: string;
}) {
  const webhookUrl = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn('Discord webhook URL is not configured');
    return;
  }

  try {
    const embed = {
      title: '🔔 새로운 문의가 도착했습니다!',
      color: 0x5865f2,
      fields: [
        {
          name: '👤 이름',
          value: data.title,
          inline: true,
        },
        {
          name: '📧 이메일',
          value: data.email,
          inline: true,
        },
        {
          name: '💬 메시지',
          value: data.content.length > 1024 ? data.content.substring(0, 1021) + '...' : data.content,
          inline: false,
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: 'Portfolio Contact Form',
      },
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        embeds: [embed],
      }),
    });

    if (!response.ok) {
      throw new Error(`Discord API error: ${response.status}`);
    }
  } catch (error) {
    console.error('Failed to send Discord notification:', error);
  }
}

