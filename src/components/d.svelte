<script>
import { onMount } from "svelte";

let choice = [
    "bro.png",
    "normal.jpg",
]

const d = () => {
    return "/images/" + choice[Math.floor(Math.random() * choice.length)];
}
</script>

<a class="linke" href="{ d() }">d</a>

<style lang="postcss">
.linke {
    @apply
        text-mono-900 hover:text-pink-400
        focus:text-pink-400 focus:outline-none
        transition-colors duration-200
}
</style>