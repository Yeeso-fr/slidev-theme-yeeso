<!--
  Usage:
```md
---
layout: iframe-left
url: <url>
(optional) iframeTitle: <description du contenu intégré, lue par les lecteurs d'écran>
(optional) scale: <nombre, 0.6 par défaut : réduit le contenu de la page>
---

<content>
```
-->

<script setup lang="ts">
defineOptions({ inheritAttrs: false })

withDefaults(defineProps<{
  url: string
  iframeTitle?: string
  scale?: number
}>(), {
  iframeTitle: 'Contenu intégré',
  scale: 0.6,
})
</script>

<template>
  <section class="slidev-layout iframe-left">
    <div class="iframe-left__frame">
      <embedded-page :url="url" :title="iframeTitle" :scale="scale" />
    </div>
    <div class="iframe-left__content" v-bind="$attrs">
      <slot />
    </div>
    <slides-current-number />
  </section>
</template>

<style>
.slidev-layout.iframe-left {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0;
}

.iframe-left__frame {
  height: 100%;
  min-height: 0;
}

.iframe-left__content {
  align-self: center;
  padding: 3rem 3.5rem;
}
</style>
