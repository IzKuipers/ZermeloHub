import { loggedIn, userData } from './../env';
import { ApiReq } from "../api/main";
import { get } from 'svelte/store';
import { createAuthToken } from './token';

export async function loginFromSaved() {
  const token = localStorage.getItem("accessToken");
  const school = localStorage.getItem("accessSchool");

  const req = await ApiReq(school, "users/~me", "GET", true, {}, token);

  loggedIn.set(req.response.status == 200);

  if (!get(loggedIn)) {
    console.error(`Logging in from saved credentials failed: ${req.response}`);

    return false;
  }

  userData.set(req.response.data);

  return true;
}

export async function loginWithCode(school:string,code:string) {
    const token = await createAuthToken(school,code);

    if (!token) {
        console.error(`Logging in with bindcode failed: no token generated.`);

        return false;
    }

    
}