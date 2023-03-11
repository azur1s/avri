<script>
    // TODO: Somehow using typescript breaks the Windi CSS classes
    // import type { PageServerData } from './$types';

    /**
     * @type {import("./$types").PageServerData}
     */
    export let data;
</script>

<h1>Blog</h1>
<p>I post blog here</p>
<div class='grid grid-cols-5 gap-1rem'>
    {#each data.posts as post}
    <a href={`blog/${post.slug}`} class='bg-dark-50 p-1rem no-underline text-light-500'>
        <p class='m-0 text-xl'>{post.title}</p>
        <p class='m-0 pt-1rem'>{post.description}</p>
    </a>
    {/each}
</div>