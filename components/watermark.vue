<!--
  Logo Yeeso et baseline. Le logo marine s'affiche en thème clair, le blanc
  en thème sombre (charte : jamais recoloré à la volée).
  Largeur du logo ≥ 150 px à l'écran (charte, taille minimale).

  Usage : <watermark />
-->

<script setup lang="ts">
import logoBlue from '../assets/logos/logo-principal-bleu.webp'
import logoWhite from '../assets/logos/logo-principal-blanc.webp'

defineProps({
  baseline: {
    type: String,
    default: "L'avenir de l'IT avec les femmes",
  },
})
</script>

<template>
  <div class="watermark">
    <img class="watermark__logo watermark__logo--light" :src="logoBlue" alt="yeeso" />
    <img class="watermark__logo watermark__logo--dark" :src="logoWhite" alt="yeeso" />
    <span v-if="baseline" class="watermark__baseline">{{ baseline }}</span>
  </div>
</template>

<style>
.watermark {
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 0.4rem;
}

.watermark__logo {
  height: auto;
  width: 150px;
}

.watermark__logo--dark {
  display: none;
}

html.dark .watermark__logo--light {
  display: none;
}

html.dark .watermark__logo--dark {
  display: block;
}

.watermark__baseline {
  color: var(--color-heading);
  font-family: var(--font-secondary);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}
</style>
