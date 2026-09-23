import type { ShikiSetupReturn } from '@slidev/types'
import { defineShikiSetup } from '@slidev/types'

// Thèmes à fort contraste : le token le plus pâle (commentaires) atteint
// 5:1 sur fond blanc et 8:1 sur fond sombre, contre ~2,2:1 pour vitesse.
export default defineShikiSetup((): ShikiSetupReturn => {
  return {
    themes: {
      dark: 'github-dark-high-contrast',
      light: 'github-light-high-contrast',
    },
  }
})
