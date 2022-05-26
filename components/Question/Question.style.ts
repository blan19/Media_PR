import styled, { css } from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 100%;
  bottom: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.textarea`
  outline: none;
  width: 50rem;
  height: 5rem;
  padding: 1rem;
  border-radius: 0.5rem;
`;

const Button = styled.button`
  cursor: pointer;
  outline: none;
  height: 7.1rem;
  padding: 1rem 0.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
  border: none;
  color: #fff;
  background-color: #61dafb;
`;

const ChatBox = styled.div<{ center?: boolean }>`
  display: flex;
  ${(props) =>
    props.center &&
    css`
      align-items: center;
      justify-content: center;
    `}
  width: 50rem;
`;

const Chat = styled.h1`
  font-size: 6rem;
`;

export { Container, Form, Input, Button, ChatBox, Chat };
