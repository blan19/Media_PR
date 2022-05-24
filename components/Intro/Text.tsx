import { useCallback } from "react";
import * as Intro from "./Intro.style";
import useIntersectReveal from "../../hooks/useIntersectReveal";

const Text = () => {
  const onClick = useCallback(() => {
    location.href = "/";
  }, []);
  return (
    <>
      <Intro.Div top="50vh" {...useIntersectReveal(1.5)}>
        <Intro.H1>
          Hi, there <span>👋</span>
        </Intro.H1>
      </Intro.Div>
      <Intro.Div top="140vh" {...useIntersectReveal(1.5)}>
        <Intro.H1>I Want to be a Creative Front-End Developer</Intro.H1>
      </Intro.Div>
      <Intro.Div top="240vh" {...useIntersectReveal(1.5)}>
        <Intro.H1>Section 1~3 and Question</Intro.H1>
      </Intro.Div>
      <Intro.Div top="340vh" {...useIntersectReveal(1.5)}>
        <Intro.H1>React, WebGL and Three.js, Graduation Work</Intro.H1>
      </Intro.Div>
      <Intro.Div top="380vh" {...useIntersectReveal(1.5)}>
        <Intro.H1 click onClick={onClick}>
          Start?!
        </Intro.H1>
      </Intro.Div>
    </>
  );
};

export default Text;
