<!--
  Pastille mint avec une flèche marine, pour introduire un bloc de contenu.
  Décorative : masquée des technologies d'assistance.

  Usage : <arrow-bullet />
-->

<template>
  <span class="arrow-bullet" aria-hidden="true">
    <svg class="arrow-bullet__icon" viewBox="0 0 24 24" focusable="false">
      <path d="M5 12h13M12 5l7 7-7 7" />
    </svg>
  </span>
</template>

<style>
.arrow-bullet {
  align-items: center;
  background-color: var(--color-accent-fresh);
  border-radius: 50%;
  color: var(--color-on-accent);
  display: inline-flex;
  flex-shrink: 0;
  height: 48px;
  justify-content: center;
  width: 48px;
}

.arrow-bullet__icon {
  fill: none;
  height: 24px;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2.5;
  width: 24px;
}
</style>
