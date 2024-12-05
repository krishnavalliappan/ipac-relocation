<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const planItems = [
  {
  title: "Relocation Timeline",
  content: "I have no current commitments and can relocate to Woodstock immediately based on the start date. If the position begins on January 1st, I am prepared to move at least one week in advance to ensure I'm settled and ready to begin.",
   size: "large",
  icon: "⏰"
},
{
    title: "Housing Arrangements",
    content: "I've researched housing options in Woodstock and have shortlisted several apartments close to the office. I'm ready to secure accommodation immediately upon offer acceptance.",
    size: "medium",
    icon: "🏠"
  },
  {
    title: "Anticipated Challenges",
    content: "I do not foresee any significant challenges with the relocation. My previous experience moving cities has equipped me to handle logistics efficiently.",
    size: "small",
    icon: "✅"
  },
  {
  title: "Flexibility and Commitment",
  content: "My schedule is fully flexible, and I'm committed to making this transition as seamless as possible. I'm eager to join the team and contribute from day one.",
  size: "small",
  icon: "💪"
},
  {
    title: "Motivation for Moving to Woodstock",
    content: "I'm attracted to Woodstock's vibrant community and its balance of small-town charm with professional growth opportunities. I'm excited to contribute to and become part of the local community.",
    size: "medium",
    icon: "🌇"
  },
  {
    title: "Additional Information",
    content: "If there are any other details you'd like to know or if I can assist in any way during your decision-making process, please let me know.",
    size: "small",
    icon: "ℹ️"
  }
]
</script>

<template>
  <div class="h-screen flex flex-col max-w-7xl mx-auto px-4 py-4 overflow-y-auto">
    <!-- Title Section -->
    <div class="text-center mb-4">
      <h2 class="text-3xl sm:text-4xl font-bold text-primary">Relocation Plan 🏠</h2>
      <p class="text-muted-foreground mt-2">Answers to Your Questions</p>
    </div>

    <!-- Bento Grid -->
    <div class="flex-grow overflow-y-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(150px,auto)] pb-4">
        <template v-for="(item, index) in planItems" :key="index">
          <Card 
            :class="[
              'transition-all duration-300 hover:-translate-y-1 h-full',
              {
                'sm:row-span-2': item.size === 'large',
                'sm:col-span-2 lg:col-span-2': item.size === 'medium',
                'flex flex-col': true
              }
            ]"
          >
            <CardHeader class="pb-3">
              <CardTitle class="flex items-center gap-2 text-lg">
                <span class="text-2xl">{{ item.icon }}</span>
                {{ item.title }}
              </CardTitle>
            </CardHeader>
            <CardContent class="flex-grow">
              <p class="text-muted-foreground">{{ item.content }}</p>
            </CardContent>
          </Card>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid {
  grid-auto-rows: minmax(150px, auto);
}
</style>
