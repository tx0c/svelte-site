<script lang="ts">
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  onMount(() => {
    const timer = setTimeout(() => goto("/", { replaceState: true }), 0e3);
    return () => clearTimeout(timer);
  });
</script>

<p>page not found, <a href="/">return to home page</a></p>

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
