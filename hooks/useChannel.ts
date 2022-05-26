import Ably from "ably/promises";
import { Types } from "ably";
import { useEffect, useState } from "react";

const base_url = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const ably = new Ably.Realtime.Promise({
  authUrl: `${base_url}/api/chats/createTokenRequest`,
});

const useChannel = (
  channelName: string,
  callbackOnMessage: (msg: Types.Message) => void
): [Types.RealtimeChannelPromise, Types.RealtimePromise, boolean] => {
  const [connected, setConnected] = useState(false);
  const channel = ably.channels.get(channelName);

  const onMount = () => {
    channel.subscribe((msg) => {
      callbackOnMessage(msg);
    });
    setConnected(true);
  };

  const onUnmount = () => {
    channel.unsubscribe();
  };

  const useEffectHook = () => {
    onMount();
    return () => {
      onUnmount();
      setConnected(false);
    };
  };

  useEffect(useEffectHook);

  return [channel, ably, connected];
};

export default useChannel;
