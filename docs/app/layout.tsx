import './global.css';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh" className={inter.className} suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}

export const metadata = {
  title: 'CAAC - 跨框架猫图组件库',
  description: '简单易用的 Vue 和 React 猫咪图片展示组件',
};