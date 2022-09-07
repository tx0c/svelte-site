<script context="module" lang="ts">
  export const prerender = true;

  // import img from "$lib/components/img.svelte";
</script>

<script lang="ts">
  import { page } from "$app/stores";

  import { LINKS } from "$lib/consts";

  export let title;
  export let date;
  export let author;
  export let summary;
  export let authorLink;
  export let imgCover;
  export let keywords = [];
  export let categories = [];
  $: description = summary.replace(/(\s+|\n)/g, " ").trim(); // squeeze all extra spaces out
  $: metaKeywords = Array.from(new Set([keywords, categories, ["Web3", "MattersLab"]].flat())).join(
    ", "
  );

  const { url, params } = $page;
</script>

<svelte:head>
  <meta name="description" content={description} />
  <meta name="keywords" content={metaKeywords} />
  <meta name="author" content={author} />
  <link rel="canonical" href={`https://${LINKS.canonicalSite}${url.pathname}`} />
  <meta property="og:title" content={title} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={url.href} />
  {#if imgCover}<meta property="og:image" content={imgCover} />{/if}
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="og:description" content={description} />
  <meta name="twitter:image:alt" content={description} />
  {#if url.hostname !== LINKS.canonicalSite}
    <meta name="robots" content="noindex, nofollow" />
    <meta name="googlebot" content="noindex, nofollow" />
  {/if}
  <title>{title}</title>
</svelte:head>

<article class="post">
  <div class="center">
    {#if imgCover}
      <div>
        <div>
          <img src={imgCover} alt={title} decoding="async" />
        </div>
      </div>
    {/if}
    <h1>{title}</h1>

    <p>Published: {date}</p>
    <p>
      Author: {#if authorLink}<a href={authorLink} target="_blank">{author}</a>{:else}{author}{/if}
    </p>

    <slot />
  </div>
</article>

<style>
  :root {
    --main-color: #06c;
    --colors-accent: blue;
  }

  article.post::before {
    display: block;
    content: "";
    padding-top: 6rem;
  }

  article.post {
    background: white;
    color: black;
  }
  article.post div {
    margin: 0 auto;
    padding: 1rem 0.5rem;
    max-width: 48rem;
  }

  article.post :global(blockquote) {
    display: flex;
    position: relative;
  }
  article.post :global(blockquote::before) {
    content: "";
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0;
    background-color: var(--theme-ui-colors-accent, var(--colors-accent));
    width: 2px;
    border-radius: 999px;
  }

  article.post :global(figcaption) {
    color: rgb(0 0 0 / 40%);
    text-align: center;
  }

  article.post :global(*) {
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
    max-width: 48rem;
    width: 100%;
  }

  article.post :global(h1) {
    padding-top: 2rem;
  }

  article.post :global(img) {
    max-width: 100%;
  }

  article.post :global(a) {
    color: rgb(0, 122, 255);
    text-decoration: underline;
  }

  article.post :global(li::before) {
    position: absolute;
    text-align: right;
  }
  article.post :global(ul li::before) {
    content: "•";
    right: calc(100% - 1ch);
    top: -2px;
  }

  article.post :global(p),
  article.post :global(ul),
  article.post :global(h1),
  article.post :global(h2),
  article.post :global(h3) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  article.post :global(li) {
    list-style: none;
    margin-top: 0.5rem;
    position: relative;
    padding-left: 2rem;
  }
</style>
