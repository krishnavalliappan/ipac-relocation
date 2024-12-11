<script setup lang="ts">
import Intro from './components/Intro.vue'
import TravelMap from './components/TravelMap.vue'
import RelocationPlan from './components/RelocationPlan.vue'
import ToggleDark from './components/ToggleDark.vue'

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
    <div class="fixed z-50 top-4 right-4 sm:top-6 sm:right-6">
      <ToggleDark />
    </div>
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

<!-- App.vue -->
<style scoped>
/* Base container styles */
.snap-container {
  height: 100vh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  scroll-behavior: smooth; /* Add smooth scrolling */
}

.snap-container::-webkit-scrollbar {
  display: none;
}

/* Section styling */
.snap-section {
  width: 100%;
}

/* Desktop only: Enable snap scrolling */
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

/* Mobile specific styles */
@media (max-width: 767px) {
  .snap-container {
    height: auto;
    overflow-y: visible;
  }
  
  .snap-section {
    min-height: 100vh;
    height: auto;
    padding-bottom: 2rem;
  }
}
</style>