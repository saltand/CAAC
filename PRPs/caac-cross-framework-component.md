name: "CAAC - Cross-Framework Cat Image Component"
description: |

## Purpose
Build a production-ready cross-framework cat image component library supporting Vue 2/3, React, Next.js, Nuxt, and Svelte 5. Component displays random cat images from The Cat API with change functionality, configurable properties, and SSR compatibility.

## Core Principles
1. **Context is King**: Include ALL necessary documentation, examples, and caveats
2. **Validation Loops**: Provide executable tests/lints the AI can run and fix
3. **Information Dense**: Use keywords and patterns from the codebase
4. **Progressive Success**: Start simple, validate, then enhance
5. **Global rules**: Be sure to follow all rules in CLAUDE.md

---

## Goal
Create a cross-framework component library called "CAAC" (Cat as a Component) that provides a unified <CatImage/> component working across Vue 2, Vue 3, React, Next.js, Nuxt, and Svelte 5 with consistent APIs, SSR compatibility, and optimal developer experience.

## Why
- **Business value**: Demonstrates cross-framework component architecture patterns
- **Integration**: Shows modern build tooling with pnpm workspaces and tsup
- **Problems solved**: Eliminates need to rewrite components for each framework
- **Developer Experience**: Unified API across all major frontend frameworks

## What
A monorepo containing framework-specific packages that all expose a <CatImage/> component with:
- Random cat image fetching from The Cat API
- Configurable dimensions, placeholder, and switch button
- Events for load, error, and change states
- Method exposure for programmatic image changes
- SSR compatibility for Next.js and Nuxt

### Success Criteria
- [ ] Component works identically across all 6 frameworks
- [ ] SSR compatibility with no hydration mismatches
- [ ] All packages build successfully with ESM/CJS outputs
- [ ] Unit tests pass for all framework implementations
- [ ] E2E tests validate cross-browser functionality
- [ ] Documentation covers setup and usage for each framework

## All Needed Context

### Documentation & References
```yaml
# MUST READ - Include these in your context window
- url: https://api.thecatapi.com/v1/images/search
  why: Cat API endpoint returning JSON array with image URL and metadata
  
- url: https://docs.thecatapi.com/1.0/authentication
  why: Optional x-api-key header for authentication, no rate limits specified
  
- url: https://vuejs.org/guide/typescript/composition-api
  why: Vue 3 TypeScript patterns, defineProps, defineExpose, template refs
  
- url: https://vuejs.org/guide/essentials/template-refs
  why: Vue template refs and component exposure patterns
  
- url: https://svelte.dev/docs/svelte/v5-migration-guide
  why: Svelte 5 props with $props rune, new reactivity patterns
  
- url: https://svelte.dev/docs/svelte/$props
  why: Svelte 5 props destructuring and TypeScript integration
  
- url: https://nextjs.org/docs/app/getting-started/server-and-client-components
  why: Next.js SSR patterns, server vs client components, hydration
  
- url: https://nuxt.com/docs/guide/concepts/rendering
  why: Nuxt universal rendering and hydration patterns
  
- url: https://tsup.egoist.dev/
  why: tsup bundler for dual ESM/CJS output with TypeScript declarations
  
- url: https://pnpm.io/workspaces
  why: pnpm workspace configuration for monorepo package management
  
- url: https://naver.github.io/cfcs/
  why: Cross Framework Components reference for multi-framework patterns

- file: /Users/salt/Code/CAAC/CLAUDE.md
  why: Project-specific rules for code structure, testing, and conventions
```

### Current Codebase tree
```bash
/Users/salt/Code/CAAC/
├── CLAUDE.md                 # Project rules and conventions
├── INITIAL.md               # Feature requirements (Chinese)
├── README.md                # Context Engineering template
├── PRPs/
│   ├── templates/
│   │   └── prp_base.md     # PRP template structure
│   └── EXAMPLE_multi_agent_prp.md
├── examples/               # Empty - no existing patterns to follow
└── use-cases/             # Contains MCP server examples (not relevant)
```

