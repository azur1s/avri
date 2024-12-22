<script lang="ts">
import { onMount } from "svelte";
import "../app.css";

import Card from "../components/Card.svelte";

type Release = {
    title: string;
    type: "Album" | "EP" | "Single" | "Remix";
    genres: string[];
    artists: string[];
    date: string;
    cover: string;
    link: string;
}

const discography: Release[] = [
    {
        title: "FE!N (Azur1s Remix)",
        artists: ["Travis Scott"],
        type: "Remix",
        genres: ["UKG"],
        date: "2024-12-18",
        cover: "/images/discography/fein remix.png",
        link: "https://www.youtube.com/watch?v=JUYsNNVRig4",
    },
    {
        title: "doomed toxic yuri?",
        artists: ["Azur1s"],
        type: "Single",
        genres: ["UKG"],
        date: "2024-12-12",
        cover: "/images/discography/doomed toxic yuri.jpg",
        link: "https://www.youtube.com/watch?v=o9qOMqRrHmE",
    },
    {
        title: "smut yuri",
        artists: ["Azur1s"],
        type: "Single",
        genres: ["UKG"],
        date: "2024-10-1",
        cover: "/images/discography/smut yuri.jpg",
        link: "https://www.youtube.com/watch?v=A1QKcGUOrLY",
    },
    {
        title: "what's the point of anything if there aren't any lesbians",
        artists: ["Azur1s"],
        type: "Single",
        genres: ["Tearout", "House"],
        date: "2024-09-20",
        cover: "/images/discography/wtpoaitaal.jpg",
        link: "https://www.youtube.com/watch?v=A1QKcGUOrLY",
    },
    {
        title: "show me (who you are)",
        artists: ["Azur1s", "Glitch Cat"],
        type: "Single",
        genres: ["Future Bass"],
        date: "2024-08-06",
        cover: "/images/discography/show me who you are.jpg",
        link: "https://soundcloud.com/azur1s/show-me",
    },
    {
        title: "photobomb VIP",
        artists: ["Azur1s", "Glitch Cat"],
        type: "Single",
        genres: ["Baile Funk", "House"],
        date: "2024-08-06",
        cover: "/images/discography/photobomb vip.jpg",
        link: "https://www.youtube.com/watch?v=hCQ9SNVVw_E",
    },
    {
        title: "photobomb",
        artists: ["Glitch Cat", "Azur1s"],
        type: "Single",
        genres: ["Future Bass", "Future Riddim", "Jersey", "Baile Funk"],
        date: "2024-08-06",
        cover: "/images/discography/photobomb.jpg",
        link: "https://www.youtube.com/watch?v=o28XHdXQ7a4 ",
    },
    {
        title: "asdfghjkl,a",
        artists: ["Azur1s"],
        type: "Single",
        genres: ["UKG", "House"],
        date: "2024-07-07",
        cover: "/images/discography/asdfghjkl,,a.jpg",
        link: "https://www.youtube.com/watch?v=kpsYZ-Zga4w",
    },
    {
        title: "Granduer Wander",
        artists: ["Azur1s"],
        type: "Album",
        genres: ["House"],
        date: "2024-06-10",
        cover: "/images/discography/granduer wander.jpg",
        link: "https://www.youtube.com/watch?v=kpsYZ-Zga4w",
    },
    {
        title: "Never Knew You",
        artists: ["Azur1s"],
        type: "Single",
        genres: ["Rawstyle"],
        date: "2024-05-22",
        cover: "/images/discography/never knew you.jpg",
        link: "https://www.youtube.com/watch?v=pVUmG6qHlG8",
    },
    {
        title: "Waiting For You",
        artists: ["Azur1s"],
        type: "Single",
        genres: ["Tearout"],
        date: "2024-05-20",
        cover: "/images/discography/waiting for you.jpg",
        link: "https://www.youtube.com/watch?v=pVUmG6qHlG8",
    },
    {
        title: "Real Love",
        artists: ["Azur1s"],
        type: "Single",
        genres: ["Rawstyle"],
        date: "2024-05-13",
        cover: "/images/discography/real love.jpg",
        link: "https://www.youtube.com/watch?v=aszAPdTCMxk",
    },
    {
        title: "Achromatic",
        artists: ["Azur1s"],
        type: "Single",
        genres: ["Rawstyle"],
        date: "2024-05-11",
        cover: "/images/discography/achromatic.jpg",
        link: "https://www.youtube.com/watch?v=aszAPdTCMxk",
    },
    {
        title: "Losing Myself",
        artists: ["Azur1s"],
        type: "Single",
        genres: ["Rawstyle"],
        date: "2024-04-24",
        cover: "/images/discography/losing myself.jpg",
        link: "https://www.youtube.com/watch?v=xyaeOFSlo7c",
    },
    {
        title: "Love Addict",
        artists: ["Azur1s"],
        type: "Single",
        genres: ["Rawstyle"],
        date: "2024-04-07",
        cover: "/images/discography/love addict.jpg",
        link: "https://www.youtube.com/watch?v=A5Vxpftn5Qg",
    },
    {
        title: "Elysian's Fantasia",
        artists: ["Azur1s"],
        type: "Single",
        genres: ["Jersey"],
        date: "2024-03-22",
        cover: "/images/discography/elysians fantasia.jpg",
        link: "https://www.youtube.com/watch?v=U7tE_rCPa0c",
    },
    {
        title: "gothgriddygirlygrippystickysockgirl",
        artists: ["Azur1s"],
        type: "Single",
        genres: ["Hybrid Trap", "Future Riddim", "Psytrance", "Jersey", "Drum and Bass", "Uptempo", "Rawstyle"],
        date: "2024-03-04",
        cover: "/images/discography/ggggssg.jpg",
        link: "https://www.youtube.com/watch?v=1srxZn-GYyY",
    },
    {
        title: "Caera (VIP)",
        artists: ["Azur1s"],
        type: "Single",
        genres: ["House"],
        date: "2024-02-09",
        cover: "/images/discography/caera vip.jpg",
        link: "https://www.youtube.com/watch?v=7vtzbAgEVGQ",
    },
    {
        title: "Tonal3 x Fierce (House VIP)",
        artists: ["Azur1s"],
        type: "Single",
        genres: ["House"],
        date: "2024-01-30",
        cover: "/images/discography/tonal3 x fierce.jpg",
        link: "https://www.youtube.com/watch?v=iVdxAHqNX7U",
    },
    {
        title: "Don't Fall In Love",
        artists: ["Azur1s"],
        type: "Single",
        genres: ["Jersey"],
        date: "2024-01-26",
        cover: "/images/discography/dont fall in love.jpg",
        link: "https://www.youtube.com/watch?v=acxTNMEnhLI",
    },
    {
        title: "yanderegrippysockgirl",
        artists: ["Azur1s"],
        type: "Single",
        genres: ["Riddim"],
        date: "2024-01-26",
        cover: "/images/discography/ygsg.jpg",
        link: "https://www.youtube.com/watch?v=Y8Swmq13Rgo",
    },
];

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
    <!-- Go to top button -->
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

    <!-- Nav -->
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

    <!-- Images -->
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
                        imgbg bg-[url('/images/latest.png')] group
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
                        imgbg bg-[url('/images/wide2.jpg')] group
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
                    imgbg bg-[url('/images/wide.jpg')] group
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

    <!-- Content -->
    <div class="prose md:prose-lg lg:prose-xl prose-mono prose-invert p-10 min-w-full">
        <div class="mb-32" id="discography">
            <h1>Discography</h1>
            <div class="not-prose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {#each discography as release}
                    <Card
                        title={release.title}
                        artists={release.artists}
                        type={release.type}
                        genres={release.genres}
                        date={release.date}
                        cover={release.cover}
                        link={release.link}
                    />
                {/each}
            </div>
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