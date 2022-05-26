import { NextApiRequest } from "next";
import { NextApiResponseServerIO } from "../../../types/chat";
import { Server as httpServer } from "http";
import { Server as SocketServer } from "socket.io";

const socketHandler = async (
  req: NextApiRequest,
  res: NextApiResponseServerIO
) => {
  if (!res.socket.server.io) {
    console.log("새로운 socket.io..!");
    const httpServer: httpServer = res.socket.server as any;
    const io = new SocketServer(httpServer, {
      path: "/api/chats/socket",
    });

    res.socket.server.io = io;
  }

  res.end();
};

export default socketHandler;
