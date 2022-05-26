import React, { useEffect, useMemo, useState } from "react";
import ChatForm from "./ChatForm";
import ChatText from "./ChatText";
import Chance from "chance";
import * as Socket from "socket.io-client";

export type ChatType = { user: string; text: string };

export interface StateType {
  name: string;
  connected: boolean;
  chat: ChatType[];
}

const Chat = () => {
  const [state, setState] = useState<StateType>({
    name: new Chance().first(),
    connected: false,
    chat: [],
  });

  const memorizationChat = useMemo(
    () => <ChatText chat={state.chat} />,
    [state.chat]
  );

  useEffect((): any => {
    const socket = Socket.connect(
      process.env.NEXT_BASE_URL || "http://localhost:3000",
      {
        path: "/api/chats/socket",
      }
    );

    socket.on("connect", () => {
      console.log("Socket Connected", socket.id);
      setState((prev) => ({
        ...prev,
        connected: true,
      }));
    });

    socket.on("chat", (chat: ChatType) => {
      setState((prev) => ({
        ...prev,
        chat: prev.chat.concat(chat),
      }));
    });

    if (socket) return () => socket.disconnect();
  }, []);

  return (
    <>
      {memorizationChat}
      <ChatForm user={state.name} connected={state.connected} />
    </>
  );
};

export default Chat;
