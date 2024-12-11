<script setup lang="ts">
import { computed } from 'vue'
import { Switch } from '@/components/ui/switch'
import { Icon } from '@iconify/vue'
import { useColorMode } from '@vueuse/core'

const mode = useColorMode({
  attribute: 'class',
  modes: {
    light: 'light',
    dark: 'dark',
  },
})

const isDark = computed(() => mode.value === 'dark')

const toggleTheme = (checked: boolean) => {
  mode.value = checked ? 'dark' : 'light'
}
</script>

<template>
  <div class="flex items-center space-x-2">
    <Switch 
      :checked="isDark" 
      @update:checked="toggleTheme"
      class="relative transition-colors"
    >
      <template #thumb>
        <div class="flex items-center justify-center w-full h-full">
          <Icon 
            :icon="isDark ? 'lucide:moon' : 'lucide:sun'" 
            class="w-3 h-3 transition-all duration-200"
            :class="isDark ? 'rotate-0' : 'rotate-90'"
          />
        </div>
      </template>
    </Switch>
  </div>
</template>

<style scoped>
:deep(.switch-thumb) {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>