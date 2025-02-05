<script lang="ts">
import "../app.css";
</script>

<main id="root" class="
flex flex-col flex-grow
min-h-screen overflow-hidden
bg-mono-100">
    <slot/>
</main>

<style>
@font-face {
    font-family: "Geist Mono";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("/fonts/GeistMono-Regular.otf") format("opentype");
}

* {
    font-family: "Geist Mono", monospace;
}
</style>