<script context="module" lang="ts">
  import { browser } from "$app/env";
  if (browser) {
    window.twttr = (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
      if (d.getElementById(id)) return t;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);

      t._e = [];
      t.ready = function (f) {
        t._e.push(f);
      };

      return t;
    })(document, "script", "twitter-wjs");
  }
</script>

<script type="ts">
  import { onMount } from "svelte";
  // let mounted = false;
  export let id;
  let tweet;

  onMount(() => {
    // The payment-form is ready.
    // mounted = true;
    window.twttr.ready(() => {
      window.twttr.widgets.createTweet(id, tweet, {
        conversation: "none", // or all
        // cards: "hidden", // or visible
        align: "center",
        linkColor: "#cc0000", // default is blue
        theme: "light", // or dark
      });
    });
  });
</script>

<div bind:this={tweet} />
