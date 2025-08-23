<script setup lang="ts">
import { RadioGroupIndicator, RadioGroupItem, RadioGroupRoot } from 'reka-ui'
import { ref } from 'vue'
import type { RadioGroupProps } from '@/types/components'

const props = defineProps<RadioGroupProps>()

const value = ref(props.value)
</script>

<template>
    <RadioGroupRoot
        v-model="value"
        class="flex flex-col gap-1.5"
        aria-label="View density"
    >
        <div v-for="(option, index) in options" :key="index" class="flex items-center">
            <RadioGroupItem
                :id="`${option.value}-${index}`"
                class="bg-white w-[1rem] h-[1rem] rounded-full border outline-none cursor-default"
                :value="option.value"
            >
                <RadioGroupIndicator
                    class="flex items-center justify-center w-full h-full relative
                           after:content-[''] after:block after:w-2 after:h-2 after:rounded-[50%]
                           after:bg-white dark:after:bg-stone-700"
                />
            </RadioGroupItem>
            <label
                class="text-sm leading-none ml-5"
                :for="`${option.value}-${index}`"
            >
                {{ option.label }}
            </label>
        </div>
    </RadioGroupRoot>
</template>
