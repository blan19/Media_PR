import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const H1 = styled.h1<{ dark?: boolean }>`
  font-size: 7.5rem;
  color: ${(props) => (props.dark ? "#fff" : "#000")};
`;

export { H1, Wrapper };
