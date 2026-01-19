/**
 * @saltand/caac - 跨框架猫图组件库
 *
 * 主入口文件，导出所有框架的组件和类型
 */

// 导出 React 组件
export {
  CatGallery as ReactCatGallery,
  CatImage as ReactCatImage,
  useCatImage as useReactCatImage,
} from './react'

// 导出共享类型和工具
export * from './shared'

// 导出 Vue 组件
export {
  useCatImage as useVueCatImage,
  CatGallery as VueCatGallery,
  CatImage as VueCatImage,
} from './vue'

// 为了向后兼容，提供通用导出（用户需要根据框架选择）
// 注意：在实际使用中，建议使用具体的子路径导入，如 '@saltand/caac/react' 或 '@saltand/caac/vue'
