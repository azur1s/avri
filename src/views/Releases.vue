<script setup lang="ts">
type Release = {
    title: string;
    features: string[];
    date: Date;
    type: "single" | "album";
};

const releases: Release[] = [
    {
        title: "Without You Beside Me",
        features: ["Slainix"],
        date: new Date("2023-12-01"),
        type: "single",
    },
    {
        title: "Take Me Higher",
        features: ["UTAGE"],
        date: new Date("2023-10-28"),
        type: "single",
    },
    {
        title: "Caera",
        features: [""],
        date: new Date("2023-10-01"),
        type: "single",
    },
    {
        title: "High",
        features: [""],
        date: new Date("2023-09-21"),
        type: "single",
    },
    {
        title: "Expansion",
        features: [""],
        date: new Date("2023-09-01"),
        type: "album",
    },
    {
        title: "Tonal3",
        features: [""],
        date: new Date("2023-07-23"),
        type: "single",
    },
    {
        title: "Bad Apple (Azur1s's Orchestral Remix)",
        features: [""],
        date: new Date("2023-06-04"),
        type: "single",
    },
    {
        title: "Tears Out",
        features: [""],
        date: new Date("2023-05-27"),
        type: "single",
    },
    {
        title: "One More Night",
        features: [""],
        date: new Date("2023-05-22"),
        type: "single",
    },
    {
        title: "The Remains",
        features: [""],
        date: new Date("2023-05-20"),
        type: "single",
    },
    {
        title: "Hydrangea",
        features: [""],
        date: new Date("2023-04-09"),
        type: "single",
    },
    {
        title: "Skida",
        features: [""],
        date: new Date("2023-04-09"),
        type: "single",
    },
    {
        title: "Sky Light",
        features: [""],
        date: new Date("2023-04-09"),
        type: "single",
    },
];
</script>

<template>
    <Title>
        RELEASES
    </Title>
    <div class="flex flex-row gap-5rem text-xl">
        <div class="flex flex-col">
            <a class="link tr hover:bg-mode-100"
                v-for="release in releases"
                :key="release.date.getMilliseconds()"
            >
                {{ release.title }}
            </a>
        </div>
        <div class="flex flex-col">
            <a class="link tr hover:bg-mode-100"
                v-for="release in releases"
                :key="release.date.getMilliseconds()"
            >
                <div class=""
                    v-for="feature in release.features"
                    :key="feature"
                >
                    {{ feature }}
                </div>
            </a>
        </div>
        <div class="flex flex-col justify-evenly">
            <div class="text-mode-900 tr grid grid-cols-3 gap-1rem"
                v-for="release in releases"
                :key="release.date.getMilliseconds()"
            >
                <div class="p-0">{{ new Intl.DateTimeFormat("en-US", { month: "short" }).format(release.date) }}</div>
                <div class="p-0">{{ release.date.getUTCDay() }}</div>
                <div class="p-0">{{ release.date.getFullYear() }}</div>
            </div>
        </div>
    </div>
</template>