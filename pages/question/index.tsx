import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { NextPage } from "next";
import { Suspense } from "react";
import Loader from "../../components/Common/Loader";
import Chat from "../../components/Question/Chat";

const Question: NextPage = () => {
  return (
    <Canvas>
      <ambientLight />
      <OrbitControls />
      <directionalLight color="red" intensity={10} />
      <fog attach="fog" args={["#202025", 0, 80]} />
      <Suspense fallback={<Loader dark />}>
        <Chat />
      </Suspense>
    </Canvas>
  );
};

export default Question;
