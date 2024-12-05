<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const emit = defineEmits(['navigate-to-map', 'navigate-to-relocation'])

const displayText = ref('')
const fullText = 'Hello IPAC Consulting! 👋🏻'
const currentIndex = ref(0)

const typeText = () => {
  if (currentIndex.value < fullText.length) {
    displayText.value += fullText[currentIndex.value]
    currentIndex.value++
    setTimeout(typeText, 150)
  }
}

onMounted(() => {
  typeText()
})
</script>

<template>
  <div class="h-screen flex flex-col justify-center max-w-7xl mx-auto px-4 py-8 space-y-6">
    <!-- Typewriter Effect Header -->
    <div class="text-center mb-8">
      <h1 class="text-4xl sm:text-5xl font-bold text-primary">
        {{ displayText }}<span class="cursor">|</span>
      </h1>
    </div>

    <!-- Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 auto-rows-[minmax(150px,auto)]">
      <!-- Personal Introduction -->
      <Card class="transition-all duration-300 hover:-translate-y-1 lg:col-span-2">
        <CardHeader>
          <CardTitle class="text-xl">About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            As a Developer with a data analytics background, I craft solutions that bridge technical innovation with business needs. 
            My expertise spans Python, JavaScript, and modern web frameworks like Vue.js and React. I'm passionate about building interactive web applications and automations.
          </p>
          <p class="mt-4">
            <span class="font-bold">What drives me? </span>
            <span class="italic">The thrill of turning complex problems into elegant, efficient solutions.</span>
          </p>
        </CardContent>
      </Card>

      <!-- why IPAC -->
      <Card class="transition-all duration-300 hover:-translate-y-1">
        <CardHeader>
          <CardTitle class="text-xl">Why IPAC Consulting?</CardTitle>
        </CardHeader>
        <CardContent class="flex-grow">
          <p>IPAC's innovative approach to healthcare technology and infection control is inspiring. The opportunity to contribute to a mission that directly impacts global health, while working with cutting-edge tools, aligns perfectly with my aspirations as a developer.</p>
        </CardContent>
      </Card>

      <!-- Website Purpose -->
      <Card class="transition-all duration-300 hover:-translate-y-1">
        <CardHeader>
          <CardTitle class="text-xl">Why I build this website?</CardTitle>
        </CardHeader>
        <CardContent class="flex-grow">
          <p>Creating this website was my innovative response to a simple question. Built using Vue.js in under 24 hours, it's a testament to my problem-solving skills and ability to quickly pick up new technologies. It's a little bit of coding fun, turning a routine task into an opportunity for creativity and learning.</p>
        </CardContent>
      </Card>
    </div>

    <!-- Action Buttons -->
    <div class="mt-4 flex justify-center gap-4">
      <Button variant="default" @click="emit('navigate-to-relocation')">Relocation Plan</Button>
      <Button variant="secondary" @click="emit('navigate-to-map')">Journey to IPAC</Button>
    </div>
  </div>
</template>

<style scoped>
.cursor {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  from, to { opacity: 1; }
  50% { opacity: 0; }
}
</style>