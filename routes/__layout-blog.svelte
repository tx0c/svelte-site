<script lang="ts">
  export let title;
  export let date;
  export let author;
  export let summary;
  export let authorLink;
</script>

<svelte:head>
  <meta name="description" content={summary} />
  <meta property="og:title" content={title} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://matters-lab.io/..." />
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="og:description" content={summary} />
  <meta name="twitter:image:alt" content={summary} />
  <title>{title}</title>
</svelte:head>

<article class="post">
  <h1>{title}</h1>

  <p>Published: {date}</p>
  <p>Author: <a href={authorLink} target="_blank">{author}</a></p>

  <slot />
</article>

<style>
  :global(main::before) {
    display: block;
    content: "";
    padding-top: 10rem;
  }

  article.post {
    margin: 0 auto;
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
