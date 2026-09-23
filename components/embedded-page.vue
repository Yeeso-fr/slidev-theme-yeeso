<!--
  Page web intégrée dans une carte à coins arrondis, avec une marge autour.
  Le contenu est réduit par `scale` : l'iframe est rendue plus grande
  (100 / scale %) puis ramenée à la taille du cadre, pour afficher la page
  comme sur un écran d'ordinateur plutôt qu'en version mobile agrandie.

  Usage : <embedded-page url="https://…" title="…" :scale="0.6" />
-->

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  url: string
  title?: string
  scale?: number
}>(), {
  title: 'Contenu intégré',
  scale: 0.6,
})

const embedStyle = computed(() => ({
  height: `${100 / props.scale}%`,
  transform: `scale(${props.scale})`,
  width: `${100 / props.scale}%`,
}))
</script>

<template>
  <div class="embedded-page">
    <div class="embedded-page__viewport">
      <iframe class="embedded-page__embed" :src="url" :title="title" :style="embedStyle" />
    </div>
  </div>
</template>

<style>
.embedded-page {
  box-sizing: border-box;
  height: 100%;
  padding: 1.5rem;
  width: 100%;
}

.embedded-page__viewport {
  background-color: var(--color-surface);
  border-radius: 0.625rem;
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.embedded-page__embed {
  border: 0;
  left: 0;
  position: absolute;
  top: 0;
  transform-origin: top left;
}
</style>
