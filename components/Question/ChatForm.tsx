import React, { useCallback } from "react";
import { Html } from "@react-three/drei";
import { useForm } from "react-hook-form";
import { Types } from "ably";
import * as S from "./Question.style";

interface ChatFormProps {
  channel: Types.RealtimeChannelPromise;
  user: string;
  connected: boolean;
}

interface FormState {
  input: string;
}

const ChatForm: React.FC<ChatFormProps> = ({ user, connected, channel }) => {
  const { register, handleSubmit, reset, watch } = useForm<FormState>();
  const onSubmit = useCallback(
    async (data: FormState) => {
      await channel.publish({ name: user, data: data.input });
      reset();
    },
    [channel, reset, user]
  );
  const text = watch("input");

  const onKeypress = useCallback(
    async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key !== "Enter" || text.length === 0) {
        return;
      }
      await channel.publish({ name: user, data: text });
      reset();
      e.preventDefault();
    },
    [channel, reset, text, user]
  );
  return (
    <Html fullscreen>
      <S.Container>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Input
            placeholder={connected ? "질문을 입력해보세요" : "연결중.."}
            disabled={connected ? false : true}
            spellCheck={false}
            onKeyDown={onKeypress}
            {...register("input", { required: true })}
          />
          <S.Button type="submit">Click</S.Button>
        </S.Form>
      </S.Container>
    </Html>
  );
};

export default ChatForm;
