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
        abyss: '#f2f1ed',
        'abyss-light': '#e6e5e0',
        'abyss-elevated': '#ebeae5',
        'accent-primary': '#f54e00',
        'accent-primary-dim': '#cf2d56',
        'accent-primary-glow': 'rgba(245,78,0,0.08)',
        'accent-secondary': '#c08532',
        'text-primary': '#26251e',
        'text-secondary': 'rgba(38,37,30,0.7)',
        'text-muted': 'rgba(38,37,30,0.45)',
        'border-subtle': 'rgba(38,37,30,0.1)',
        'border-strong': 'rgba(38,37,30,0.2)',
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
