<script lang="ts">
import "../app.css";
import Logo from "../components/Logo.svelte";
import D from "../components/d.svelte";

</script>

<div class="flex flex-col flex-grow items-center justify-center h-full gap-4">
    <div class="text-mono-900 max-sm:w-[45%] w-[18rem] h-auto">
        <Logo />
    </div>

    <div
        class="text-pink-600 text-xl"
    >
        azur1s
    </div>

    <div class="flex flex-col gap-1 items-center">
        <a
            class="linke"
            href="/discography"
        >discography</a>
        <a
            class="linke"
            href="/gallery"
        >gallery</a>
        <a
            class="linke"
            href="/contact"
        >contact</a>
        <a
            class="linke"
            href="/about"
        >about</a>
        <D />
    </div>
</div>

<style lang="postcss">
.linke {
    @apply
        text-mono-900 hover:text-pink-400
        focus:text-pink-400 focus:outline-none
        transition-colors duration-200
}
</style>