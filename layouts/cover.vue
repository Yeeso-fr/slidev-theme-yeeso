<!--
  Usage:
```md
---
layout: cover
---

<div class="subtitle">yeeso</div>

# Le titre de votre <span class="highlight">présentation</span>
```
-->

<template>
  <section class="slidev-layout cover">
    <brand-circles />
    <watermark class="cover__watermark" />
    <article class="cover__content">
      <slot />
    </article>
  </section>
</template>

<style>
.slidev-layout.cover {
  display: grid;
  padding: 2.5rem 5rem;
  text-align: center;
}

.cover__watermark {
  left: 2.5rem;
  position: absolute;
  top: 2rem;
  z-index: 1;
}

.cover__content {
  margin: auto;
  max-width: 75%;
  position: relative;
  z-index: 1;
}

.cover__content h1 {
  font-size: 3.5rem;
  line-height: 1.1;
  margin-bottom: 1rem;
}

.cover__content p {
  color: var(--color-text-muted);
  font-size: 1.25rem;
}
</style>
