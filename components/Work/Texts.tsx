import { Html } from "@react-three/drei";
import * as S from "./Story.style";

const Texts = () => {
  return (
    <group>
      <Html position={[350, 0, -20]}>
        <S.Wrapper>
          <S.H1>플레이어들은 키보드와 마우스를 통해</S.H1>
          <S.H1>WebGL로 동작하는 씬들을 돌아다니게 됩니다.</S.H1>
        </S.Wrapper>
      </Html>
      <Html position={[300, 0, 100]}>
        <S.Wrapper>
          <S.H1>첫번째 씬은 대학교에 합불 조회를 하는,</S.H1>
          <S.H1>그 순간의 인터랙션을 담았습니다.</S.H1>
        </S.Wrapper>
      </Html>
      <Html position={[170, 0, -20]}>
        <S.Wrapper>
          <S.H1>두번째 씬은 글로벌미디어 학부 전공인</S.H1>
          <S.H1>기초조형 및 실습의 신문지 태우기 과제를</S.H1>
          <S.H1>인터랙션으로 만들어, 공감을 이끌어내었습니다.</S.H1>
        </S.Wrapper>
      </Html>
      <Html position={[60, 0, -25]}>
        <S.Wrapper>
          <S.H1>세번째 씬은 정보과학관을</S.H1>
          <S.H1>정보섬으로 표현하고 정보섬에서</S.H1>
          <S.H1>코딩하는 모습을 인터랙션으로 만들었습니다.</S.H1>
        </S.Wrapper>
      </Html>
      <Html position={[-40, 0, -5]}>
        <S.Wrapper>
          <S.H1>네번째 씬은 대학교 축제의 장면을</S.H1>
          <S.H1>인터랙션으로 만들었습니다.</S.H1>
        </S.Wrapper>
      </Html>
      <Html position={[-150, 0, 5]}>
        <S.Wrapper>
          <S.H1>마지막 씬은 스토리가 이어지는 웹인 만큼</S.H1>
          <S.H1>마지막을 백마상 앞에서 졸업사진을 찍으며,</S.H1>
          <S.H1>졸업하는 숭실대 학생을 웹캠을 통해</S.H1>
          <S.H1>인터랙션으로 표현하였습니다.</S.H1>
        </S.Wrapper>
      </Html>
    </group>
  );
};

export default Texts;
