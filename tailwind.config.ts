import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        abyss: '#12100c',
        'abyss-light': '#0a0806',
        'abyss-elevated': '#1c1812',
        'accent-primary': '#f54e00',
        'accent-primary-dim': '#ff6b2b',
        'accent-primary-glow': 'rgba(245,78,0,0.10)',
        'accent-secondary': '#c08532',
        'text-primary': '#ede5d6',
        'text-secondary': 'rgba(237,229,214,0.72)',
        'text-muted': 'rgba(237,229,214,0.45)',
        'border-subtle': 'rgba(237,229,214,0.08)',
        'border-strong': 'rgba(237,229,214,0.14)',
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
        body: ["Georgia", "Times New Roman", "serif"],
        mono: ["Berkeley Mono", "SF Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
