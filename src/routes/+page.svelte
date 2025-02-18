<script lang="ts">
import "../app.css";
import Logo from "../components/Logo.svelte";
import { discography } from "../lib/discography";

// Show 5 latest releases
let disco_index = 0;
let disco_view = discography.slice(0, 5);

const next = () => {
    if (disco_index + 5 >= discography.length) {
        disco_index = 0;
    } else {
        disco_index += 5;
    }
    disco_view = discography.slice(disco_index, disco_index + 5);
};

const prev = () => {
    if (disco_index === 0) {
        disco_index = discography.length - 5;
    } else if (disco_index - 5 < 0) {
        disco_index = 0;
    } else {
        disco_index -= 5;
    }
    disco_view = discography.slice(disco_index, disco_index + 5);
};

const songCount = discography.reduce((acc, release) =>
    acc + (release.counts ? release.counts : 1), 0);

const albumCount = discography.filter((release) => release.type === "Album").length;
const singleCount = discography.filter((release) => release.type === "Single").length;
const collabCount = discography.filter((release) => release.artists.length > 1).length;

</script>

<div class="prose prose-mono mx-auto py-16">
    <!-- <div class="text-mono-900 max-sm:w-[45%] w-[18rem] h-auto">
        <Logo />
    </div> -->

    <div class="not-prose text-mono-900 max-sm:w-[45%] w-[18rem] h-auto">
        <Logo />
    </div>

    <p class="mx-auto text-blue-500">───────────┤ azur1s ├───────────</p>

    <p>
        hi, i'm azur1s. i make music bla bla bla. bro i don't that famous
        to be putting shit here xd.<br/><br/>
        my website is under construction. so don't expect much here :P<br/>
        contact me on instagram or discord if you have something :)
    </p>

    <p class="whitespace-pre text-mono-500">
˚　　　　✦　　　.　　. 　 ˚　.　　　　　 . ✦　　　 　˚　　　　 . ★  ⋆.
　　　.   　　˚　　 　　*　　 　　✦　　　.　　.　　　✦　˚ 　　　　 ˚　.˚
    </p>

    <img
        src="/images/banner_choco.png"
        alt="Banner"
        class="w-full h-auto rounded-lg"
    />
    <p class="text-mono-500">
        └ Logo commissioned from
        <a
            href="https://x.com/chocographix"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-300 hover:text-blue-500 transition-colors"
        >
            chocographix
        </a>
    </p>

    <p class="mx-auto text-blue-500">─────────┤ discography ├─────────</p>
    i have released in total of { songCount } songs, { albumCount } albums and
    { singleCount } singles.
    <br/>
    { collabCount } collabs with prominent names like Glitch Cat and UTAGE.
    <br/>
    <span class="text-mono-500">(click the title to listen in YouTube)</span>
    <br/>

    <span>
        <button
            class="text-blue-500 hover:text-blue-700 transition-colors"
            on:click={prev}
        >
            ←    prev
        </button>

        <span>|</span>

        <button
            class="text-blue-500 hover:text-blue-700 transition-colors"
            on:click={next}
        >
            next    →
        </button>
    </span>

    <!-- page number -->
    <span class="text-mono-500">
        {disco_index + 1} - {disco_index + 5} / {discography.length}
    </span>


    {#each disco_view as release}
        <p>
            <a
                href={release.link}
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-500 transition-colors no-underline"
            >
            {release.title}
            </a><br/>
            <span class="text-mono-500">└ {release.date}</span><br/>
            <span class="text-mono-500">└ {release.genres.join(", ")}</span>
            {#if release.artists.length > 1}
                <br/>
                <span class="text-mono-500">└ w/ {release.artists.filter((artist) => artist !== "Azur1s").join(", ")}</span>
            {/if}
        </p>
    {/each}

    <p class="mx-auto text-blue-500">───────────┤ gallery ├───────────</p>
    <p class="mb-32">WIP</p>

    <p class="mx-auto text-blue-500">───────────┤ contact ├───────────</p>
    <div class="whitespace-pre">
Instagram     azur1s             (fastest, recommended)
Discord       azur1s
Mail          contact@azur.moe
    </div>

    <p class="whitespace-pre text-mono-500">
                 '
            *          .
                   *       '
              *                *





   *   '*
           *
                *
                       *
               *
                     *

               .                      .
               .                      ;
               :                  - --+- -
               !           .          !
               |        .             .
               |_         +
            ,  | `.
- --  --- --+-&lt;#>-+- ---  --  -
            `._|_,'
               T
               |
               !
               :         . : 
               .       *
    </p>
</div>

<style lang="postcss">
</style>