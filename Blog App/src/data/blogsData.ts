import type { Blog } from '../types/blog';

export const blogsData: Blog[] = [
  {
    id: "1",
    title: "Understanding useEffect in React",
    author: "Shubham",
    content: `# Understanding useEffect in React

The useEffect hook is one of the most important hooks in React. It allows you to perform side effects in functional components, which is similar to componentDidMount, componentDidUpdate, and componentWillUnmount combined in class components.

## What is useEffect?

useEffect is a React Hook that lets you perform side effects in function components. Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.

## Basic Usage

\`\`\`javascript
useEffect(() => {
  // Side effect code here
  document.title = 'New Title';
}, []); // Dependencies array
\`\`\`

## Key Concepts

1. **Effect without cleanup**: For effects that don't require cleanup
2. **Effect with cleanup**: For effects that do require cleanup (subscriptions, timers)
3. **Dependencies array**: Controls when the effect runs

## Best Practices

- Always include dependencies in the dependencies array
- Use multiple useEffect hooks for different concerns
- Clean up subscriptions and timers to prevent memory leaks

useEffect is powerful but requires understanding to use effectively. Master it, and you'll write better React applications.`,
    summary: "A comprehensive guide to understanding and using the useEffect hook in React applications.",
    date: "2025-07-27",
    image: "/api/placeholder/400/250",
    tags: ["React", "Hooks", "JavaScript"]
  },
  {
    id: "2",
    title: "Modern CSS Grid Layout Techniques",
    author: "Shubham",
    content: `# Modern CSS Grid Layout Techniques

CSS Grid is a two-dimensional layout system that has revolutionized how we create web layouts. It provides a grid-based layout system with rows and columns, making it easier to design complex responsive layouts.

## Why CSS Grid?

Before CSS Grid, we relied on floats, positioning, and flexbox for layout. While these are still useful, CSS Grid provides:

- Two-dimensional control (rows AND columns)
- Easier responsive design
- Better browser support
- More intuitive syntax

## Basic Grid Setup

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
\`\`\`

## Advanced Techniques

1. **Grid Areas**: Name your grid areas for semantic layouts
2. **Auto-fit and Auto-fill**: Create responsive grids without media queries
3. **Subgrid**: Nested grid alignment (newer feature)

## Real-world Examples

CSS Grid excels in:
- Card layouts
- Complex page layouts
- Magazine-style designs
- Dashboard interfaces

Start experimenting with CSS Grid today and transform your layout capabilities!`,
    summary: "Explore modern CSS Grid techniques for creating powerful, responsive web layouts.",
    date: "2025-07-26",
    image: "/api/placeholder/400/250",
    tags: ["CSS", "Grid", "Layout", "Web Design"]
  },
  {
    id: "3",
    title: "TypeScript Best Practices for React",
    author: "Shubham",
    content: `# TypeScript Best Practices for React

TypeScript has become the go-to choice for React development, providing type safety and better developer experience. Here are the best practices I've learned from building production React apps with TypeScript.

## Component Props Typing

Always define interfaces for your component props:

\`\`\`typescript
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary' }) => {
  // Component implementation
};
\`\`\`

## Event Handling

Use proper event types:

\`\`\`typescript
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value);
};
\`\`\`

## State Typing

Let TypeScript infer simple state, but be explicit with complex state:

\`\`\`typescript
// Simple - let TypeScript infer
const [count, setCount] = useState(0);

// Complex - be explicit
const [user, setUser] = useState<User | null>(null);
\`\`\`

## Custom Hooks

Type your custom hooks properly:

\`\`\`typescript
function useApi<T>(url: string): { data: T | null; loading: boolean; error: string | null } {
  // Hook implementation
}
\`\`\`

## Key Benefits

- Catch errors at compile time
- Better IDE support and autocomplete
- Self-documenting code
- Easier refactoring

TypeScript might seem overwhelming at first, but these practices will make your React code more robust and maintainable.`,
    summary: "Essential TypeScript patterns and best practices for React development.",
    date: "2025-07-25",
    image: "/api/placeholder/400/250",
    tags: ["TypeScript", "React", "Best Practices", "Development"]
  },
  {
    id: "4",
    title: "Building Accessible Web Applications",
    author: "Shubham",
    content: `# Building Accessible Web Applications

Web accessibility is not just a nice-to-have feature—it's essential for creating inclusive experiences that work for everyone. Let's explore how to build accessible web applications from the ground up.

## What is Web Accessibility?

Web accessibility means that websites, tools, and technologies are designed and developed so that people with disabilities can use them. This includes people with:

- Visual impairments
- Hearing impairments  
- Motor impairments
- Cognitive impairments

## Key Principles (WCAG)

The Web Content Accessibility Guidelines (WCAG) are built on four principles:

1. **Perceivable**: Information must be presentable in ways users can perceive
2. **Operable**: Interface components must be operable
3. **Understandable**: Information and UI operation must be understandable
4. **Robust**: Content must be robust enough for various assistive technologies

## Practical Implementation

### Semantic HTML
Use proper HTML elements for their intended purpose:

\`\`\`html
<button>Click me</button> <!-- Not <div onclick="..."> -->
<h1>Main Heading</h1> <!-- Proper heading hierarchy -->
<nav>Navigation content</nav>
\`\`\`

### ARIA Labels
Provide context where HTML semantics aren't enough:

\`\`\`html
<button aria-label="Close dialog">×</button>
<input aria-describedby="password-help" type="password">
\`\`\`

### Keyboard Navigation
Ensure all interactive elements are keyboard accessible:

\`\`\`css
:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}
\`\`\`

## Testing Your Accessibility

1. Use automated tools (axe, WAVE)
2. Test with keyboard navigation
3. Use screen readers
4. Check color contrast ratios

Building accessible applications benefits everyone and is the right thing to do. Start with these fundamentals and gradually improve your accessibility practices.`,
    summary: "A comprehensive guide to building accessible web applications that work for everyone.",
    date: "2025-07-24",
    image: "/api/placeholder/400/250",
    tags: ["Accessibility", "Web Development", "WCAG", "Inclusive Design"]
  },
  {
    id: "5",
    title: "Mastering Next.js Server Components",
    author: "Shubham",
    content: `# Mastering Next.js Server Components

Next.js Server Components represent a paradigm shift in how we build React applications. They allow you to write components that execute on the server, reducing client-side JavaScript and improving performance.

## Why Server Components?

- **Zero bundle size**: Code stays on the server
- **Direct database access**: Query databases directly from components
- **Improved performance**: Faster initial page loads
- **Better SEO**: Content is rendered on the server by default

## Basic Implementation

\`\`\`javascript
// app/page.js
export default function Page() {
  // This runs on the server
  const data = await fetchData();
  
  return (
    <main>
      <h1>Server Component</h1>
      <p>{data}</p>
      <ClientComponent />
    </main>
  )
}
\`\`\`

## When to Use Server Components

1. Data fetching
2. Accessing backend resources
3. Large dependencies
4. Sensitive logic

## Best Practices

- Keep interactive elements in Client Components
- Use Suspense for loading states
- Structure your app directory thoughtfully

Server Components combined with Client Components create a powerful architecture for modern web applications.`,
    summary: "Learn how to leverage Next.js Server Components for improved performance and developer experience.",
    date: "2025-07-23",
    image: "/api/placeholder/400/250",
    tags: ["Next.js", "React", "Server Components", "Performance"]
  },
  {
    id: "6",
    title: "The Complete Guide to Zustand State Management",
    author: "Shubham",
    content: `# The Complete Guide to Zustand State Management

Zustand has emerged as a favorite state management solution for React developers who want simplicity without sacrificing power. Let's explore this lightweight yet capable library.

## Why Zustand?

- Minimal boilerplate
- No context providers needed
- Built-in middleware support
- Excellent TypeScript support
- Small bundle size (~1kB)

## Basic Store Setup

\`\`\`typescript
import { create } from 'zustand';

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
\`\`\`

## Advanced Features

1. **Middleware**: Add persistence, logging, etc.
2. **Immer integration**: For nested state updates
3. **Devtools**: Easy debugging
4. **Selectors**: Optimize re-renders

## Comparison with Redux

While Redux is more feature-rich, Zustand provides:
- Simpler API
- Less boilerplate
- More flexible architecture

For many React applications, Zustand offers the perfect balance of simplicity and power.`,
    summary: "A comprehensive look at Zustand, the simple yet powerful state management solution for React.",
    date: "2025-07-22",
    image: "/api/placeholder/400/250",
    tags: ["React", "State Management", "Zustand", "JavaScript"]
  },
  {
    id: "7",
    title: "Advanced JavaScript Patterns You Should Know",
    author: "Shubham",
    content: `# Advanced JavaScript Patterns You Should Know

JavaScript's flexibility allows for powerful patterns that can make your code more maintainable, efficient, and expressive. Let's explore some advanced patterns.

## 1. Module Pattern

Encapsulation in JavaScript:

\`\`\`javascript
const counterModule = (() => {
  let count = 0;

  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
  };
})();
\`\`\`

## 2. Revealing Module Pattern

A variation that's more maintainable:

\`\`\`javascript
const revealingModule = (() => {
  let privateVar = 'I am private';

  function privateFunction() {
    console.log(privateVar);
  }

  function publicFunction() {
    privateFunction();
  }

  return {
    publicFunction
  };
})();
\`\`\`

## 3. Factory Functions

Create objects without using 'new':

\`\`\`javascript
function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(\`Hello, I'm \${name}\`);
    }
  };
}
\`\`\`

## 4. Composition Over Inheritance

Favor object composition over classical inheritance:

\`\`\`javascript
const canEat = {
  eat: function() {
    console.log('Eating');
  }
};

const canWalk = {
  walk: function() {
    console.log('Walking');
  }
};

const person = Object.assign({}, canEat, canWalk);
\`\`\`

Master these patterns to write more professional JavaScript code.`,
    summary: "Explore advanced JavaScript patterns that will elevate your coding skills and improve your applications.",
    date: "2025-07-21",
    image: "/api/placeholder/400/250",
    tags: ["JavaScript", "Design Patterns", "Programming", "Web Development"]
  },
  {
    id: "8",
    title: "Building Microfrontends with Module Federation",
    author: "Shubham",
    content: `# Building Microfrontends with Module Federation

Microfrontends extend the microservices concept to frontend development, allowing teams to work independently on different parts of a web application. Module Federation in Webpack makes this architecture practical.

## What is Module Federation?

Module Federation is a Webpack feature that allows a JavaScript application to dynamically load code from another application at runtime. This enables:

- Independent deployments
- Team autonomy
- Technology flexibility
- Incremental upgrades

## Basic Configuration

\`\`\`javascript
// webpack.config.js (Host)
new ModuleFederationPlugin({
  name: 'host',
  remotes: {
    app1: 'app1@http://localhost:3001/remoteEntry.js',
  },
});

// webpack.config.js (Remote)
new ModuleFederationPlugin({
  name: 'app1',
  filename: 'remoteEntry.js',
  exposes: {
    './Button': './src/Button',
  },
});
\`\`\`

## Implementation Strategies

1. **Vertical splits**: By page/route
2. **Horizontal splits**: By feature/layer
3. **Utility federation**: Shared components

## Benefits

- Independent team workflows
- Technology agnosticism
- Faster build times
- Scalable architecture

Module Federation makes microfrontends practical without the complexity of iframes or other workarounds.`,
    summary: "Learn how to implement microfrontend architecture using Webpack's Module Federation.",
    date: "2025-07-20",
    image: "/api/placeholder/400/250",
    tags: ["Microfrontends", "Webpack", "Module Federation", "Architecture"]
  },
  {
    id: "9",
    title: "Optimizing React Performance with useMemo and useCallback",
    author: "Shubham",
    content: `# Optimizing React Performance with useMemo and useCallback

React is fast by default, but as applications grow, performance optimization becomes crucial. The useMemo and useCallback hooks are powerful tools for preventing unnecessary calculations and re-renders.

## Understanding useMemo

useMemo memoizes expensive calculations:

\`\`\`javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
\`\`\`

## Understanding useCallback

useCallback memoizes functions to prevent unnecessary recreations:

\`\`\`javascript
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
\`\`\`

## When to Use Them

### Use useMemo when:
- Calculating expensive values
- Preventing unnecessary re-renders of child components
- Referential equality matters in dependencies

### Use useCallback when:
- Passing callbacks to optimized child components
- Functions are dependencies of other hooks
- Preventing unnecessary effect triggers

## Common Pitfalls

1. Overusing memoization (premature optimization)
2. Incorrect dependency arrays
3. Not measuring performance first
4. Memoizing everything "just in case"

## Best Practices

- Profile first, optimize second
- Use React DevTools Profiler
- Focus on actual bottlenecks
- Remember: memoization has its own cost

Used judiciously, these hooks can significantly improve your React application's performance.`,
    summary: "A deep dive into using useMemo and useCallback to optimize React application performance.",
    date: "2025-07-19",
    image: "/api/placeholder/400/250",
    tags: ["React", "Performance", "Hooks", "Optimization"]
  },
  {
    id: "10",
    title: "The Future of CSS: Nesting, Container Queries, and More",
    author: "Shubham",
    content: `# The Future of CSS: Nesting, Container Queries, and More

CSS is evolving rapidly with exciting new features that are changing how we write styles. Let's explore the most significant recent additions and upcoming features.

## CSS Nesting

Finally, native nesting in CSS:

\`\`\`css
.card {
  padding: 1rem;
  
  & .title {
    font-size: 1.5rem;
  }
  
  &:hover {
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
}
\`\`\`

## Container Queries

Style elements based on their container size, not viewport:

\`\`\`css
.component {
  container-type: inline-size;
}

@container (min-width: 500px) {
  .component {
    /* styles for when container is wide enough */
  }
}
\`\`\`

## New Color Spaces

More expressive color options:

\`\`\`css
.oklch {
  color: oklch(70% 0.15 50);
}
.hwb {
  color: hwb(120deg 20% 30%);
}
\`\`\`

## Other Exciting Features

1. **CSS Scope**: Scoped styles without frameworks
2. **CSS Masonry Layout**: Native masonry grids
3. **CSS Anchor Positioning**: Position elements relative to others
4. **View Transitions API**: Smooth transitions between states

## Browser Support

Most modern browsers now support these features, with others quickly catching up. Use @supports to progressively enhance:

\`\`\`css
@supports (container-type: inline-size) {
  /* Container query styles */
}
\`\`\`

The future of CSS is brighter than ever with these powerful new capabilities.`,
    summary: "Explore the latest and upcoming CSS features that are transforming how we style the web.",
    date: "2025-07-18",
    image: "/api/placeholder/400/250",
    tags: ["CSS", "Frontend", "Web Design", "Modern CSS"]
  },
  {
    id: "11",
    title: "Building a Design System with Storybook",
    author: "Shubham",
    content: `# Building a Design System with Storybook

Design systems have become essential for creating consistent, maintainable UIs at scale. Storybook provides the perfect environment to develop, document, and test your design system components.

## Why Storybook?

- Isolated component development
- Interactive documentation
- Visual testing
- Addon ecosystem
- Team collaboration

## Getting Started

1. Install Storybook:
\`\`\`bash
npx storybook@latest init
\`\`\`

2. Create your first component story:
\`\`\`javascript
// Button.stories.js
import Button from './Button';

export default {
  title: 'Design System/Button',
  component: Button,
};

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};
\`\`\`

## Key Features

### Documentation
Auto-generate docs from your components and stories

### Controls
Interact with component props dynamically

### Addons
Extend with:
- Accessibility checks
- Viewport testing
- Figma integration
- Visual regression testing

## Best Practices

1. Organize components logically
2. Write comprehensive stories
3. Document prop types and usage
4. Set up Chromatic for visual regression testing
5. Integrate with your CI pipeline

A well-maintained design system with Storybook can dramatically improve your team's productivity and consistency.`,
    summary: "A comprehensive guide to creating and maintaining a design system using Storybook.",
    date: "2025-07-17",
    image: "/api/placeholder/400/250",
    tags: ["Design Systems", "Storybook", "UI Development", "Frontend"]
  }
];