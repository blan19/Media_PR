import { Html } from "@react-three/drei";
import { uid } from "uid";
import { ChatType } from "./Chat";
import * as S from "./Question.style";

interface ChatTextProps {
  chat: ChatType[];
}

const yMin = -2;
const yMax = 4;
const xMax = 3;
const xMin = -3;

const ChatText: React.FC<ChatTextProps> = ({ chat }) => {
  return (
    <group>
      {chat.length > 0 ? (
        chat.map(({ data }, idx) => (
          <Html
            key={uid(5)}
            position={[
              // 0,
              // 0,
              // 0,
              Math.floor(Math.random() * (xMax - xMin) + xMin),
              Math.floor(Math.random() * (yMax - yMin) + yMin),
              (idx + 1) * -0.1,
            ]}
          >
            <S.ChatBox>
              <S.Chat>{data}</S.Chat>
            </S.ChatBox>
          </Html>
        ))
      ) : (
        <Html center>
          <S.ChatBox center>
            <S.Chat>질문이 있다면, 채팅해주세요!</S.Chat>
          </S.ChatBox>
        </Html>
      )}
    </group>
  );
};

export default ChatText;
