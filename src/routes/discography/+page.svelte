<script lang="ts">
import "../../app.css";
import Logo from "../../components/Logo.svelte";
import D from "../../components/d.svelte";

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
        title: "hi",
        artists: ["Azur1s"],
        type: "Album",
        genres: ["UKG", "House", "Rawstyle", "Tearout", "Amapiano", "Jerk"],
        date: "2025-01-07",
        cover: "/images/discography/hi.png",
        link: "https://www.youtube.com/watch?v=vMbKmhW5YVQ",
    },
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
</script>

<div class="flex flex-col flex-grow items-center justify-center h-full gap-4">
    <div class="text-mono-900 max-sm:w-[45%] w-[18rem] h-auto">
        <Logo />
    </div>
    <div class="flex flex-row items-center gap-4">
        <a
            class="linke linkesel"
            href="/"
        >back</a>
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

    <div class="text-mono-900">
        wip
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