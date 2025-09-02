import type { ReactNode } from 'react';

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <h1 className="text-xl font-bold text-gray-900">CAAC 文档</h1>
            <div className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 text-white">
              <span className="text-sm font-medium">🐱 CAAC 跨框架猫图组件库</span>
            </div>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}