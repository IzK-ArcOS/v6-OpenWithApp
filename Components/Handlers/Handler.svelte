<script lang="ts">
  import { Runtime } from "$apps/OpenWith/ts/runtime";
  import { FileHandler } from "$types/fs";

  export let handler: FileHandler;
  export let runtime: Runtime;

  const { selected } = runtime;

  function open() {
    runtime.Go(handler);
  }

  function select() {
    $selected = handler.name;
  }
</script>

<button
  class="handler"
  class:selected={$selected == handler.name}
  on:click={select}
  on:dblclick={open}
>
  <img src={handler.image} alt="" />
  <div class="context">
    <p class="name">{handler.name}</p>
    <p class="description">{handler.description}</p>
  </div>
</button>