### Desired Codebase tree with files to be added and responsibility of file
```bash
/Users/salt/Code/CAAC/
├── package.json                    # Root package with workspace config
├── pnpm-workspace.yaml            # Workspace package definitions
├── tsconfig.json                  # Base TypeScript configuration
├── packages/
│   ├── shared/                    # Core logic shared across frameworks
│   │   ├── package.json           # Shared utilities package
│   │   ├── tsconfig.json         # TypeScript config
│   │   ├── tsup.config.ts        # Build configuration
│   │   ├── src/
│   │   │   ├── index.ts          # Main exports
│   │   │   ├── api.ts            # Cat API client
│   │   │   ├── types.ts          # TypeScript interfaces
│   │   │   └── utils.ts          # Utility functions
│   │   └── dist/                 # Built files (ESM/CJS)
│   ├── vue/                      # Vue 2/3 compatible component
│   │   ├── package.json          # Vue package dependencies
│   │   ├── tsconfig.json        # Vue-specific TypeScript
│   │   ├── tsup.config.ts       # Vue build config
│   │   ├── src/
│   │   │   ├── index.ts         # Main export
│   │   │   ├── CatImage.vue     # Vue SFC component
│   │   │   └── composable.ts    # Vue composition logic
│   │   └── dist/                # Built Vue component
│   ├── react/                   # React component (works with Next.js)
│   │   ├── package.json         # React dependencies
│   │   ├── tsconfig.json       # React TypeScript config
│   │   ├── tsup.config.ts      # React build config
│   │   ├── src/
│   │   │   ├── index.ts        # Main export
│   │   │   ├── CatImage.tsx    # React component
│   │   │   └── hooks.ts        # React hooks
│   │   └── dist/               # Built React component
│   ├── nuxt/                   # Nuxt module wrapper
│   │   ├── package.json        # Nuxt module config
│   │   ├── src/
│   │   │   ├── module.ts       # Nuxt module definition
│   │   │   └── runtime/        # Runtime components
│   │   │       └── CatImage.vue # SSR-safe Vue component
│   │   └── dist/               # Built Nuxt module
│   └── svelte/                 # Svelte 5 component
│       ├── package.json        # Svelte dependencies
│       ├── tsconfig.json      # Svelte TypeScript
│       ├── tsup.config.ts     # Svelte build config
│       ├── src/
│       │   ├── index.ts       # Main export
│       │   └── CatImage.svelte # Svelte 5 component
│       └── dist/              # Built Svelte component
├── examples/                   # Usage examples for each framework
│   ├── vue-example/           # Vue example project
│   ├── react-example/         # React example project
│   ├── nuxt-example/          # Nuxt example project
│   └── svelte-example/        # Svelte example project
├── tests/                     # Cross-framework tests
│   ├── unit/                  # Unit tests by framework
│   └── e2e/                   # Playwright E2E tests
└── docs/                      # Documentation
    └── README.md              # Usage guide for each framework
```

### Known Gotchas of our codebase & Library Quirks
```typescript
// CRITICAL: Vue 2 vs Vue 3 detection - use Vue.version check in component
// CRITICAL: Svelte 5 uses $props rune instead of export let
// CRITICAL: Next.js SSR requires 'use client' directive for interactive components
// CRITICAL: Nuxt requires client-only wrapper or process.client check for fetch
// CRITICAL: Cat API returns array with single object: [{ url, id, width, height }]
// CRITICAL: fetch() not available in older browsers - component should gracefully degrade
// CRITICAL: tsup requires separate configs for each package due to different entry points
// CRITICAL: pnpm workspaces require "workspace:" protocol for internal dependencies
// CRITICAL: SSR hydration mismatches occur if server/client render differently
// CRITICAL: Component refs work differently: Vue (defineExpose), React (forwardRef), Svelte (bind:this)
```

## Implementation Blueprint

### Data models and structure

Create the core data models to ensure type safety and consistency across frameworks.

```typescript
// packages/shared/src/types.ts
export interface CatImageData {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface CatImageProps {
  width?: string | number;
  height?: string | number;
  placeholder?: string;
  showSwitchButton?: boolean;
}

export interface CatImageEvents {
  onLoad?: (url: string) => void;
  onError?: (error: Error) => void;
  onChange?: (url: string) => void;
}

export interface CatImageRef {
  change: () => Promise<void>;
}

export interface CatApiResponse {
  data: CatImageData | null;
  error: Error | null;
  loading: boolean;
}
```

