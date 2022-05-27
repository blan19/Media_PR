import styled, { css } from "styled-components";
import Image from "next/image";

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

const Span = styled.span<{
  lighter?: boolean;
  primary?: boolean;
  gap?: boolean;
}>`
  padding: 1rem 0;
  font-size: 2.75rem;
  font-weight: ${(props) => props.lighter && "lighter"};
  color: ${(props) => props.primary && "#61DAFB"};
  padding: ${(props) => props.gap && "2rem 0"};
`;

const HighLight = styled.p<{ center?: boolean }>`
  padding: 2rem 1rem;
  border-radius: 0.5rem;
  background-color: #495057;
  font-size: 2.25rem;
`;

const Ul = styled.ul`
  padding: 1rem 0;
`;

const List = styled.li`
  font-size: 2rem;
  padding: 1rem 0;
`;

const Inline = styled.span`
  font-size: 2rem;
  background-color: #61dafb;
  padding: 0 1rem;
  border-radius: 0.5rem;
  color: black;
  font-weight: bold;
`;

const Img = styled(Image)`
  width: 100%;
`;

const Icon = styled.span<{ left?: boolean; right?: boolean }>`
  padding-right: ${(props) => props.right && "1rem"};
`;

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

const Container = styled.main`
  width: 100%;
`;

const Wrapper = styled.section`
  padding: 0 10rem;
`;

const Grid = styled.div<{ mobile?: boolean }>`
  display: grid;
  gap: 1rem;
  padding: 5rem 0;
  grid-template-columns: 1fr 1fr 1fr;
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const Col = styled.div<{ center?: boolean }>`
  ${(props) =>
    props.center &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      @media screen and (max-width: 500px) {
        align-items: flex-start;
        margin-top: 2rem;
      }
    `}
`;

export {
  H1,
  P,
  Div,
  Img,
  Container,
  Wrapper,
  Span,
  HighLight,
  Ul,
  List,
  Icon,
  Inline,
  Grid,
  Col,
};
