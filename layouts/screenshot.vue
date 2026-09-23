<!--
  Usage:
```md
---
layout: screenshot
(optional) layoutClass: "laptop" (défaut) ou "mobile"
screenshot: <chemin local (public/) | url distante>
(optional) screenshotAlt: <description de la capture, lue par les lecteurs d'écran>
---

::left::
## Gauche
S'affiche à gauche

::right::
S'affiche à droite
```
-->

<script setup lang="ts">
import { resolveAssetUrl } from '@slidev/client'
import { computed } from 'vue'
import laptopFrame from '../assets/frames/macbook-air-frame.png'
import mobileFrame from '../assets/frames/iphone-15-pro-max-frame.png'

const props = defineProps({
  class: {
    type: String,
  },
  layoutClass: {
    type: String,
    default: 'laptop',
  },
  screenshot: {
    type: String,
    default: '',
  },
  screenshotAlt: {
    type: String,
    default: "Capture d'écran",
  },
})

const device = computed(() => (props.layoutClass === 'mobile' ? 'mobile' : 'laptop'))
const frame = computed(() => (device.value === 'mobile' ? mobileFrame : laptopFrame))
const screenshotUrl = computed(() => resolveAssetUrl(props.screenshot))
</script>

<template>
  <section class="slidev-layout screenshot" :class="`screenshot--${device}`">
    <div class="screenshot__side" :class="props.class">
      <slot name="left" />
    </div>
    <div class="screenshot__device">
      <img class="screenshot__image" :src="screenshotUrl" :alt="screenshotAlt">
      <img class="screenshot__frame" :src="frame" alt="">
    </div>
    <div class="screenshot__side" :class="props.class">
      <slot name="right" />
    </div>
    <slides-current-number />
  </section>
</template>

<style>
/* Zone d'écran de chaque cadre, mesurée sur les PNG (en % du cadre). */
.slidev-layout.screenshot {
  align-items: center;
  column-gap: 2rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 2rem 3rem 5rem;
}

.screenshot--laptop {
  --device-aspect-ratio: 874 / 516;
  --device-width: 100%;
  --screen-top: 9.3%;
  --screen-left: 13.5%;
  --screen-width: 73.1%;
  --screen-height: 77.7%;
  --screen-radius: 0;
}

.screenshot--mobile {
  --device-aspect-ratio: 365 / 750;
  --device-width: 45%;
  --screen-top: 1.7%;
  --screen-left: 4.1%;
  --screen-width: 91.5%;
  --screen-height: 96.7%;
  --screen-radius: 12% / 6%;
}

.screenshot__device {
  aspect-ratio: var(--device-aspect-ratio);
  justify-self: center;
  position: relative;
  width: var(--device-width);
}

.screenshot__image {
  border-radius: var(--screen-radius);
  height: var(--screen-height);
  left: var(--screen-left);
  object-fit: cover;
  object-position: top;
  position: absolute;
  top: var(--screen-top);
  width: var(--screen-width);
}

.screenshot__frame {
  height: 100%;
  inset: 0;
  pointer-events: none;
  position: absolute;
  width: 100%;
}
</style>
