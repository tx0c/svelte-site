<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  // import "@/app.css";
</script>

<svelte:head>
  <link rel="shortcut icon" href="/img/favicon.ico" />
  <link rel="stylesheet" href="/css/app.min.css" />
  <script src="/js/app.min.js"></script>
</svelte:head>

<Header />

<main class="index" id="main">
  <slot />
</main>

<Footer />

<style>
  main {
    min-height: calc(100vh - 10rem);
  }
</style>
