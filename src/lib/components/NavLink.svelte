<script>
	import { page } from "$app/stores";
    /**
	 * @type {string}
	 */
    export let to;
    $: act = $page.url.pathname.split('/')[1] === to.split('/')[1];
</script>

<a
    class='text-gray-500 hover:text-light-900 no-underline tr'
    class:text-sky-500={act}
    class:hover:text-sky-200={act}
    href={to}
><slot/></a>