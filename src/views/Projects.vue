<script setup lang="ts">
import Title from '../components/Title.vue';

type Project = {
    title: string;
    description: string;
    icon: any;
    link: string;
};

let projects: Project[] = [
    {
        title: "Holymer",
        description: "A programming language.",
        icon: IconCarbonConditionPoint,
        link: "azur1s/holymer",
    },
    {
        title: "Atacamite",
        description: "An interpreted stack-based programming language.",
        icon: IconCarbonArrowDownRight,
        link: "azur1s/atacamite",
    },
];

let search = ref("");

const filteredProjects = computed(() => {
    if (search.value === "") return projects;
    return projects.filter((project) => {
        return (
            project.title.toLowerCase().includes(search.value.toLowerCase()) ||
            project.description.toLowerCase().includes(search.value.toLowerCase())
        );
    });
});
</script>

<template>
    <div>
        <div class="flex flex-row">
            <Title>Projects</Title>
            <input
                class="
                    input ml-1rem px-1rem tr
                    bg-mode-100 text-mode-900 placeholder-mode-500
                    outline-none focus:outline-primary
                "
                v-model="search"
                placeholder="Search"
            />
        </div>
        <div class="flex flex-col pt-1rem par gap-y-1rem">
            <a
                class="
                    relative flex items-center
                    p-1rem
                    tr bg-mode-50 hover:bg-mode-100
                    text-mode-900 hover:text-primary
                "
                v-for="project, index in filteredProjects"
                :key="index"
                :href="`https://github.com/${project.link}`"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div class="text-4xl text-mode-500 pr-1rem">
                    <component :is="project.icon"/>
                </div>
                <div class="flex-auto">
                    <div class="text-lg">{{ project.title }}</div>
                    <div class="text-mode-500 text-md">{{ project.description }}</div>
                </div>
            </a>
        </div>
    </div>
</template>
