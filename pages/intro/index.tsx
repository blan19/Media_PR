import type { NextPage } from "next";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Contents from "../../components/Intro/Contents";
import Loader from "../../components/Common/Loader";

const Intro: NextPage = () => {
  return (
    <Canvas>
      <ambientLight />
      <directionalLight color="red" intensity={10} />
      <Suspense fallback={<Loader dark />}>
        <Contents />
      </Suspense>
    </Canvas>
  );
};

export default Intro;
