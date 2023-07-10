<script lang="ts">
  import ContentArea from "$lib/components/Layout/ContentArea.svelte";
  const sites = [
    {name: "Faster Than Lime", url:"http://fasterthanli.me"},
    {name: "Luke Smith (Linux)", url:"https://lukesmith.xyz"},
    {name: "Joy of Code (Svelte)", url:"https://joyofcode.xyz"},
    {name: "Programming.dev (Lemmy)", url:"https://programming.dev"},
    {name: "Eric Murphy (Linux)", url:"http://ericmurphy.xyz"},
  ]
</script>

<ContentArea class="title">
  <h1 class="h2 font-bold mb-3">Links</h1>
  <time class="text-xl italic text-primary-500/70"
    >Last updated July 10th, 2023.</time
  >
</ContentArea>

<ContentArea class="Reason">
  <p>
    These are some of the websites I find either usefull or interesting. The
    competitive nature of search engines makes it hard to beat SEO optimized
    websites, making it challenging to discover smaller websites. This is my way
    to help discovery of these sites.
  </p>
</ContentArea>

<ContentArea class="Disclaimer">
  <aside class="card p-4">
    <strong>Disclaimer</strong>
    <p>
      Linking a website here does not mean I resignate with everything they've
      ever posted or stated.
    </p>
  </aside>
</ContentArea>

<ContentArea class="List">
  <ul class="list-disc text-xl">
    {#each sites as site}
      <li>
        <a class="underline text-warning-500" href={site.url}>{site.name}</a>
      </li>
    {/each}
  </ul>
</ContentArea>
