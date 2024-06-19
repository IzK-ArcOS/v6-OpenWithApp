<script lang="ts">
  import { DefaultMimeIcon } from "$ts/images/mime";
  import { getMimeIcon } from "$ts/server/fs/mime";
  import { pathToFriendlyPath } from "$ts/server/fs/util";
  import { onMount } from "svelte";
  import Bottom from "./Components/Bottom.svelte";
  import Handlers from "./Components/Handlers.svelte";
  import "./css/main.css";
  import { Runtime } from "./ts/runtime";

  export let runtime: Runtime;

  const { File } = runtime;

  let icon = DefaultMimeIcon;

  onMount(() => {
    File.subscribe((v) => v && (icon = getMimeIcon(v.filename)));
  });
</script>

{#if $File}
  <div class="top">
    <div class="header">
      <h1>Select an item to open {$File.filename}</h1>
      <p>
        <img src={icon} alt="" />
        <span>{pathToFriendlyPath($File.scopedPath)} </span>
      </p>
    </div>
    <Handlers {runtime} />
  </div>
  <Bottom {runtime} />
{/if}
