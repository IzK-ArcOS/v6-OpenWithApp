<script lang="ts">
  import { FileHandlers } from "$ts/stores/filesystem/handlers";
  import { Runtime } from "../ts/runtime";
  import Handler from "./Handlers/Handler.svelte";

  export let runtime: Runtime;

  const { showAll, compatibles } = runtime;
</script>

<div class="handlers">
  {#each $showAll ? FileHandlers : $compatibles as handler}
    <Handler {handler} {runtime} />
  {/each}

  {#if !$showAll && !$compatibles.length}
    <div class="no-results">
      <p>Couldn't find any compatible handlers!</p>
      <button class="link show-all" on:click={() => ($showAll = true)}> Show All </button>
    </div>
  {/if}
</div>
