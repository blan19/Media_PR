import { NextPage } from "next";
import useIntersectReveal from "../../hooks/useIntersectReveal";
import useIntersectShow from "../../hooks/useIntersectShow";
import * as UI from "../../styles/ui";
import * as S from "../../components/React/react.style";

const React: NextPage = () => {
  return (
    <UI.Container>
      <UI.Wrapper>
        <S.Div top>
          <S.H1 center primary power {...useIntersectReveal(4)}>
            간단하게 React를 소개해보겠습니다!!
          </S.H1>
        </S.Div>
        <S.Div top center {...useIntersectReveal(4)}>
          <S.Img src="/images/React.gif" alt="react" width={300} height={300} />
        </S.Div>
        <S.Div top>
          <S.P {...useIntersectShow("left")}>
            1. 리액트는 자바스크립트 UI 라이브러리입니다.
          </S.P>
        </S.Div>
        <S.Div top>
          <S.P {...useIntersectShow("left")}>2. 리액트를 왜 쓸까요?</S.P>
        </S.Div>
        <S.Div top>
          <S.P {...useIntersectShow("left")}>3. 장점과 단점을 빠르게</S.P>
        </S.Div>
        <S.Div top>
          <S.P {...useIntersectShow("left")}>4. 리액트 말고도 많아요!</S.P>
        </S.Div>
      </UI.Wrapper>
    </UI.Container>
  );
};

export default React;
