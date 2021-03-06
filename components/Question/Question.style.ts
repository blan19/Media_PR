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
  width: 30rem;
  height: 5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 1.5rem;
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
  width: 40rem;
  background-color: #495057;
  border-radius: 0.5rem;
`;

const Chat = styled.h1`
  padding: 0.5rem 1rem;
  font-size: 3.5rem;
  text-align: center;
  width: 100%;
`;

const Icon = styled.span`
  font-size: 2.5rem;
`;

export { Container, Form, Input, Button, ChatBox, Chat, Icon };
