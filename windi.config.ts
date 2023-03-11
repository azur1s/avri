import typhography from 'windicss/plugin/typography'
import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
    darkMode: 'class',
    plugins: [typhography({ dark: true })],
    shortcuts: {
        'tr': 'transition-colors duration-200',
    }
})