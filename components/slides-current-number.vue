<!--
  Numéro de la slide courante, dans une pastille ronde en bas à droite.

  Usage : <slides-current-number />
-->

<template>
  <div class="slide-number">
    <SlideCurrentNo />
  </div>
</template>

<style>
.slide-number {
  align-items: center;
  background-color: var(--color-badge-background);
  border-radius: 50%;
  bottom: 24px;
  color: var(--color-badge-text);
  display: flex;
  font-size: 0.8rem;
  font-weight: 700;
  height: 44px;
  justify-content: center;
  position: absolute;
  right: 24px;
  width: 44px;
  z-index: 1;
}
</style>
