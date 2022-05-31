import { Html } from "@react-three/drei";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 45rem;
`;

const H1 = styled.h1`
  color: #000;
  width: fit-content;
  font-size: 4rem;
  padding: 0.5rem 0;
`;

const FullScreen = styled(Html);

const Video = styled.video`
  width: 100%;
`;

const VideoWrapper = styled.div`
  width: 90rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Click = styled.button`
  outline: none;
  border: none;
  background-color: black;
  cursor: pointer;
  color: #fff;
  font-size: 2rem;
  padding: 0.5rem 0;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
`;

const Divider = styled.div`
  height: 3rem;
`;

export { H1, Wrapper, Video, Divider, Click, FullScreen, VideoWrapper };
