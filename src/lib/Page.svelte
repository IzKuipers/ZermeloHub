<script lang="ts">
  import type { Page } from "../ts/page/iface";

  export let page: Page;
  export let id: string;
</script>

{#if page && id}
  <div class="content pid-{id}">
    <svelte:component this={page.content} />
  </div>
{:else}
  <p>No page.</p>
{/if}
