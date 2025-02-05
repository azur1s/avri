<script lang="ts">
import "../../app.css";
import Logo from "../../components/Logo.svelte";
import D from "../../components/d.svelte";
</script>

<div class="flex flex-col flex-grow items-center justify-center h-full gap-4">
    <div class="text-mono-900 max-sm:w-[45%] w-[18rem] h-auto">
        <Logo />
    </div>
    <div class="flex flex-row items-center gap-4">
        <a
            class="linke"
            href="/discography"
        >discography</a>
        <a
            class="linke"
            href="/gallery"
        >gallery</a>
        <a
            class="linke linkesel"
            href="/"
        >back</a>
        <a
            class="linke"
            href="/about"
        >about</a>
        <D />
    </div>

    <div class="text-mono-900 flex flex-row gap-4">
        <div class="flex flex-col items-center gap-2">
            <p>instagram</p>
            <p>discord</p>
            <p>x/twitter</p>
            <p>email</p>
        </div>
        <div class="flex flex-col items-center gap-2">
            <p>azur1s</p>
            <p>azur1s</p>
            <p>azur1s</p>
            <p>contact@azur.moe</p>
        </div>
    </div>
</div>

<style lang="postcss">
.linke {
    @apply
        text-mono-900 hover:text-pink-400
        focus:text-pink-400 focus:outline-none
        transition-colors duration-200
}

.linkesel {
    @apply text-pink-800 hover:text-pink-500
}
</style>