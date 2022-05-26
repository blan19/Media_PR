import Ably from "ably/promises";
import { NextApiRequest, NextApiResponse } from "next";

const api_key = process.env.NEXT_PRIVATE_ABLY_API_KEY || "";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = new Ably.Realtime(api_key);
    const tokenRequestData = await client.auth.createTokenRequest({
      clientId: "ably-media-pr",
    });
    res.status(200).json(tokenRequestData);
  } catch (e) {
    console.error(e);
  }
};

export default handler;
