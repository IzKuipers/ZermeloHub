import { ApiReq } from "../api/main";

export async function createAuthToken(school: string, code: string) {
  const req = await ApiReq(school, "token", "POST", true, {
    grant_type: "authorization_code",
    code,
  });

  console.log(req);

  return req;
}

