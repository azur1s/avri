<script setup lang="ts">
import { setTheme } from "../theme";

const theme = useLocalStorage("theme", "dark");
watch(theme, () => setTheme(theme.value));
</script>

<style scoped lang="postcss">
.route {
    @apply text-mode-900 hover:text-primary text-md font-medium items-center
}
</style>

<template>
    <nav
        class="
            px-2rem py-1.5rem flex flex-row justify-between
        "
    >
        <div class="justify-start">
            <RouterLink class="route tr text-xl" to="/">
                A
            </RouterLink>
        </div>
        <div class="justify-end inline-flex gap-x-2rem items-center">
            <!-- Routes -->
            <RouterLink class="route tr" to="/" >
                <div class="<md:hidden">Home</div>
            </RouterLink>
            <RouterLink class="route tr" to="/projects" >
                <div class="<md:hidden">Projects</div>
                <i-mdi-folder-open class="md:hidden flex text-lg" />
            </RouterLink>
            <!-- Socials -->
            <a
                href="https://github.com/azur1s"
                target="_blank"
                rel="noopener noreferrer"
                class="self-center items-center"
            >
                <i-mdi-github-face
                    class="text-mode-900 hover:text-primary text-xl tr flex"
                />
            </a>
            <a
                href="https://soundcloud.com/azur1s"
                target="_blank"
                rel="noopener noreferrer"
                class="self-center items-center"
            >
                <i-mdi-soundcloud
                    class="text-mode-900 hover:text-primary text-xl tr flex"
                />
            </a>
            <a
                href="https://open.spotify.com/artist/3JY01LBY8SIzk8Wto2JvOq"
                target="_blank"
                rel="noopener noreferrer"
                class="self-center items-center"
            >
                <i-mdi-spotify
                    class="text-mode-900 hover:text-primary text-xl tr flex"
                />
            </a>
            <!-- Mode Toggle -->
            <button
                class="text-mode-900 hover:text-primary text-xl tr flex"
                @click="theme = theme === 'dark' ? 'light' : 'dark'"
            >
                <i-mdi-moon-waning-crescent v-if="theme === 'light'" />
                <i-mdi-lightbulb-on v-if="theme === 'dark'" />
            </button>
        </div>
    </nav>
</template>
