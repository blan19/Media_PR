import { Html, useProgress } from "@react-three/drei";
import * as S from "./Loader.style";

interface LoaderProps {
  dark?: boolean;
}

const Loader = ({ dark }: LoaderProps) => {
  const { progress } = useProgress();
  return (
    <Html fullscreen>
      <S.Wrapper>
        <S.H1 dark={dark}>{progress} % loaded</S.H1>
      </S.Wrapper>
    </Html>
  );
};

export default Loader;
