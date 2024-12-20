<script lang="ts">
import { onMount } from "svelte";
import "../app.css";

const scrollToEl = (event: { target: EventTarget | null }) => {
    const target = event.target as HTMLAnchorElement | null;
    const el = document.querySelector(target!.getAttribute("href")!);
    if (!el) return;
    // el.scrollIntoView({ behavior: "smooth" });
    const offset = 64 + 28;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
};

onMount(() => {
    const scrollToTop = document.getElementById("scrollToTop");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            scrollToTop?.classList.remove("opacity-0");
            scrollToTop?.classList.add("opacity-100");
        } else {
            scrollToTop?.classList.remove("opacity-100");
            scrollToTop?.classList.add("opacity-0");
        }
    });
});
</script>

<main id="root" class="flex flex-col">
    <div class="fixed bottom-4 right-4 z-10">
        <button
            id="scrollToTop"
            class="p-4 m-4 backdrop-invert rounded-full shadow-md opacity-0 transition-opacity duration-300 ease-in-out"
            on:click|preventDefault={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Go to top"
        >
            <svg
                class="w-6 h-6 text-mono-100"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                ></path>
            </svg>
        </button>
    </div>

    <header class="m-auto mb-0 min-w-full sticky z-10 top-0 bg-mono-100">
        <nav class="flex items-center justify-between py-8 px-12 text-lg">
            <a class="link" on:click|preventDefault={scrollToEl} href="#root">azur</a>
            <div class="flex items-center space-x-4">
                <a class="link" on:click|preventDefault={scrollToEl} href="#discography">discography</a>
                <a class="link" on:click|preventDefault={scrollToEl} href="#gallery">gallery</a>
                <a class="link" on:click|preventDefault={scrollToEl} href="#about">about</a>
            </div>
        </nav>
    </header>

    <div class="flex flex-col flex-grow h-screen-no-header">
        <div class="
        min-w-full h-full p-0
        flex flex-row flex-grow
    ">
        <div class="flex-col box flex-[2]">
            <div class="flex-row box flex-[2] hover:flex-[2.25]">
                <a
                    class="
                        box flex-1 flex-col justify-end hover:flex-[1.25]
                        imgbg bg-[url('images/latest.png')] group
                    "
                    href="#discography"
                    on:click|preventDefault={scrollToEl}
                    data-width="1280"
                    data-height="720"
                >
                    <div class="p-8 bg-shadow">
                        <p class="text-xl font-medium">Discography</p>
                        <p class="text-sm">See all releases</p>
                    </div>
                </a>
                <a
                    class="
                        box flex-1 flex-col justify-end hover:flex-[1.25]
                        imgbg bg-[url('images/wide2.jpg')] group
                    "
                    href="#gallery"
                    on:click|preventDefault={scrollToEl}
                    data-width="4096"
                    data-height="1714"
                >
                    <div class="p-8 bg-shadow">
                        <p class="text-xl font-medium">Gallery</p>
                        <p class="text-sm">View artworks</p>
                    </div>
                </a>
            </div>

            <a
                class="
                    box flex-1 flex-col justify-end hover:flex-[1.25]
                    imgbg bg-[url('images/wide.jpg')] group
                "
                href="#about"
                on:click|preventDefault={scrollToEl}
                data-width="2560"
                data-height="1080"
            >
                <div class="p-8 bg-shadow">
                    <p class="text-xl font-medium">About</p>
                    <p class="text-sm">Learn more</p>
                </div>
            </a>
        </div>
    </div>
    </div>

    <div class="prose prose-mono prose-invert p-10">
        <div class="mb-[500px]" id="discography">
            <h1>Discography</h1>
            <p>todo</p>
        </div>

        <div class="mb-[500px]" id="gallery">
            <h1>Gallery</h1>
            <p>todo</p>
        </div>

        <div class="mb-[500px]" id="about">
            <h1>About</h1>
            <p>hi i make music</p>
        </div>
    </div>
</main>

<style lang="postcss">
:global(html) {
    background-color: theme(colors.mono.100);
    color: theme(colors.mono.900);
    font-family: "Geist", sans-serif;
}

.h-screen-no-header {
    height: calc(100vh - 64px - 28px);
}

.link {
    color: theme(colors.mono.900);
    text-decoration: none;
    transition: color 0.2s;
}

.link:hover {
    color: theme(colors.blue.600);
}

.box {
    @apply flex transition-[flex-grow] ease-in-out duration-500;
}

.imgbg {
    @apply bg-no-repeat bg-center bg-cover;
}

.bg-shadow {
    @apply
        bg-gradient-to-t from-mono-100 to-[#00000000]
        opacity-25 group-hover:opacity-100
        transition-all duration-300 ease-in-out;
}
</style>