import * as Intro from "../Intro/Intro.style";

const Html = () => {
  return (
    <>
      <Intro.Div top="120vh">
        <Intro.H1 black>WebGL은 웹상에서 2D 및 3D 그래픽을,</Intro.H1>
        <Intro.H1 black>렌더링하기 위한</Intro.H1>
        <Intro.H1 black>로우 레벨 Javascript API입니다.</Intro.H1>
      </Intro.Div>
      <Intro.Div top="160vh">
        <Intro.H1 black>- 그래픽 하드웨어를 활용합니다.</Intro.H1>
        <Intro.H1 black>
          - 별도의 플러그인이 필요가 없고, 웹 브라우저에 내장되어있습니다.
        </Intro.H1>
        <Intro.H1 black>- 이미 OpenGL API에 대한 경험이 있다면,</Intro.H1>
        <Intro.H1 black>능숙하게 다루기가 쉽습니다.</Intro.H1>
        <Intro.H1 black>- 자바스크립트 프로그래밍이 가능합니다.</Intro.H1>
        <Intro.H1 black>- 모바일 브라우저에서도 지원합니다.</Intro.H1>
      </Intro.Div>
      <Intro.Div top="250vh">
        <Intro.H1 black>Three.js란?</Intro.H1>
        <Intro.H1 black>3D 그래픽을 좀 더 쉽게 구현하기 위해</Intro.H1>
        <Intro.H1 black>WebGL 위에서 동작하는 Js 라이브러리</Intro.H1>
      </Intro.Div>
      <Intro.Div top="360vh">
        <Intro.H1
          black
          style={{ cursor: "pointer" }}
          onClick={() => (location.href = "/work")}
        >
          Three.js 활용한 졸업작품
        </Intro.H1>
      </Intro.Div>
    </>
  );
};

export default Html;
