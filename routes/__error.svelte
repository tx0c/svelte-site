<script lang="ts">
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  onMount(() => {
    const timer = setTimeout(() => goto("/", { replaceState: true }), 2e3);
    return () => clearTimeout(timer);
  });
</script>

<p>404 - Sorry could not find this page, <a href="/">return to home page</a></p>

<style>
  p::before {
    display: block;
    content: "";
    padding-top: 6rem;
  }

  p {
    text-align: center;
  }
</style>
