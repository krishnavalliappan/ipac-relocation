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
  <div class="h-screen flex flex-col max-w-4xl mx-auto px-4 py-4 overflow-y-auto">
    <!-- Title Section -->
    <div class="text-center mb-4">
      <h2 class="text-3xl sm:text-4xl font-bold text-primary">Journey to IPAC 🚀</h2>
      <p class="text-muted-foreground mt-2">(aka The 401 Survival Guide)</p>
    </div>

    <div class="flex-grow overflow-y-auto pb-4">
      <Card>
        <CardContent class="pt-4">
          <div class="relative h-[calc(100vh-12rem)] bg-muted/30 rounded-lg p-4 overflow-hidden">
            <!-- Road Path with Dashes -->
            <svg class="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path
                d="M 15,30 C 25,35 35,40 50,45 S 70,50 85,60"
                class="road-path stroke-primary stroke-2 fill-none"
                stroke-dasharray="4 2"
              />
            </svg>

            <!-- Stationary Car at Montreal -->
            <div class="absolute text-2xl z-10" style="left: 23%; top: 31%; transform: translate(50%, -50%) rotate(10deg) rotateY(180deg)">
              🚗
            </div>

            <!-- City Info Boxes -->
            <div class="absolute inset-0">
              <div v-for="stop in stops" :key="stop.name"
                class="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
                :style="{ left: `${stop.position.x}%`, top: `${stop.position.y}%` }">
                <div class="relative group cursor-pointer">
                  <div class="bg-background/95 rounded-lg p-2 shadow-sm hover:shadow-md transition-all">
                    <div class="flex items-center gap-2">
                      <span class="text-lg">{{ stop.emoji }}</span>
                      <span class="font-bold">{{ stop.name }}</span>
                    </div>
                  </div>
                  <!-- Comment appears on hover -->
                  <div class="absolute left-1/2 -translate-x-1/2 -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-primary/10 rounded-lg p-1.5 text-xs text-center whitespace-nowrap z-30">
                    {{ stop.comment }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Road Notes -->
            <div class="absolute inset-0">
              <div v-for="(note, index) in roadNotes" :key="index"
                class="absolute text-xs bg-background/90 rounded px-2 py-1 transform -translate-x-1/2 -translate-y-1/2 hover:bg-background transition-colors"
                :style="{ left: `${note.position.x}%`, top: `${note.position.y}%` }">
                {{ note.text }}
              </div>
            </div>

            <!-- Journey Stats -->
            <div class="absolute bottom-2 right-2 text-xs space-y-1 bg-background/90 p-2 rounded-lg">
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
