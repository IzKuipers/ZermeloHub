import LoginSvelte from "../../lib/Page/Login.svelte";
import type { Page } from "./iface";

export const PageStore = new Map<string,Page>([
    ["Login",{
        name:"Login Page",
        icon:"lock",
        content:LoginSvelte,
        accessibility: {
            sideBar:false,
            urlParam:true,
        },
        params:[]
    }]
])