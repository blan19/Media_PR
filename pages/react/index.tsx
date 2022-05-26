import { NextPage } from "next";
import useIntersectReveal from "../../hooks/useIntersectReveal";
import useIntersectShow from "../../hooks/useIntersectShow";
import { isMobile } from "react-device-detect";
import * as UI from "../../styles/ui";

const React: NextPage = () => {
  return (
    <UI.Container>
      <UI.Wrapper>
        <UI.Div top>
          <UI.H1 center primary power {...useIntersectReveal(4)}>
            간단하게 React를 소개해보겠습니다!!
          </UI.H1>
        </UI.Div>
        <UI.Div top center {...useIntersectReveal(4)}>
          <UI.Img
            src="/images/React.gif"
            alt="react"
            width={300}
            height={300}
          />
        </UI.Div>
        <UI.Div top {...useIntersectShow("left")}>
          <UI.P>1. 리액트는 자바스크립트 UI 라이브러리입니다.</UI.P>
          <UI.HighLight center>
            <UI.Icon right>💡</UI.Icon>
            리액트는 라우팅, API 통신 등의 기능을 기본적으로 제공하지 않습니다.
            그래서 가볍다!
          </UI.HighLight>
        </UI.Div>
        <UI.Div top>
          <UI.P {...useIntersectShow("left")}>2. 리액트를 왜 쓸까요?</UI.P>
          <UI.Grid mobile={isMobile ? true : false}>
            <UI.Col center {...useIntersectReveal(4)}>
              <UI.Span primary>JSX</UI.Span>
              <UI.Span>Javascript를 확장한 문법으로,</UI.Span>
              <UI.Span>리액트에서 사용하는 문법입니다.</UI.Span>
            </UI.Col>
            <UI.Col center {...useIntersectReveal(4, 1)}>
              <UI.Span primary>SPA</UI.Span>
              <UI.Span>SPA는 Single Page Application의 줄임말입니다.</UI.Span>
              <UI.Span>
                새로운 페이지를 불러오는 방식이 아니라, 처음 부터 모든 파일을
                불러옵니다!
              </UI.Span>
              <UI.Span>
                이후, 최소한의 템플릿만 교체하여 사용자 경험을 향상시켜주는 방식
              </UI.Span>
            </UI.Col>
            <UI.Col center {...useIntersectReveal(4, 2)}>
              <UI.Span primary>생산성</UI.Span>
              <UI.Span>생산성 중요하죠?</UI.Span>
              <UI.Span>
                리액트와 같은 라이브러리나, 프레임워크는 기존 자바스크립트로
                작성한 코드보다
              </UI.Span>
              <UI.Span>코드의 양을 훨씬 줄여줍니다.</UI.Span>
            </UI.Col>
          </UI.Grid>
        </UI.Div>
        <UI.Div top>
          <UI.P {...useIntersectShow("left")}>3. 리액트 말고도 많아요!</UI.P>
        </UI.Div>
      </UI.Wrapper>
    </UI.Container>
  );
};

export default React;
