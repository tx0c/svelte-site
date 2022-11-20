
<script lang="ts">
  import { onMount } from "svelte";
  // import { goto } from "$app/navigation";
  onMount(() => {
    // const timer = setTimeout(() => goto("/", { replaceState: true }), 0e3);
    // return () => clearTimeout(timer);
  });
</script>

<section class="error-page">
  <img src="img/404page.svg" alt="404Image" >
  <p>Page not found.
 </p>
  <p>
     Redirecting you to home page...
  </p>
  <a class="btn outline" href="/"><span>BACK TO HOME</span></a>

</section>

<style>
  .error-page::before {
    display: block;
    content: "";
  }
 
  .error-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media(min-width: 768px) {
      .error-page img {
    width: 900px;
    height: 628px;
    margin-bottom: 8px;
  }
  .error-page p{
    font-size: 36px;
    font-weight: 700;
    line-height: 48px;
    text-align: center;
  }

  .error-page a {
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    padding: 12px 16px;
    margin-top: 40px;
    width: 397px;
  }
  }

</style>
