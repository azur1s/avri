<script setup lang="ts">
const props = defineProps<{
    to: string;
}>();
</script>

<template>
    <a
        class="link tr flex flex-row gap-x-0.5rem justify-start items-center text-mode-900"
        :href="props.to"
        target="_blank"
        rel="noopener noreferrer"
    >
        <i-carbon-arrow-up-right/>
        <slot/>
    </a>
</template>