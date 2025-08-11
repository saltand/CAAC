# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

CAAC（Cat as a Component）是一个跨框架的猫图组件库，支持 Vue 2/3、React、Next.js、Nuxt 和 Svelte 5。该项目使用 pnpm workspaces 管理的 monorepo 结构。

## 常用命令

### 开发命令
```bash
# 安装依赖
pnpm install

# 构建所有包
pnpm run build

# 运行所有测试
pnpm run test

# 运行特定框架的测试
pnpm run test:vue    # Vue 测试
pnpm run test:react  # React 测试
pnpm run test:svelte # Svelte 测试

# 类型检查
pnpm run typecheck

# 代码检查
pnpm run lint

# 清理构建产物
pnpm run clean

# E2E 测试
pnpm run test:e2e

# Storybook
pnpm run storybook        # 启动 React Storybook（端口 6006）
pnpm run storybook:vue    # 启动 Vue Storybook（端口 6007）
pnpm run storybook:svelte # 启动 Svelte Storybook（端口 6008）
pnpm run build-storybook  # 构建 React Storybook
pnpm run build-storybook:all # 构建所有框架的 Storybook
```

### 单个包的操作
```bash
# 构建特定包
pnpm --filter @caac/vue run build

# 在特定包中运行命令
pnpm --filter @caac/react run dev
```

## 代码架构

### Monorepo 结构
```
/Users/salt/Code/CAAC/
├── .storybook/       # Storybook 配置
├── packages/
│   ├── shared/       # 共享核心逻辑（API 客户端、类型、工具函数）
│   ├── vue/          # Vue 2/3 兼容组件
│   ├── react/        # React 组件（支持 Next.js）
│   ├── svelte/       # Svelte 5 组件
│   ├── nuxt/         # Nuxt 模块封装
│   └── docs/         # Storybook 文档
├── examples/         # 各框架使用示例
└── tests/           # 跨框架测试
```

### 核心设计原则

1. **框架隔离**: 每个框架包独立管理，仅依赖 `@caac/shared`
2. **SSR 兼容**: 所有组件都考虑 SSR 场景，使用 `isBrowser()` 检查
3. **统一 API**: 所有框架组件暴露相同的 props、events 和 methods
4. **类型安全**: 使用 TypeScript，所有接口定义在 `@caac/shared/types.ts`

### 关键实现细节

#### Cat API 交互
- 端点: `https://api.thecatapi.com/v1/images/search`
- 响应格式: 返回数组，取第一个元素的 `url` 字段
- 错误处理: 封装在 `fetchCatImage()` 函数中，返回统一的 `CatApiResponse`

#### 框架特定注意事项

**Vue 2/3 兼容**:
- 使用 Composition API（Vue 3）编写
- 通过 `defineExpose` 暴露 `change` 方法
- 使用 CSS Modules 进行样式隔离

**React/Next.js**:
- 使用 `'use client'` 指令确保客户端渲染
- 通过 `forwardRef` 和 `useImperativeHandle` 暴露命令式 API
- 内联样式实现，支持 className 和 style props

**Svelte 5**:
- 使用新的 `$props` rune 替代 `export let`
- 使用 `$state` 和 `$derived` 进行响应式状态管理
- 通过 `export function` 暴露 `change` 方法

**Nuxt**:
- 封装 Vue 组件为 Nuxt 模块
- 处理 SSR hydration 问题
- 使用 `process.client` 检查

#### 构建配置
- 使用 tsup + esbuild 构建
- 输出 ESM 和 CJS 双格式
- 框架依赖标记为 external
- 生成 source maps 便于调试

### Storybook 集成
- 支持多框架组件同时展示
- 使用 Vite 作为构建工具
- 自定义主题和品牌设置
- MDX 文档支持
- 各框架独立的 Story 文件

## 开发规范

### 代码风格
- 使用 TypeScript 严格模式
- 遵循各框架的最佳实践和命名约定
- 保持组件 API 的一致性
- 注释关键逻辑和边缘情况

### 测试要求
- 每个框架组件都需要单元测试
- 测试加载状态、错误处理和用户交互
- E2E 测试验证跨浏览器兼容性
- Mock Cat API 响应确保测试稳定性

### 版本管理
- 使用 pnpm workspace 协议管理内部依赖
- 遵循 semver 版本规范
- 同步更新所有包版本

## 常见问题

### SSR Hydration 不匹配
- 确保在 `onMounted`（Vue）、`useEffect`（React）或 `$effect`（Svelte）中初始化
- 使用 `isBrowser()` 检查环境

### TypeScript 类型错误
- 运行 `pnpm run typecheck` 检查所有包
- 确保 `@caac/shared` 的类型定义正确导出

### 构建失败
- 检查 tsup.config.ts 中的 external 配置
- 确保框架依赖未被打包进最终产物

### 测试失败
- 确认 Cat API mock 正确设置
- 检查异步操作的等待处理
- 验证 DOM 更新后的断言时机

## 重要提醒

- **不要在 shared 包中使用框架特定 API**
- **始终处理 loading 和 error 状态**
- **保持所有框架组件的 API 一致性**
- **注意 Svelte 5 使用 `$props` 而非 `export let`**
- **SSR 环境下跳过 fetch 操作**
- **使用 workspace: 协议引用内部包**