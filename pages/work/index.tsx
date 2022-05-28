import { ScrollControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { NextPage } from "next";
import { Suspense } from "react";
import Loader from "../../components/Common/Loader";
import Story from "../../components/Work/Story";

const Work: NextPage = () => {
  return (
    <>
      <Canvas
        dpr={[1, 1.5]}
        shadows
        camera={{
          fov: 35,
          position: [25, 180, 50],
        }}
        gl={{ alpha: false }}
      >
        <color attach="background" args={["#17171b"]} />
        <ambientLight intensity={0.25} />
        <directionalLight
          castShadow
          intensity={2}
          position={[10, 6, 6]}
          shadow-mapSize={[1024, 1024]}
        />
        <Sky azimuth={0.25} turbidity={0} rayleigh={0.25} />
        <Suspense fallback={<Loader />}>
          <ScrollControls pages={5}>
            <Story />
          </ScrollControls>
        </Suspense>
      </Canvas>
    </>
  );
};

export default Work;