### List of tasks to be completed to fulfill the PRP in the order they should be completed

```yaml
Task 1: Setup Monorepo Structure
CREATE package.json:
  - PATTERN: Use pnpm workspaces configuration
  - Set up workspace packages array
  - Add build scripts for all packages

CREATE pnpm-workspace.yaml:
  - Define packages/*/package.json pattern
  - Configure workspace dependency resolution

CREATE tsconfig.json:
  - Base TypeScript configuration
  - Shared compiler options for all packages

Task 2: Implement Shared Core Logic
CREATE packages/shared/:
  - PATTERN: Follow shared library patterns with exports
  - Implement Cat API client with fetch and error handling
  - Create TypeScript interfaces for all data models
  - Add utility functions for SSR detection

Task 3: Build Vue Component (2/3 Compatible)
CREATE packages/vue/:
  - PATTERN: Vue 3 Composition API with Vue 2 fallback detection
  - Use defineProps, defineEmits, defineExpose for Vue 3
  - Implement template refs and reactive state
  - Handle SSR with process.client checks

Task 4: Build React Component
CREATE packages/react/:
  - PATTERN: React hooks with forwardRef for imperative API
  - Use useState, useEffect, useImperativeHandle
  - Handle SSR with typeof window checks
  - TypeScript with proper prop interfaces

Task 5: Build Svelte 5 Component
CREATE packages/svelte/:
  - PATTERN: Svelte 5 runes with $props and $state
  - Use new props destructuring syntax
  - Implement actions for ref access
  - Handle SSR with browser environment detection

Task 6: Build Nuxt Module
CREATE packages/nuxt/:
  - PATTERN: Nuxt module with auto-registration
  - Wrap Vue component with SSR safety
  - Register as global component
  - Handle server-side rendering gracefully

Task 7: Configure Build System
CREATE tsup.config.ts for each package:
  - PATTERN: Dual ESM/CJS output with TypeScript declarations
  - Framework-specific entry points
  - External dependency handling
  - Source map generation

Task 8: Create Usage Examples
CREATE examples/ for each framework:
  - PATTERN: Minimal working examples showing all features
  - Demonstrate props, events, and imperative API
  - Include SSR examples for Next.js and Nuxt
  - Show error handling and loading states

Task 9: Implement Test Suite
CREATE tests/:
  - PATTERN: Unit tests with framework-specific testing libraries
  - Mock Cat API responses for consistent testing
  - E2E tests with Playwright for cross-browser validation
  - SSR-specific tests for hydration behavior

Task 10: Add Documentation
CREATE comprehensive README:
  - PATTERN: Framework-specific installation and usage
  - API documentation with TypeScript examples
  - SSR setup instructions
  - Troubleshooting common issues
```

### Per task pseudocode as needed added to each task

