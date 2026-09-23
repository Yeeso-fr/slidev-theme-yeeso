<!--
  Motif décoratif de la marque : des ronds (unité, mouvement — cf. charte)
  aux couleurs de la palette, posés dans les coins de la slide.
  Purement décoratif : masqué des technologies d'assistance.

  Usage : <brand-circles /> dans un layout en `position: relative`.
-->

<template>
  <svg
    class="brand-circles"
    viewBox="0 0 980 552"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
    focusable="false"
  >
    <circle class="brand-circles__disc" cx="940" cy="560" r="170" />
    <circle class="brand-circles__ring" cx="800" cy="505" r="62" />
    <circle class="brand-circles__dot" cx="728" cy="420" r="14" />
    <circle class="brand-circles__ring brand-circles__ring--thin" cx="950" cy="-10" r="90" />
    <circle class="brand-circles__dot brand-circles__dot--soft" cx="842" cy="60" r="10" />
  </svg>
</template>

<style>
.brand-circles {
  height: 100%;
  inset: 0;
  pointer-events: none;
  position: absolute;
  width: 100%;
  z-index: 0;
}

.brand-circles__disc {
  fill: var(--color-accent-soft);
}

.brand-circles__ring {
  fill: none;
  stroke: var(--color-accent-fresh);
  stroke-width: 12;
}

.brand-circles__ring--thin {
  stroke: var(--color-heading);
  stroke-width: 4;
}

.brand-circles__dot {
  fill: var(--color-accent);
}

.brand-circles__dot--soft {
  fill: var(--color-accent-soft);
}
</style>
