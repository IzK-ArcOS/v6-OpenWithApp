<script lang="ts">
  import { Runtime } from "../ts/runtime";

  export let runtime: Runtime;

  const { showAll, selected } = runtime;

  function showCompatible() {
    $showAll = false;
  }

  function showAllItems() {
    $showAll = true;
  }
</script>

<div class="bottom">
  <div class="mode">
    <button class:suggested={!$showAll} on:click={showCompatible}> Compatible </button>
    <button class:suggested={$showAll} on:click={showAllItems}>All</button>
  </div>
  <div class="confirm">
    <button on:click={() => runtime.closeApp()}>Cancel</button>
    <button class="suggested" disabled={!$selected} on:click={() => runtime.Go()}> Open </button>
  </div>
</div>
