<!--
  Usage:
```md
---
layout: full
---

<content>
```
-->

<template>
  <section class="slidev-layout full">
    <slot />
    <slides-current-number />
  </section>
</template>

<style>
.slidev-layout.full {
  height: 100%;
  width: 100%;
}
</style>
