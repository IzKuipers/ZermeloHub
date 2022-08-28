export type method = "GET" | "POST";

export interface URLParams {
    [key:string]:string
}

export async function ApiReq(
  school: string,
  path: string,
  method: string,
  json: boolean,
  params: URLParams,
  accessToken?: string
) {
  const init: RequestInit = {
    headers: {
      Authorization: accessToken ? `Bearer ${accessToken}` : null,
    },
    method,
  };

  const req = await (
    await fetch(`http://${school}.zportal.nl/api/v3/${path}`, init)
  ).json();

  return json ? req : JSON.stringify(req);
}
