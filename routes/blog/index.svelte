<script context="module" lang="ts">
  export const prerender = true;

  export const load = async ({ fetch }) => {
    // Runs before the component is created
    const posts = await fetch("/posts.json");
    const allPosts = await posts.json();

    // console.log("load allPosts:", allPosts);
    return {
      props: {
        posts: allPosts, // .concat(staticPosts),
      },
    };
  };
</script>

<script lang="ts">
  import { page } from "$app/stores";
  export let posts;

  $: [firstPost, ...restPosts] = posts;

  const { url, params } = $page;

  const title = "Matters-Lab Blog: Powering the Future of Web3";
</script>

<svelte:head>
  <meta
    name="description"
    content="A Web3 social media ecosystem that lets users collaboratively create and monetize digital assets with complete control."
  />
  <meta property="og:title" content={title} />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://matters-lab.io/img/thumb.jpg?v=2" />
  <meta property="og:url" content="https://matters-lab.io/blog" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    property="og:description"
    content="A Web3 social media ecosystem that lets users collaboratively create and monetize digital assets with complete control."
  />
  <meta property="og:site_name" content="Matters-Lab: Powering the Future of Web3" />
  <meta
    name="twitter:image:alt"
    content="A Web3 social media ecosystem that lets users collaboratively create and monetize digital assets with complete control."
  />
  <title>{title}</title>
</svelte:head>

<div class="container">
  <article class="post">
    <div>
      <h1>Blog</h1>
      <div class="first">
        <figure><img src={firstPost.imgCover} /></figure>
        <a href={firstPost.path}>
          <div>
            <h2 class="title">{firstPost.title}</h2>
            <div class="subtitle">
              <span>{firstPost.date}</span>
              ・
              <span>{firstPost.author}</span>
            </div>
            <p class="subtitle">{firstPost.summary}</p>
          </div>
        </a>
      </div>
    </div>
    <!-- <pre>{JSON.stringify(firstPost, null, 2)}</pre> -->
    <!-- <pre>{JSON.stringify({ url, hostname: url.hostname, host: url.host, params }, null, 2)}</pre> -->
  </article>

  <div class="divider container">
    <header class="d-flex justify-content-between align-items-center flex-column flex-md-row">
      <h2 class="d-inline-block align-self-start align-self-md-center" />
      <div class="buttons align-self-end align-self-md-center">
        <div class="d-flex flex-column">
          <a class="btn arrow"><span>Our Latest Blogs</span><i class="icon" /></a>
        </div>
      </div>
    </header>
  </div>

  <div class="more-posts">
    {#each restPosts as post, i}
      <div class="item">
        <a class="btn" href={post.path || post.link} target={post.path ? null : "_blank"}>
          <div class="cover">
            <img src={post.imgCover} />
          </div>
          <div class="digest">
            <div class="title">
              <h3>{post.title}</h3>
            </div>
            <!-- <div class="text">
                <p>Author: {post.author}</p>
                <!-- <p style="white-space: pre-wrap;">{post.summary}</p>
              </div> -->
            <div class="d-flex justify-content-between" style="width: 100%">
              <div />
              <i class="align-self-end icon" />
            </div>
          </div></a
        >
      </div>
    {/each}
  </div>
</div>

<style>
  article.post::before {
    display: block;
    content: "";
    padding-top: 6rem;
  }

  article.post div {
    margin: 0 auto;
    padding: 1rem 0.5rem;
    max-width: 67.5rem;
  }
  article.post div h1 {
    display: none;
  }

  img {
    max-width: 100%;
    object-fit: contain;
    border-radius: 1rem;
  }

  .first {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1rem;
  }
  .first > * {
    flex: 1;
  }

  .first .title {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    /* Background grey */

    color: #f7f7f7;
  }

  .subtitle {
    color: #b3b3b3;
  }

  div.divider {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .more-posts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  .more-posts .item {
    /* margin: 0.25rem; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0;

    background: #1c1c1c;
    border-radius: 1rem;

    min-height: 16rem;
  }

  .more-posts .item .cover {
    /* background: url(), #D9D9D9; */
    border-radius: 1rem 0 0 1rem;
  }
  .more-posts .item .cover img {
    object-fit: cover;
    max-width: 16rem;
    height: 16rem;
  }

  .more-posts .item .digest {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1.5rem 2rem;
    gap: 2.5rem;
  }

  .more-posts .item .digest .title h3 {
    font-size: 1.2rem;
    color: #f7f7f7;
  }

  .digest i.icon {
    background-image: url(/img/icon-arrow.svg);
    width: 55px;
    height: 11px;
  }

  @media screen and (max-width: 768px) {
    .first,
    .more-posts {
      flex-direction: column;
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    .more-posts .item .digest {
      padding: 0.5rem;
      gap: 0.5rem;
    }
    .more-posts .item .digest .title h3 {
      font-size: 1rem;
    }
    .more-posts .item {
      min-height: 10rem;
    }
    .more-posts .item .cover img {
      max-width: 8rem;
      height: 10rem;
    }
  }
</style>
