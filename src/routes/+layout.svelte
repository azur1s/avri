<script>
    import NavLink from "$lib/components/NavLink.svelte";
</script>

<div class="ml-24rem mr-24rem h-screen">
    <nav class="py-1rem flex">
        <div class="flex-1 justify-start">
            <a class="text-light-900 no-underline" href="/">azur.moe</a>
        </div>
        <div class="flex-1 gap-x-2rem inline-flex justify-end">
            <NavLink to={'/'}>/home</NavLink>
            <NavLink to={'/about'}>/about</NavLink>
        </div>
    </nav>

    <slot />
</div>