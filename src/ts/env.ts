import { writable, type Writable } from "svelte/store";
import type { Page } from "./page/iface";

export const userData: Writable<any> = writable<any>();
export const loggedIn: Writable<boolean> = writable<boolean>(false);
export const pageId: Writable<string> = writable<string>();
export const pageData: Writable<Page> = writable<Page>();
export const defaultPage = "Login";
export const urlParams = new URLSearchParams(location.search);