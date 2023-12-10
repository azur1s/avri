<script setup lang="ts">
import { setTheme } from "../theme";
import Dropdown from "./Dropdown.vue";
import Link from "./Link.vue";

const route = useRoute();
const theme = useLocalStorage("theme", "dark");
watch(theme, () => setTheme(theme.value));
</script>

<template>
    <nav
        class="
            px-2rem py-1.5rem flex flex-row items-center gap-x-2rem text-l
        "
    >
        <RouterLink class="link tr pr-4rem" to="/">
            AZUR
        </RouterLink>

        <RouterLink class="link tr" to="/releases">
            RELEASES
        </RouterLink>

        <Dropdown title="LINKS">
            <p class="tr text-mode-900">MUSIC</p>
            <Link to="https://youtube.com/@azur1s">YOUTUBE</Link>
            <Link to="https://open.spotify.com/artist/1LtCIFOZ7dh57qLWCFGtUm">SPOTIFY</Link>
            <Link to="https://soundcloud.com/azur1s">SOUNDCLOUD</Link>
            <p class="tr text-mode-900">CODE</p>
            <Link to="https://github.com/azur1s">GITHUB</Link>
        </Dropdown>

        <button
            class="link tr flex"
            @click="theme = theme === 'dark' ? 'light' : 'dark'"
        >
            SWITCH
        </button>
    </nav>
</template>
