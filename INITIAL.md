## FEATURE:

需求文档 — Cat as a Component（CAAC）

一、目标
提供一个跨框架的极简组件，渲染一张随机猫咪图片并允许在运行时切换为另一张。支持的框架：Vue 2、Vue 3、React、Next.js、Nuxt、Svelte 5。开发者通过按框架名导入并直接使用 <CatImage/> 即可在页面呈现猫图。

二、核心功能

1. 初始加载
   • 组件挂载后立刻调用 cat API 获取随机猫图。
   • 成功返回后，将图片 URL 绑定到 <img> 的 src。
   • 加载失败时显示占位图或 alt 文本。

2. 切换图片
   • 暴露一个 change() 方法：每次调用重新请求 API 并替换图片。
   • 在组件内部提供一个可选的内置按钮（显示「换猫」文字），点击时触发 change()。
   • 支持外部通过 ref / expose（或等效机制）调用 change()。

3. 可配置项
   • width、height：接受字符串或数字，控制图片尺寸。
   • placeholder：自定义加载中占位图。
   • showSwitchButton：布尔值，控制是否渲染内置按钮，默认 false。

4. 事件
   • onLoad(url)：图片加载成功后触发，返回图片链接。
   • onError(error)：加载失败时触发。
   • onChange(url)：切换成功后触发。

三、API 交互
• 请求地址：GET [https://api.thecatapi.com/v1/images/search](https://api.thecatapi.com/v1/images/search)
• 解析：取响应数组中第一个对象的 url 字段。
• 限制：若 API 配额受限，组件应在日志中提示并停止重复请求。
• 可选 header：x-api-key（如用户提供）。

四、包结构
CAAS/
├─ vue/          （Vue 2 / Vue 3 自动检测并输出各自版本）
├─ react/        （纯 React 组件，Next.js 直接复用）
├─ nuxt/         （Nuxt 模块包装，内部复用 Vue 3 组件）
├─ svelte/       （Svelte 5 组件）
└─ shared/       （核心逻辑：请求、状态管理、类型）

五、构建与发布
• 使用 pnpm workspaces 管理多包。
• 打包工具：tsup + esbuild；输出 ESM 和 CJS。
• 每个子包的入口：index.ts，默认导出组件和类型。
• 包版本遵循 semver；根包脚本统一 bump 并发布。

六、兼容性与依赖
• 浏览器要求：支持 ES2018+。
• 网络：组件只依赖 fetch，如需兼容旧浏览器可选择性引入 polyfill。
• 组件本身无 UI 库依赖。Nuxt/Next 交付 SSR 友好版本，自动跳过服务器端 fetch。

七、测试
• 单元测试：Vitest (Vue/React)/Svelte Testing Library，模拟 fetch。
• 端到端：Playwright，验证 change() 行为与按钮交互。

八、性能与安全
• 请求仅在 change() 时发送，避免任何轮询。
• 图片加载完成后添加 rel="noopener" 安全属性（防止悬空引用）。
• 做好错误捕获，避免未处理 Promise 警告。

九、示例使用
Vue 3:
import CatImage from 'CAAS/vue' <CatImage width="300" height="300" showSwitchButton />

React:
import CatImage from 'CAAS/react'
\<CatImage ref={ref => window\.catRef = ref} />
window\.catRef.change()

十、交付物
• 代码仓库（含 README、变更日志）。
• 发布到 npm 的多框架子包。
• 简短示例项目（每个框架一个）。


## EXAMPLES:

[Provide and explain examples that you have in the `examples/` folder]

## DOCUMENTATION:

https://documenter.getpostman.com/view/5578104/RWgqUxxh#99d84a91-d4e5-42af-b965-596a5da4d491

## OTHER CONSIDERATIONS:

[Any other considerations or specific requirements - great place to include gotchas that you see AI coding assistants miss with your projects a lot]
