import Image from "next/image";
import styled from "styled-components";
import { rotationHand } from "../../styles/css/animation";

const Div = styled.div<{ pos?: boolean; top: string }>`
  position: absolute;
  top: ${(props) => props.top};
  left: 50vw;
  width: 65rem;
  transform: ${(props) =>
    props.pos ? "translateX(-65%)" : "translateX(-50%)"};
`;

const H1 = styled.h1<{ click?: boolean; black?: boolean }>`
  text-align: center;
  font-size: 5.5rem;
  font-weight: bold;
  color: ${(props) => (props.black ? "#000" : "#fff")};
  cursor: ${(props) => props.click && "pointer"};
  span {
    font-size: 5rem;
    display: inline-block;
    animation: ${rotationHand} 2.5s infinite;
  }
`;

const IntroImage = styled(Image)`
  width: 100%;
`;

const A = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: #000;
`;

export { H1, Div, IntroImage, A };
