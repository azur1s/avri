<script lang="ts">
export let title: string;
export let artists: string[];
export let type: "Album" | "EP" | "Single" | "Remix";
export let genres: string[];
export let date: string;
export let cover: string;
export let link: string;

const formatArtists = (artists: string[]) => artists.join(", ");

const formatDate = (date: string) => {
    const [year, month, day] = date.split("-");
    const months = [
        "Jan", "Feb", "Mar", "Apr",
        "May", "Jun", "Jul", "Aug",
        "Sep", "Oct", "Nov", "Dec"
    ];
    const day0 = parseInt(day).toString();
    return `${months[parseInt(month) - 1]} ${day0} ${year}`;
}

const genreColor = (genre: string) => {
    switch (genre) {
        case "UKG":           return "#8aff54";
        case "House":         return "#ffbd54";
        case "Tearout":       return "#f56c5f";
        case "Future Bass":   return "#4b6bfa";
        case "Baile Funk":    return "#68cf3c";
        case "Future Riddim": return "#a141fa";
        case "Jersey":        return "#f5e85b";
        case "Rawstyle":      return "#ff3d6a";
        case "Hybrid Trap":   return "#fa4da9";
        case "Psytrance":     return "#6f66ed";
        case "Drum and Bass": return "#ed994a";
        case "Uptempo":       return "#fa4d59";
        case "Riddim":        return "#8c53fc";
    }
}
</script>

<a
    class="
        flex flex-row items-center space-x-4 p-2
        border-mono-300 border-[1px] rounded-2xl
        hover:border-mono-500 hover:bg-mono-200
        transition-colors duration-200 ease-in-out
        interactable
    "
    data-type="external"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
>
    <img
        class="select-none pointer-events-none rounded-lg min-w-32 max-w-32"
        width="500" height="500"
        src={cover} alt={title}
    />
    <div class="flex flex-col flex-grow">
        <h3 class="leading-tight mb-1">{formatArtists(artists)} - {title}</h3>
        <p class="text-mono-500 text-base mb-4">{type} - {formatDate(date)}</p>
        <div class="flex flex-row flex-wrap gap-2">
            {#each genres as genre}
                <span
                    class="
                        inline-block
                        text-sm font-semibold rounded-md
                    "
                    style="color: {genreColor(genre)}"
                >
                    {genre}
                </span>
            {/each}
        </div>
    </div>
</a>