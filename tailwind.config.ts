import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        abyss: '#0d1117',
        'abyss-light': '#161b22',
        'tactical-blue': '#58a6ff',
        'tactical-blue-dim': '#388bfd',
        'warning-orange': '#db6d28',
        'grid-line': '#21262d',
        'text-primary': '#e6edf3',
        'text-secondary': '#8b949e',
        'text-muted': '#484f58',
        'border-subtle': '#30363d',
        'terminal-green': '#3fb950',
        'terminal-red': '#f85149',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'stat': ['1.75rem', { lineHeight: '1.2', fontWeight: '600' }],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(48,54,61,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(48,54,61,0.3) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-32': '32px 32px',
      },
      keyframes: {
        'blink-cursor': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      animation: {
        'blink-cursor': 'blink-cursor 1s step-end infinite',
        'pulse-subtle': 'pulse-subtle 2s ease-in-out infinite',
      },
      borderRadius: {
        'none': '0px',
        'sm': '2px',
      },
    },
  },
  plugins: [],
};

export default config;