```typescript
// Task 2: Shared Core Logic
// packages/shared/src/api.ts
export async function fetchCatImage(): Promise<CatApiResponse> {
    // PATTERN: Always check if fetch is available (SSR compatibility)
    if (typeof fetch === 'undefined') {
        return { data: null, error: null, loading: false };
    }
    
    try {
        // CRITICAL: Cat API returns array with single object
        const response = await fetch('https://api.thecatapi.com/v1/images/search', {
            headers: {
                // OPTIONAL: x-api-key header if user provides
                ...(process.env.CAT_API_KEY && { 'x-api-key': process.env.CAT_API_KEY })
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const [catData] = await response.json() as CatImageData[];
        return { data: catData, error: null, loading: false };
        
    } catch (error) {
        // PATTERN: Structured error handling
        return { 
            data: null, 
            error: error instanceof Error ? error : new Error('Unknown error'),
            loading: false 
        };
    }
}

// Task 3: Vue Component
// packages/vue/src/CatImage.vue
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchCatImage } from '@caac/shared';
import type { CatImageProps, CatImageEvents } from '@caac/shared';

// PATTERN: Vue 3 props with TypeScript and defaults
const props = withDefaults(defineProps<CatImageProps>(), {
    width: 300,
    height: 300,
    placeholder: 'Loading cat...',
    showSwitchButton: false
});

// PATTERN: Vue 3 events with TypeScript
const emit = defineEmits<CatImageEvents>();

// PATTERN: Reactive state management
const imageUrl = ref<string>('');
const loading = ref(true);
const error = ref<string>('');

// PATTERN: Imperative API exposure
const change = async () => {
    loading.value = true;
    const result = await fetchCatImage();
    
    if (result.error) {
        error.value = result.error.message;
        emit('onError', result.error);
    } else if (result.data) {
        imageUrl.value = result.data.url;
        emit('onChange', result.data.url);
    }
    loading.value = false;
};

// CRITICAL: Expose methods for parent component access
defineExpose({ change });

// PATTERN: SSR-safe initialization
onMounted(() => {
    if (typeof window !== 'undefined') {
        change();
    }
});
</script>

// Task 4: React Component  
// packages/react/src/CatImage.tsx
export const CatImage = forwardRef<CatImageRef, CatImageProps & CatImageEvents>(
    ({ width = 300, height = 300, placeholder = 'Loading cat...', showSwitchButton = false, onLoad, onError, onChange }, ref) => {
        // PATTERN: React hooks for state management
        const [imageUrl, setImageUrl] = useState<string>('');
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState<string>('');
        
        // PATTERN: Imperative API with useImperativeHandle
        const change = useCallback(async () => {
            setLoading(true);
            const result = await fetchCatImage();
            
            if (result.error) {
                setError(result.error.message);
                onError?.(result.error);
            } else if (result.data) {
                setImageUrl(result.data.url);
                onChange?.(result.data.url);
            }
            setLoading(false);
        }, [onError, onChange]);
        
        useImperativeHandle(ref, () => ({ change }), [change]);
        
        // PATTERN: SSR-safe effect
        useEffect(() => {
            if (typeof window !== 'undefined') {
                change();
            }
        }, [change]);
        
        // PATTERN: JSX with conditional rendering
        return (
            <div style={{ width, height }}>
                {loading ? (
                    <div>{placeholder}</div>
                ) : error ? (
                    <div>Error: {error}</div>
                ) : (
                    <img src={imageUrl} alt="Random cat" style={{ width: '100%', height: '100%' }} />
                )}
                {showSwitchButton && (
                    <button onClick={change}>换猫</button>
                )}
            </div>
        );
    }
);

// Task 5: Svelte 5 Component
// packages/svelte/src/CatImage.svelte
<script lang="ts">
import { fetchCatImage } from '@caac/shared';
import type { CatImageProps, CatImageEvents } from '@caac/shared';

// PATTERN: Svelte 5 props with destructuring and defaults
let { 
    width = 300, 
    height = 300, 
    placeholder = 'Loading cat...', 
    showSwitchButton = false,
    onLoad,
    onError,
    onChange 
} = $props<CatImageProps & CatImageEvents>();

// PATTERN: Svelte 5 reactive state with $state
let imageUrl = $state('');
let loading = $state(true);
let error = $state('');

// PATTERN: Imperative API function
export async function change() {
    loading = true;
    const result = await fetchCatImage();
    
    if (result.error) {
        error = result.error.message;
        onError?.(result.error);
    } else if (result.data) {
        imageUrl = result.data.url;
        onChange?.(result.data.url);
    }
    loading = false;
}

// PATTERN: SSR-safe initialization
$effect(() => {
    if (typeof window !== 'undefined') {
        change();
    }
});
</script>
```

### Integration Points
```yaml
PACKAGE_JSON_WORKSPACES:
  - pattern: "packages/*"
  - shared dependencies: typescript, tsup, vitest
  - framework-specific deps in individual packages

BUILD_SYSTEM:
  - tool: tsup with esbuild
  - output: dual ESM/CJS with TypeScript declarations
  - external: framework dependencies marked as external
  - source_maps: enabled for debugging

SSR_COMPATIBILITY:
  - next: 'use client' directive for interactive components
  - nuxt: process.client checks and <ClientOnly> wrapper
  - universal: typeof window !== 'undefined' checks

TESTING_INTEGRATION:
  - unit: vitest with @testing-library for each framework
  - e2e: playwright with cross-browser validation
  - mocking: msw for API mocking in tests
```

