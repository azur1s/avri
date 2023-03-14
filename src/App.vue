<script setup lang="ts">
import Background from "./components/Background.vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
    <Background />
    <div class="flex flex-col h-screen tr">
        <NavBar />
        <div
            class="
                px-2rem py-1.5rem mx-auto
                max-w-76.79ch md:min-w-76.79ch <md:min-w-full
                self-center scroll
            "
        >
            <RouterView />
            <Footer />
        </div>
    </div>
</template>

<style lang="postcss">
/* fragment-mono-regular - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Fragment Mono';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/fragment-mono-v1-latin-regular.woff2') format('woff2'), /* Chrome 36+, Opera 23+, Firefox 39+ */
       url('../fonts/fragment-mono-v1-latin-regular.woff') format('woff'); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

* {
    font-family: "Fragment Mono", monospace;
}

html {
    scroll-behavior: smooth;
}

body {
    width: 100vw;
    overflow-x: hidden;
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
</style>
