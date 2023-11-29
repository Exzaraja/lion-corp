import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', ...defaultTheme.fontFamily.sans]
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-2deg)'
          },
          '50%': {
            transform: 'rotate(4deg)'
          }
        }
      },
      animation: {
        wiggle: 'wiggle 3s linear infinite'
      }
    }
  },
  plugins: []
}
