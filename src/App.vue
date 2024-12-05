<script setup lang="ts">
import Intro from './components/Intro.vue'
import TravelMap from './components/TravelMap.vue'
import RelocationPlan from './components/RelocationPlan.vue'

const scrollToMap = () => {
  const mapElement = document.getElementById('travel-map')
  mapElement?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToRelocation = () => {
  const relocationElement = document.getElementById('relocation-plan')
  relocationElement?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <main class="snap-container">
    <section class="snap-section">
      <Intro 
        @navigate-to-map="scrollToMap"
        @navigate-to-relocation="scrollToRelocation"
      />
    </section>

    <section id="relocation-plan" class="snap-section">
      <RelocationPlan />
    </section>

    <section id="travel-map" class="snap-section">
      <TravelMap />
    </section>
  </main>
</template>

<style>
.snap-container {
  height: 100vh;
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

/* Only enable snap scrolling on desktop */
@media (min-width: 768px) {
  .snap-container {
    scroll-snap-type: y mandatory;
  }

  .snap-section {
    height: 100vh;
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }
}

.snap-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

.snap-section {
  min-height: 100vh;
  overflow-y: auto;
}

/* Mobile adjustments */
@media (max-width: 767px) {
  .snap-section {
    height: auto;
  }
}
</style>
