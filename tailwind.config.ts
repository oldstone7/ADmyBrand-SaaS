import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom brand colors - Trust & Professionalism focused
        brand: {
          50: '#f0f9ff',   // Light blue - Trust
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',  // Professional blue
          500: '#0ea5e9',  // Primary brand blue - Trust & reliability
          600: '#0284c7',  // Darker blue - Authority
          700: '#0369a1',  // Deep blue - Professionalism
          800: '#075985',
          900: '#0c4a6e',  // Navy - Premium feel
        },
        // Professional gradient colors
        gradient: {
          from: '#667eea',    // Professional purple
          via: '#764ba2',     // Sophisticated purple
          to: '#f093fb',      // Accent pink
        },
        // Trust-building colors
        trust: {
          blue: '#0ea5e9',    // Primary trust color
          green: '#10b981',   // Success/security
          purple: '#8b5cf6',  // Innovation
          gray: '#64748b',    // Professional neutral
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // 8px Grid System - All spacing based on 8px increments
      spacing: {
        '0.5': '2px',   // 0.25 * 8px
        '1': '4px',     // 0.5 * 8px  
        '1.5': '6px',   // 0.75 * 8px
        '2': '8px',     // 1 * 8px - Base unit
        '3': '12px',    // 1.5 * 8px
        '4': '16px',    // 2 * 8px
        '5': '20px',    // 2.5 * 8px
        '6': '24px',    // 3 * 8px
        '7': '28px',    // 3.5 * 8px
        '8': '32px',    // 4 * 8px
        '10': '40px',   // 5 * 8px
        '12': '48px',   // 6 * 8px
        '16': '64px',   // 8 * 8px
        '20': '80px',   // 10 * 8px
        '24': '96px',   // 12 * 8px
        '32': '128px',  // 16 * 8px
        '40': '160px',  // 20 * 8px
        '48': '192px',  // 24 * 8px
        '56': '224px',  // 28 * 8px
        '64': '256px',  // 32 * 8px
      },
      // Typography Hierarchy - Clear distinction
      fontSize: {
        // Captions & Small Text
        'xs': ['12px', { lineHeight: '16px', letterSpacing: '0.025em' }],
        'sm': ['14px', { lineHeight: '20px', letterSpacing: '0.025em' }],
        
        // Body Text
        'base': ['16px', { lineHeight: '24px', letterSpacing: '0' }],
        'lg': ['18px', { lineHeight: '28px', letterSpacing: '0' }],
        'xl': ['20px', { lineHeight: '32px', letterSpacing: '0' }],
        
        // Subheadings
        '2xl': ['24px', { lineHeight: '32px', letterSpacing: '-0.025em' }],
        '3xl': ['30px', { lineHeight: '40px', letterSpacing: '-0.025em' }],
        '4xl': ['36px', { lineHeight: '48px', letterSpacing: '-0.025em' }],
        
        // Main Headings
        '5xl': ['48px', { lineHeight: '56px', letterSpacing: '-0.025em' }],
        '6xl': ['60px', { lineHeight: '72px', letterSpacing: '-0.025em' }],
        '7xl': ['72px', { lineHeight: '80px', letterSpacing: '-0.025em' }],
        '8xl': ['96px', { lineHeight: '104px', letterSpacing: '-0.025em' }],
        '9xl': ['128px', { lineHeight: '136px', letterSpacing: '-0.025em' }],
      },
      // Font weights for clear hierarchy
      fontWeight: {
        'light': '300',
        'normal': '400',    // Body text
        'medium': '500',    // Emphasis
        'semibold': '600',  // Subheadings
        'bold': '700',      // Headings
        'extrabold': '800', // Hero text
        'black': '900',     // Display text
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-in-left": "slide-in-left 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        "scale-in": "scale-in 0.6s ease-out",
        "float": "float 3s ease-in-out infinite",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
