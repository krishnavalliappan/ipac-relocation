<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'

const stops = [
  { 
    name: 'Montreal', 
    emoji: '👋',
    comment: 'Au revoir, poutine!',
    position: { x: 15, y: 30 }
  },
  { 
    name: 'Toronto', 
    emoji: '🌆',
    comment: 'The legendary parking lot begins! 🚗💤',
    position: { x: 50, y: 45 }
  },
  { 
    name: 'Woodstock', 
    emoji: '🎯',
    comment: 'Ready to innovate with IPAC! 🚀💡',
    position: { x: 85, y: 60 }
  }
]

const roadNotes = [
  { text: '⚠️ 401 Traffic Zone', position: { x: 35, y: 30 } },
  { text: '⏰ +2hrs (Traffic)', position: { x: 70, y: 45 } },
]
</script>

<template>
  <div class="flex items-center justify-center min-h-screen px-4 py-8">
    <div class="flex flex-col items-center w-full max-w-4xl mx-auto">
      <!-- Title Section -->
      <div class="mb-8 text-center">
        <h2 class="text-3xl font-bold sm:text-4xl text-primary">Journey to IPAC 🚀</h2>
        <p class="mt-2 text-sm sm:text-base text-muted-foreground">(aka The 401 Survival Guide)</p>
      </div>

      <Card class="w-full">
        <CardContent class="p-4">
          <div class="relative aspect-[4/3] sm:aspect-[16/9] bg-muted/30 rounded-lg overflow-hidden">
            <!-- SVG Path -->
            <svg class="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path
                d="M 15,30 C 25,35 35,40 50,45 S 70,50 85,60"
                class="stroke-2 road-path stroke-primary fill-none"
                stroke-dasharray="4 2"
              />
            </svg>

            <!-- Car Icon -->
            <div class="absolute z-10 text-base sm:text-2xl" 
                 style="left: 23%; top: 31%; transform: translate(50%, -50%) rotate(10deg) rotateY(180deg)">
              🚗
            </div>

            <!-- City Info Boxes -->
            <div class="absolute inset-0">
              <div v-for="stop in stops" :key="stop.name"
                class="absolute z-20 transform -translate-x-1/2 -translate-y-1/2"
                :style="{ left: `${stop.position.x}%`, top: `${stop.position.y}%` }">
                <div class="relative cursor-pointer group">
                  <div class="bg-background/95 rounded-lg p-1.5 sm:p-2 shadow-sm hover:shadow-md transition-all">
                    <div class="flex items-center gap-1 sm:gap-2">
                      <span class="text-sm sm:text-lg">{{ stop.emoji }}</span>
                      <span class="text-xs font-bold sm:text-base">{{ stop.name }}</span>
                    </div>
                  </div>
                  <!-- Hover Comment -->
                  <div class="absolute left-1/2 -translate-x-1/2 -bottom-6 sm:-bottom-8 opacity-0 
                            group-hover:opacity-100 transition-opacity duration-200 
                            bg-primary/10 rounded-lg p-1 sm:p-1.5 
                            text-[10px] sm:text-xs text-center whitespace-nowrap z-30">
                    {{ stop.comment }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Road Notes -->
            <div class="absolute inset-0">
              <div v-for="(note, index) in roadNotes" :key="index"
                class="absolute text-[8px] sm:text-xs 
                      bg-background/90 rounded px-1.5 sm:px-2 py-0.5 sm:py-1 
                      transform -translate-x-1/2 -translate-y-1/2 
                      hover:bg-background transition-colors shadow-sm hover:shadow-md"
                :style="{ left: `${note.position.x}%`, top: `${note.position.y}%` }"
              >
                {{ note.text }}
              </div>
            </div>

            <!-- Journey Stats -->
            <div class="absolute bottom-2 right-2 text-[10px] sm:text-xs space-y-1 
                      bg-background/90 p-1.5 sm:p-2 rounded-lg">
              <div>🚗 Total: ~700km</div>
              <div>⏰ ETA: "Eventually"</div>
              <div>🎧 Spotify will save me hopefully...</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.road-path {
  animation: dash 20s linear infinite;
}

@keyframes dash {
  to {
    stroke-dashoffset: -20;
  }
}
</style>
