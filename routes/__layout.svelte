<script lang="ts">
  import { page } from "$app/stores";

  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  // import "@/app.css";

  import { LINKS } from "$lib/consts";

  const { url, params } = $page;
</script>

<svelte:head>
  <link rel="shortcut icon" href="/img/favicon.ico" />
  <link rel="stylesheet" href="/css/app.min.css" />
  <script src="/js/app.min.js"></script>

  <link rel="canonical" href={`https://${LINKS.canonicalSite}${url.pathname}`} />
</svelte:head>

<Header />

<main class="index" id="main">
  <slot />
</main>

<Footer />

<style>
  main {
    min-height: calc(100vh - 10rem);
    margin-bottom: 120px;
  }

  @media(max-width: 768px) {
    main {
    margin-bottom: 60px;}
  }

</style>
