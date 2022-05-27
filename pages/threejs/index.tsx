import { NextPage } from "next";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Texts from "../../components/Threejs/Texts";
import { Cloud, Scroll, ScrollControls, Sky } from "@react-three/drei";
import Html from "../../components/Threejs/HTML";

const Threejs: NextPage = () => {
  return (
    <>
      <Canvas>
        <fog attach="fog" args={["white", 50, 190]} />
        <ambientLight />
        <pointLight
          distance={100}
          intensity={4}
          color="white"
          position={[0, 5, 5]}
        />
        <Sky
          azimuth={0.1}
          turbidity={10}
          rayleigh={0.5}
          inclination={0.6}
          distance={1000}
        />
        <Suspense fallback={null}>
          <ScrollControls pages={4}>
            <Scroll>
              <Texts />
              <Cloud position={[-4, -2, -25]} speed={0.2} opacity={1} />
              <Cloud position={[4, 2, -15]} speed={0.2} opacity={0.5} />
              <Cloud position={[-4, 2, -10]} speed={0.2} opacity={1} />
              <Cloud position={[4, -2, -5]} speed={0.2} opacity={0.5} />
            </Scroll>
            <Scroll html>
              <Html />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </>
  );
};

export default Threejs;
