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
  $: metaKeywords = Array.from(new Set([categories, keywords, ["Web3", "MattersLab"]].flat())).join(
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

    <div class="source">
      <div>{date}</div>
      <div>・</div>
      <div>
        {#if authorLink}<a href={authorLink} target="_blank">{author}</a>{:else}{author}{/if}
      </div>
    </div>
  </div>
  <div class="content">
    <slot />
  </div>
</article>

<style>
  :root {
    --main-color: #06c;
    --colors-accent: blue;
  }

  :global(nav#nav)::before {
    background: black;
  }

  article.post {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: white;
    color: black;
    padding: 0 16px;
  }

  article.post .center {
    margin-top: 128px;
  }

  article.post .center :global(img) {
    max-width: 100%;
    width: 100%;
    border-radius: 20px;
  }
  article.post .content {
    margin-bottom: 40px;
  }
  article.post .content :global(img) {
    max-width: 100%;
    margin-top: 48px;
    margin-bottom: 32px;
    border-radius: 20px;
  }

  @media (min-width: 768px) {
    article.post .center :global(img) {
      margin-top: 48px;
      max-width: 100%;
    }
    article.post .content {
      margin-bottom: 96px;
    }
    article.post .content :global(img) {
      max-width: 100%;
      margin-top: 48px;
      margin-bottom: 32px;
      border-radius: 20px;
    }
    article.post .source {
      display: flex;
      justify-content: start;
      gap: 8px;
      margin-bottom: 48px;
    }
    article.post :global(figcaption) {
      color: rgb(0 0 0 / 40%);
      text-align: center;
      margin-top: -32px;
      margin-bottom: 48px;
    }
  }

  article.post .source {
    display: flex;
    justify-content: start;
    gap: 8px;
  }

  article.post :global(figcaption) {
    color: rgb(0 0 0 / 40%);
    text-align: center;
    margin-top: -32px;
    margin-bottom: 48px;
  }

  article.post :global(*) {
    max-width: 67.5rem;
  }

  article.post :global(a) {
    color: #1cb0ab;
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

  article.post :global(ul) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  article.post :global(h1) {
    margin-top: 40px;
    margin-bottom: 24px;
  }
  article.post :global(h2),
  article.post :global(h3) {
    margin-top: 52px;
    margin-bottom: 24px;
  }

  article.post :global(li) {
    list-style: none;
    margin-top: 0.5rem;
    position: relative;
    padding-left: 2rem;
  }

  article.post :global(hr) {
    display: block;
    width: 10rem;
    height: 0.25rem;
    margin: 2rem auto;
    border-width: 1px 0px;
    color: initial;
    background-color: initial;
    border: 0 initial;
    opacity: initial;
    box-sizing: content-box;
    overflow: visible;
    border-top: 1px solid rgba(0, 0, 0, 0.24);
    border-bottom: 1px solid rgba(0, 0, 0, 0.24);
  }
</style>
