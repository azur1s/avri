<script setup lang="ts">
import ms from "../footerMessages.json";
import { ref } from "vue";

const m = ref("");
const rand = () => {
    m.value = ms[Math.floor(Math.random() * ms.length)];
};

rand();
</script>

<style scoped lang="postcss">
.link {
    @apply text-mode-300 hover:text-primary border-mode-300 hover:border-primary
}
</style>

<template>
    <p class="pt-1rem tr text-md text-mode-300">
        <a
            class="tr link border-b-1"
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
        >cc by-nc-sa 4.0</a>
        (i think) 2022~now (c) azur1s,
        <a href="#top" class="tr link border-b-1">back to top</a>
        <br />
        <p class="tr link italic cursor-pointer" @click="rand()">{{ m }}</p>
    </p>
</template>