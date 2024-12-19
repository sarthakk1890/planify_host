import prisma from "@/app/lib/db";
import { requireUser } from "@/app/lib/hooks";
import { nylas, nylasConfig } from "@/app/lib/nylas";

import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  console.log("Received callback from Nylas");

  // Ensure the user is logged in
  const session = await requireUser();
  if (!session?.user?.id) {
    console.error("User session is invalid or missing");
    return NextResponse.json(
      { error: "User session is required for this operation" },
      { status: 401 }
    );
  }

  // Extract the authorization code from the URL
  const url = new URL(req.url as string);
  const code = url.searchParams.get("code");

  if (!code) {
    console.error("No authorization code returned from Nylas");
    return NextResponse.json(
      { error: "No authorization code returned from Nylas" },
      { status: 400 }
    );
  }

  const codeExchangePayload = {
    clientSecret: nylasConfig.apiKey,
    clientId: nylasConfig.clientId as string,
    redirectUri: nylasConfig.callbackUri,
    code,
  };

  try {
    // Exchange the authorization code for an access token
    const response = await nylas.auth.exchangeCodeForToken(codeExchangePayload);
    const { grantId, email } = response;

    console.log("Token exchange successful:", { grantId, email });

    // Update the user's grant details in the database
    await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        grantId: grantId,
        grantEmail: email,
      },
    });

    console.log("User grant details updated in the database:", { grantId });
  } catch (error: any) {
    console.error("Error exchanging code for token:", error);

    // Return a meaningful error to the client if something goes wrong
    return NextResponse.json(
      { error: "Failed to exchange code for token or update database" },
      { status: 500 }
    );
  }

  // Redirect to the dashboard on success
  return redirect("/dashboard");
}
