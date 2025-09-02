'use client';

import { CatImage } from '@caac/react';
import { useState } from 'react';

export function BasicReactDemo() {
  return (
    <div className="demo-container">
      <h4 className="font-semibold mb-4">基本用法</h4>
      <CatImage width={300} height={300} />
    </div>
  );
}

export function CustomSizeDemo() {
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);

  return (
    <div className="demo-container">
      <h4 className="font-semibold mb-4">自定义尺寸</h4>
      <div className="mb-4 space-y-2">
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            宽度:
            <input
              type="range"
              min="200"
              max="500"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
              className="w-32"
            />
            <span className="text-sm w-12">{width}px</span>
          </label>
        </div>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            高度:
            <input
              type="range"
              min="200"
              max="500"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              className="w-32"
            />
            <span className="text-sm w-12">{height}px</span>
          </label>
        </div>
      </div>
      <CatImage width={width} height={height} />
    </div>
  );
}

export function MultipleDemo() {
  const [count, setCount] = useState(3);

  return (
    <div className="demo-container">
      <h4 className="font-semibold mb-4">多个组件</h4>
      <div className="mb-4">
        <label className="flex items-center gap-2">
          数量:
          <input
            type="range"
            min="1"
            max="6"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="w-32"
          />
          <span className="text-sm">{count}</span>
        </label>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({ length: count }, (_, i) => (
          <CatImage key={i} width={150} height={150} />
        ))}
      </div>
    </div>
  );
}

export function StyledDemo() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="demo-container">
      <h4 className="font-semibold mb-4">自定义样式</h4>
      <div
        className={`transition-transform duration-300 rounded-lg overflow-hidden border-4 border-blue-500 shadow-lg ${
          hovered ? 'transform scale-105' : ''
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <CatImage width={300} height={300} />
      </div>
      <p className="text-sm text-gray-600 mt-2">鼠标悬停试试看！</p>
    </div>
  );
}