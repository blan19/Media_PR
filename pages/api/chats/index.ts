import { NextApiRequest } from "next";
import { NextApiResponseServerIO } from "../../../types/chat";

const chats = (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (req.method === "POST") {
    const chat = req.body;
    console.log(chat);
    res.socket.server.io.emit("chat", chat);

    res.status(201).json(chat);
  }
};

export default chats;
