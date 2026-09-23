<!--
  Portrait détouré selon la charte : contour blanc, posé sur un rond coloré
  (mauve en clair, marine en sombre). Le layout parent fixe la hauteur et
  la position ; la largeur suit les proportions de l'image.

  Usage : <brand-portrait src="/portrait.webp" alt="Portrait de …" />
-->

<script setup lang="ts">
import { resolveAssetUrl } from '@slidev/client'
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  src: string
  alt?: string
}>(), {
  alt: '',
})

// Préfixe le chemin par la base du déploiement (ex. GitHub Pages).
const srcUrl = computed(() => resolveAssetUrl(props.src))
</script>

<template>
  <figure class="brand-portrait">
    <img class="brand-portrait__image" :src="srcUrl" :alt="alt" />
  </figure>
</template>

<style>
.brand-portrait {
  margin: 0;
  position: relative;
}

.brand-portrait::before {
  aspect-ratio: 1;
  background-color: var(--color-portrait-background);
  border-radius: 50%;
  content: "";
  left: 50%;
  position: absolute;
  top: 20%;
  transform: translateX(-50%);
  width: 90%;
}

.brand-portrait__image {
  filter:
    drop-shadow(3px 0 0 var(--color-portrait-outline))
    drop-shadow(-3px 0 0 var(--color-portrait-outline))
    drop-shadow(0 3px 0 var(--color-portrait-outline))
    drop-shadow(0 -3px 0 var(--color-portrait-outline));
  height: 100%;
  position: relative;
  width: auto;
}
</style>
