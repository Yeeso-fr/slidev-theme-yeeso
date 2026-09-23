<!--
  Usage:
```md
---
layout: iframe
url: <url>
(optional) iframeTitle: <description du contenu intégré, lue par les lecteurs d'écran>
(optional) scale: <nombre, 0.6 par défaut : réduit le contenu de la page>
---
```
-->

<script setup lang="ts">
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
  <section class="slidev-layout iframe">
    <div class="iframe__frame">
      <embedded-page :url="url" :title="iframeTitle" :scale="scale" />
    </div>
    <slides-current-number />
  </section>
</template>

<style>
.slidev-layout.iframe {
  padding: 0;
}

.iframe__frame {
  height: 100%;
  min-height: 0;
}
</style>
