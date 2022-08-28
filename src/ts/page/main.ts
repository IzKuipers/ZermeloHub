import { PageStore } from "./store";
import { urlParams, pageId, pageData, defaultPage } from "./../env";
import { navigate } from "svelte-navigator";

export function loadFromParams() {
  const page = urlParams.get("p");

  const loadedData = PageStore.get(page);
  const defaultData = PageStore.get(defaultPage);

  pageId.set(page || defaultPage);
  pageData.set(page ? loadedData : defaultData);

  navigate(`./?p=${page || defaultPage}`);
  urlParams.set("p", page || defaultPage);
}
