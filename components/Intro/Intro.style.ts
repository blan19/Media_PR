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

const H1 = styled.h1<{ click?: boolean }>`
  text-align: center;
  font-size: 5.5rem;
  font-weight: bold;
  color: #fff;
  cursor: ${(props) => props.click && "pointer"};
  span {
    font-size: 5rem;
    display: inline-block;
    animation: ${rotationHand} 2.5s infinite;
  }
`;

export { H1, Div };
