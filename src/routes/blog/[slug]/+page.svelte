<script>
    // import type { PageData } from './$types';

    export let data;
</script>

<div class='flex flex-row justify-between'>
    <a
        href={`${data.post.previous.slug}`}
        class='no-underline text-sky-500 hover:text-sky-200 tr'
    >
        {#if data.post.previous.slug}
        <p class='m-0 text-xl'>&lt;{data.post.previous.title}</p>
        {/if}
    </a>

    <a
        href={`${data.post.next.slug}`}
        class='no-underline text-sky-500 hover:text-sky-200 tr'
    >
        {#if data.post.next.slug}
        <p class='m-0 text-xl'>{data.post.next.title}&gt;</p>
        {/if}
    </a>
</div>

<h1>{data.post.title}</h1>
<p class='text-gray-500'>{data.post.date}</p>
<svelte:component this={data.component} />