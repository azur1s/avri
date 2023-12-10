<script setup lang="ts">
import Background from "./components/Background.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
    <Background />
    <div class="flex flex-col h-screen tr">
        <NavBar />
        <div class="scroll flex-1 p-2rem pl-10.5rem w-50vw">
            <RouterView/>
        </div>
    </div>
</template>

<style lang="postcss">
@font-face {
    font-family: 'Neue Montreal';
    font-style: normal;
    font-weight: 400;
    src: url('./assets/fonts/PPNeueMontreal-Regular.woff2') format('woff2'),
         url('./assets/fonts/PPNeueMontreal-Regular.woff')  format('woff');
}

@font-face {
    font-family: 'Neue Montreal';
    font-style: normal;
    font-weight: 500;
    src: url('./assets/fonts/PPNeueMontreal-Medium.woff2') format('woff2'),
         url('./assets/fonts/PPNeueMontreal-Medium.woff')  format('woff');
}

@font-face {
    font-family: 'Neue Montreal';
    font-style: normal;
    font-weight: 700;
    src: url('./assets/fonts/PPNeueMontreal-Bold.woff2') format('woff2'),
         url('./assets/fonts/PPNeueMontreal-Bold.woff')  format('woff');
}

* {
    font-family: 'Neue Montreal', sans-serif;
}

html {
    scroll-behavior: smooth;
}

body {
    width: 100vw;
    overflow-x: hidden;
    @apply bg-mode-50;
}
#nprogress {
    pointer-events: none;
}

#nprogress .bar {
    @apply bg-primary;
    opacity: 1;
    position: fixed;
    z-index: 727;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
}

*::-webkit-scrollbar {
    position: absolute;
    width: 10px;
}

*::-webkit-scrollbar-thumb {
    @apply bg-mode-100 hover:bg-mode-200
    border-radius: 20px;
    border: transparent;
}

*::-webkit-scrollbar-corner,
*::-webkit-scrollbar-track {
    @apply bg-mode-50;
}

/* Aliases */
.tr {
    @apply transition-all duration-150;
}
.link {
    @apply text-mode-900 hover:text-primary text-md font-medium items-center
}
</style>
