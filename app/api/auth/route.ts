import { nylas, nylasConfig } from "@/app/lib/nylas";
import { redirect } from "next/navigation";

export async function GET() {

  console.log("Request for calender join")
  console.log("CLIENT_ID: ",nylasConfig.clientId)
  console.log("CALLBACK_URI: ",nylasConfig.callbackUri)

  const authUrl = nylas.auth.urlForOAuth2({
    clientId: nylasConfig.clientId as string,
    redirectUri: nylasConfig.callbackUri,
  });
  console.log(authUrl)
  return redirect(authUrl);
}
