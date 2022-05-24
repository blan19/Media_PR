import Image from "next/image";
import styled, { css } from "styled-components";

const H1 = styled.h1<{ center?: boolean; primary?: boolean; power?: boolean }>`
  text-align: ${(props) => props.center && "center"};
  font-size: 5rem;
  color: ${(props) => props.primary && "#61DAFB"};
  font-weight: ${(props) => props.power && "bold"};
`;

const P = styled.p`
  font-size: 3.75rem;
  padding: 2rem 0;
`;

const Span = styled.span`
  font-size: 2.75rem;
`;

const Img = styled(Image)``;

const Div = styled.div<{ top?: boolean; center?: boolean }>`
  width: 100%;
  padding-top: ${(props) => props.top && "10rem"};
  ${(props) =>
    props.center &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;

export { H1, P, Div, Img };
