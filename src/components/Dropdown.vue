<script setup lang="ts">
const props = defineProps<{
    title: string;
}>();

const show = ref(false);

const click = () => {
    show.value = !show.value;
};
</script>

<template>
    <div class="relative">
        <button
            class="link tr flex flex-row gap-x-0.5rem"
            @click="click"
        >
            <i-carbon-chevron-down/>
            {{ props.title }}
        </button>
        <div v-show="show" class="tr z-10 px-1.5rem absolute bg-mode-50 py-1rem flex flex-col items-start">
            <slot />
        </div>
    </div>
</template>