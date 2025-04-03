import Root from '@/components/layouts/root';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: "%s | I'm Walking Here!",
    default: "I'm Walking Here!",
  },
  description: 'Portfolio for Walker Marlatt',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Root>{children}</Root>
      </body>
    </html>
  );
}
