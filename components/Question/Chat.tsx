import React, { useMemo, useState } from "react";
import ChatForm from "./ChatForm";
import ChatText from "./ChatText";
import Chance from "chance";
import useChannel from "../../hooks/useChannel";
import { Types } from "ably";

export type ChatType = Types.Message;

export interface StateType {
  name: string;
  chat: ChatType[];
}

const Chat = () => {
  const [channel, _, connected] = useChannel("media-pr", (msg) => {
    setState((prev) => ({
      ...prev,
      chat: prev.chat.concat(msg),
    }));
  });

  const [state, setState] = useState<StateType>({
    name: new Chance().first(),
    chat: [],
  });

  const memorizationChat = useMemo(
    () => <ChatText chat={state.chat} />,
    [state.chat]
  );

  return (
    <>
      {memorizationChat}
      <ChatForm channel={channel} user={state.name} connected={connected} />
    </>
  );
};

export default Chat;
