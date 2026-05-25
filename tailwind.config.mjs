/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'cp-purple': '#534AB7',
        'cp-violet': '#7B6FD4',
        'cp-blue': '#4A8FE7',
        'cp-cyan': '#00D4FF',
        'cp-dark': '#080810',
        'cp-darker': '#050508',
        'cp-surface': '#0F0F1A',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'drift': 'drift 20s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(20px, -20px) rotate(2deg)' },
          '50%': { transform: 'translate(-10px, 15px) rotate(-1deg)' },
          '75%': { transform: 'translate(15px, 10px) rotate(1deg)' },
        },
      },
    },
  },
  plugins: [],
};