## Validation Loop

### Level 1: Syntax & Style
```bash
# Run these FIRST - fix any errors before proceeding
pnpm install                     # Install all workspace dependencies
pnpm run typecheck              # TypeScript checking for all packages
pnpm run lint                   # ESLint checking with auto-fix

# Expected: No errors. If errors, READ the error and fix.
```

### Level 2: Unit Tests for each framework
```typescript
// packages/vue/src/__tests__/CatImage.test.ts
import { mount } from '@vue/test-utils';
import { CatImage } from '../index';

test('renders loading state initially', () => {
    const wrapper = mount(CatImage);
    expect(wrapper.text()).toContain('Loading cat...');
});

test('exposes change method via ref', async () => {
    const wrapper = mount(CatImage);
    const vm = wrapper.vm as any;
    expect(typeof vm.change).toBe('function');
});

// packages/react/src/__tests__/CatImage.test.tsx
import { render, screen } from '@testing-library/react';
import { CatImage } from '../CatImage';

test('renders loading placeholder', () => {
    render(<CatImage />);
    expect(screen.getByText('Loading cat...')).toBeInTheDocument();
});

test('provides imperative API via ref', () => {
    const ref = React.createRef<CatImageRef>();
    render(<CatImage ref={ref} />);
    expect(ref.current?.change).toBeDefined();
});

// packages/svelte/src/__tests__/CatImage.test.ts
import { render } from '@testing-library/svelte';
import CatImage from '../CatImage.svelte';

test('renders loading state', () => {
    const { getByText } = render(CatImage);
    expect(getByText('Loading cat...')).toBeInTheDocument();
});
```

```bash
# Run tests iteratively until passing:
pnpm run test                    # All unit tests
pnpm run test:vue               # Vue-specific tests  
pnpm run test:react             # React-specific tests
pnpm run test:svelte            # Svelte-specific tests

# If failing: Read error, understand root cause, fix code, re-run
```

### Level 3: Integration and E2E Tests
```bash
# Build all packages
pnpm run build                  # Build all workspace packages

# Test example projects
cd examples/vue-example && npm run dev &
cd examples/react-example && npm run dev &
cd examples/nuxt-example && npm run dev &
cd examples/svelte-example && npm run dev &

# Run E2E tests
pnpm run test:e2e              # Playwright tests across all examples

# Expected: All examples load correctly, components render cat images
# Manual validation: Click "换猫" buttons, verify new images load
```

## Final Validation Checklist
- [ ] All packages build successfully: `pnpm run build`
- [ ] No TypeScript errors: `pnpm run typecheck`
- [ ] No linting errors: `pnpm run lint`
- [ ] All unit tests pass: `pnpm run test`
- [ ] E2E tests pass: `pnpm run test:e2e`
- [ ] All example projects run without errors
- [ ] Cat images load in all framework examples
- [ ] "换猫" button works in all examples
- [ ] SSR works correctly in Next.js and Nuxt examples
- [ ] Components handle API errors gracefully
- [ ] TypeScript IntelliSense works for all packages
- [ ] Documentation covers all framework usage patterns

---

## Anti-Patterns to Avoid
- ❌ Don't use framework-specific APIs in shared package
- ❌ Don't skip SSR compatibility checks for Next.js/Nuxt
- ❌ Don't hardcode Cat API responses - always handle loading/error states
- ❌ Don't use export let in Svelte 5 - use $props rune
- ❌ Don't forget to mark framework dependencies as external in tsup
- ❌ Don't skip TypeScript declarations in build output
- ❌ Don't use different component APIs across frameworks - maintain consistency

## Confidence Score: 8/10

High confidence due to:
- Clear cross-framework component patterns from research
- Well-documented framework-specific APIs and SSR patterns  
- Established build tooling with tsup and pnpm workspaces
- Comprehensive validation gates for each implementation phase
- Simple API surface reducing complexity

Minor uncertainty on Vue 2/3 compatibility detection edge cases and Svelte 5 rune implementation details, but documentation provides clear guidance for both.