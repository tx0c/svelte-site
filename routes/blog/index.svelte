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
      <a href={firstPost.path} class="first">
        <figure><img src={firstPost.imgCover} /></figure>
        <div class="right">
          <div class="content">
            <h2 class="title">{firstPost.title}</h2>
            <div class="subtitle">
              <div>{firstPost.date}</div>
              <div>・</div>
              <div>{firstPost.author}</div>
            </div>
            <p class="summery">{firstPost.summary}</p>
          </div>

          <div class="bottom-icon btn arrow">
            <span>Read the story</span>
            <i class="icon" />
          </div>
        </div>
      </a>
    </div>
  </article>

  <!-- <div class="divider container">
    <header class="d-flex flex-column flex-md-row">
      <a class="btn arrow"><h2 class="latest-blog">Our Latest Blogs</h2></a>

    </header>
  </div> -->
   <a class="btn arrow"><h2 class="latest-blog">Our Latest Blogs</h2></a>

  <div class="more-posts">
    {#each restPosts as post, i}
      <div class="item">
        <a
          class="clickable-btn btn"
          href={post.path || post.link}
          target={post.path ? null : "_blank"}
        >
          <div class="cover">
            <img src={post.imgCover} />
          </div>
          <div class="digest">
            <div class="title">
              <h3>{post.title}</h3>
            </div>

            <div class="d-flex justify-content-between arrow-icon" style="width: 100%">
              <div />
              <i class="align-self-end icon" />
            </div>
          </div>
        </a>
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
    /* margin: 0 auto; */
    /* padding: 1rem 0rem; */
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
    /* align-items: center; */
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

  .first .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .subtitle {
    display: flex;
    justify-content: start;
    margin: 24px 0;
    gap: 4px;
    color: #b3b3b3;
  }

  .summery {
    color: #b3b3b3;
  }

  .bottom-icon {
    align-self: start;
  }
  .bottom-icon span {
    color: #1ed7e2;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    align-self: baseline;
  }
  
  .bottom-icon i.icon {
    background-repeat: no-repeat;
    width: 155px;
    height: 11px;
  }

  div.divider {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .latest-blog {
    background: linear-gradient(106.84deg, #43C0B9 8.4%, #228CDA 51.17%, #B81DEF 97.66%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 28px;
    font-weight: 700;
    line-height: 32px; 
    margin-top: 168px;
    margin-bottom: 60px;
  }

  .more-posts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
  .more-posts .item .clickable-btn {
    display: flex;
  }
  .more-posts .item {
    /* margin: 0.25rem; */
    /* display: flex; */
    /* flex-direction: row;
    align-items: center;
    justify-content: center; */
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
    padding: 0rem 2rem;
    margin-top: 24px;
    gap: 2.5rem;
  }
  .more-posts .item .digest {
    width: 100%;
    margin-bottom: 25px;
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
    .container {
      padding: 0 16px;
    }
    figure {
      margin-top: 24px;
    }
    .subtitle {
      margin: 16px 0;
    }
   .summery {
    margin-bottom: 24px;
   }

   .bottom-icon i {
    align-self: baseline;
   }
   .latest-blog {
    margin-top: 116px;
    margin-bottom: 12px;
   }
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
