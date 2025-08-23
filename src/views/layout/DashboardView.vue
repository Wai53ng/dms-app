<script setup lang="ts">
import RadioGroup from '@/components/ui/radio-group/RadioGroup.vue'
import type { RadioGroupOptions } from '@/types/components'

const options: RadioGroupOptions[] = [
    { label: 'Pep', value: 'pep' },
    { label: 'Getting', value: 'getting' },
    { label: '2-0', value: '2-0' }
]
</script>

<template>
    <RadioGroup value="" :options="options" />
</template>
