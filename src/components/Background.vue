<script setup lang="ts">
import { onMounted, ref } from "vue";
import { createNoise2D } from "simplex-noise";
import { useLocalStorage } from "@vueuse/core";

let el = ref<HTMLCanvasElement | null>(null);
let ctx: CanvasRenderingContext2D | null;

let c = { x: 0, y: 0 };

const update = () => {
    ctx!.clearRect(0, 0, window.innerWidth, window.innerHeight);

    requestAnimationFrame(update);
};

onMounted(() => {
    ctx = el.value?.getContext("2d")!;

    el.value!.width = window.innerWidth;
    el.value!.height = window.innerHeight;

    update();
});

window.addEventListener("mousemove", (e) => {
    if (e.clientX && e.clientY) {
        c = { x: e.clientX, y: e.clientY };
    }
});
</script>

<template>
    <div
        class="fixed top-0 bottom-0 left-0 right-0 pointer-events-none bg-mode-50 tr"
        style="z-index: -1"
    >
        <canvas ref="el" id="el" width="400" height="400" />
    </div>
</template>
