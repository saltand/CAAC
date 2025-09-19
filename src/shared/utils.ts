/**
 * Utility functions for CAAC components
 */

/**
 * Checks if code is running in a browser environment
 * Useful for SSR compatibility
 */
export function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}

/**
 * Shape of the global "process" object when available
 */
interface ProcessGlobal {
  client?: boolean
  env?: Record<string, string | undefined>
}

/**
 * Checks if code is running on the client side
 * Nuxt-specific check
 */
function getProcessGlobal(): ProcessGlobal | undefined {
  if (typeof globalThis === 'undefined')
    return undefined

  const candidate = Reflect.get(globalThis as object, 'process') as unknown
  if (!candidate || typeof candidate !== 'object')
    return undefined

  return candidate as ProcessGlobal
}

export function isClient(): boolean {
  const proc = getProcessGlobal()
  return proc?.client === true || proc === undefined
}

/**
 * Normalizes dimension value to CSS-compatible string
 *
 * @param value - Dimension value (string or number)
 * @returns CSS-compatible dimension string
 */
export function normalizeDimension(value: string | number | undefined): string {
  if (value === undefined)
    return 'auto'
  if (typeof value === 'number')
    return `${value}px`
  return value
}

/**
 * Generates a unique component ID
 *
 * @param prefix - Optional prefix for the ID
 * @returns Unique string ID
 */
export function generateId(prefix = 'caac'): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Safely parses environment variables for API configuration
 *
 * @param envKey - Environment variable key
 * @returns Environment variable value or undefined
 */
export function getEnvVar(envKey: string): string | undefined {
  const env = getProcessGlobal()?.env
  return env?.[envKey]
}

/**
 * Debounces a function call
 *
 * @param func - Function to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | undefined

  return (...args: Parameters<T>) => {
    if (timeoutId !== undefined)
      clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
      func(...args)
    }, delay)
  }
}
