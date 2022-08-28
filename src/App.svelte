<script lang="ts">
  import { onMount } from "svelte";

  import Page from "./lib/Page.svelte";
  import { pageData, pageId } from "./ts/env";
  import { loadFromParams } from "./ts/page/main";

  onMount(loadFromParams);
</script>

<Page page={$pageData} id={$pageId} />
