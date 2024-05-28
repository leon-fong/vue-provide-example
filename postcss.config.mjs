import viewport from 'postcss-mobile-forever'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default {
  plugins: [
    tailwindcss,
    autoprefixer,
    viewport({
      appSelector: '#app',
      viewportWidth: 375,
      maxDisplayWidth: 600,
    }),
  ],
}
