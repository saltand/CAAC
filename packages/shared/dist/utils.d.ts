/**
 * Utility functions for CAAC components
 */
/**
 * Checks if code is running in a browser environment
 * Useful for SSR compatibility
 */
export declare function isBrowser(): boolean;
/**
 * Checks if code is running on the client side
 * Nuxt-specific check
 */
export declare function isClient(): boolean;
/**
 * Normalizes dimension value to CSS-compatible string
 *
 * @param value - Dimension value (string or number)
 * @returns CSS-compatible dimension string
 */
export declare function normalizeDimension(value: string | number | undefined): string;
/**
 * Generates a unique component ID
 *
 * @param prefix - Optional prefix for the ID
 * @returns Unique string ID
 */
export declare function generateId(prefix?: string): string;
/**
 * Safely parses environment variables for API configuration
 *
 * @param envKey - Environment variable key
 * @returns Environment variable value or undefined
 */
export declare function getEnvVar(envKey: string): string | undefined;
/**
 * Debounces a function call
 *
 * @param func - Function to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced function
 */
export declare function debounce<T extends (...args: any[]) => any>(func: T, delay: number): (...args: Parameters<T>) => void;
//# sourceMappingURL=utils.d.ts.map