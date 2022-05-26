import React, { useCallback } from "react";
import { Html } from "@react-three/drei";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ChatType } from "./Chat";
import * as S from "./Question.style";

interface ChatFormProps {
  user: string;
  connected: boolean;
}

interface FormState {
  input: string;
}

const ChatForm: React.FC<ChatFormProps> = ({ user, connected }) => {
  const { register, handleSubmit, reset } = useForm<FormState>();
  const onSubmit = useCallback(
    async (data: FormState) => {
      const contents: ChatType = {
        user,
        text: data.input,
      };

      await axios
        .post("/api/chats", contents)
        .then(() => console.log("success"))
        .catch(() => console.log("error"));

      reset();
    },
    [reset, user]
  );
  return (
    <Html fullscreen>
      <S.Container>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Input
            placeholder={connected ? "질문을 입력해보세요" : "연결중.."}
            disabled={connected ? false : true}
            spellCheck={false}
            {...register("input", { required: true })}
          />
          <S.Button type="submit">Click</S.Button>
        </S.Form>
      </S.Container>
    </Html>
  );
};

export default ChatForm;
