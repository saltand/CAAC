# Storybook 使用指南

## 🎨 概述

CAAC 项目集成了 Storybook 作为组件开发和文档平台。目前配置了 React 组件的完整展示，Vue 和 Svelte 组件可以通过独立配置运行。

## 🚀 快速开始

### 启动 Storybook

```bash
# 启动 React Storybook（默认）
pnpm run storybook

# 访问地址
http://localhost:6006
```

## 📚 功能特性

### 1. 交互式组件预览
- 实时调整组件属性（宽度、高度、占位文本等）
- 查看组件在不同配置下的表现
- 支持动态切换显示/隐藏按钮

### 2. 多种预设场景
每个组件都提供了多个 Story：
- **Default** - 默认配置
- **WithButton** - 带切换按钮
- **Small/Large** - 不同尺寸展示
- **CustomPlaceholder** - 自定义占位文本
- **ImperativeAPI** - 演示 ref 调用方式

### 3. 自动生成文档
- 基于 TypeScript 类型自动生成 API 文档
- Props 表格展示所有可用属性
- 事件文档说明回调函数签名

### 4. 控制面板
- 动态调整所有组件属性
- 实时预览更改效果
- 事件日志查看触发的回调

## 🗂️ 项目结构

```
.storybook/
├── main.ts          # Storybook 主配置
├── preview.ts       # 预览配置
├── theme.ts         # 自定义主题
└── manager.ts       # 管理器配置

packages/
├── docs/
│   └── Introduction.mdx    # 欢迎页面和文档
├── react/src/
│   ├── CatImage.stories.tsx     # React 组件 Stories
│   └── AllFrameworks.stories.tsx # 框架对比展示
├── vue/src/
│   └── CatImage.stories.ts      # Vue 组件 Stories
└── svelte/src/
    └── CatImage.stories.ts      # Svelte 组件 Stories
```

## 🎯 Stories 说明

### React Stories
位置：`packages/react/src/CatImage.stories.tsx`

包含的 Stories：
- Default - 基础用法
- WithButton - 包含切换按钮
- Small/Large - 尺寸变化
- CustomPlaceholder - 自定义占位
- WithCustomStyle - 自定义样式
- ImperativeAPI - ref 调用演示

### 框架对比
位置：`packages/react/src/AllFrameworks.stories.tsx`

展示 CAAC 组件的跨框架一致性，包括：
- 统一的 API 设计
- 相同的视觉效果
- 一致的交互体验

## 🛠️ 开发指南

### 添加新的 Story

```typescript
export const NewStory: Story = {
  args: {
    width: 400,
    height: 400,
    showSwitchButton: true,
  },
  parameters: {
    docs: {
      description: {
        story: '新 Story 的描述',
      },
    },
  },
};
```

### 自定义渲染

```typescript
export const CustomRender: Story = {
  render: (args) => {
    // 自定义渲染逻辑
    return <CatImage {...args} />;
  },
  args: {
    // 默认参数
  },
};
```

## 🔧 配置说明

### Vite 集成
Storybook 使用 Vite 作为构建工具，提供：
- 快速的热模块替换（HMR）
- 优化的构建性能
- 原生 ESM 支持

### 路径别名
配置了以下路径别名：
- `@caac/shared` → `packages/shared/src`
- `@caac/react` → `packages/react/src`
- `@caac/vue` → `packages/vue/src`
- `@caac/svelte` → `packages/svelte/src`

## 📦 构建和部署

### 构建静态 Storybook

```bash
# 构建 React Storybook
pnpm run build-storybook

# 输出目录
storybook-static/
```

### 部署选项
- **GitHub Pages** - 推送到 gh-pages 分支
- **Netlify/Vercel** - 直接部署 storybook-static 目录
- **自托管** - 使用任何静态文件服务器

## 🎨 主题定制

主题配置文件：`.storybook/theme.ts`

可自定义：
- 品牌名称和 Logo
- 颜色方案
- 字体设置
- UI 元素样式

## 🚦 故障排除

### 常见问题

1. **端口占用**
   ```bash
   # 使用不同端口
   pnpm run storybook -- -p 6007
   ```

2. **依赖问题**
   ```bash
   # 清理并重新安装
   pnpm run clean
   pnpm install
   ```

3. **构建错误**
   ```bash
   # 清理缓存
   rm -rf node_modules/.cache
   pnpm run build-storybook
   ```

## 📖 相关资源

- [Storybook 官方文档](https://storybook.js.org/)
- [Vite 集成指南](https://storybook.js.org/docs/react/builders/vite)
- [MDX 文档编写](https://storybook.js.org/docs/react/writing-docs/mdx)

## 🎯 最佳实践

1. **保持 Stories 简洁** - 每个 Story 专注展示一个特性
2. **使用 TypeScript** - 获得更好的类型提示和文档生成
3. **编写描述** - 为每个 Story 添加清晰的描述
4. **测试交互** - 使用 Storybook 的交互测试功能
5. **文档优先** - 将 Storybook 作为活文档维护