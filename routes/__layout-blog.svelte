<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import { page } from "$app/stores";

  export let title;
  export let date;
  export let author;
  export let summary;
  export let authorLink;
  const description = summary.replace(/(\s+|\n)/g, " "); // squeeze all extra spaces out

  const { url, params } = $page;
</script>

<svelte:head>
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={url.href} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="og:description" content={description} />
  <meta name="twitter:image:alt" content={description} />
  <title>{title}</title>
</svelte:head>

<article class="post">
  <h1>{title}</h1>

  <p>Published: {date}</p>
  <p>Author: <a href={authorLink} target="_blank">{author}</a></p>

  <slot />
</article>

<style>
  article.post::before {
    display: block;
    content: "";
    padding-top: 10rem;
  }

  article.post {
    margin: 0 auto;
    padding: 0 0.5rem;
    max-width: 40rem;
  }

  article.post :global(h1) {
    padding-top: 2rem;
  }

  article.post :global(img) {
    max-width: 100%;
  }

  article.post :global(a) {
    text-decoration: underline;
  }
</style>
