import type { NextPage } from "next";
import { Canvas } from "@react-three/fiber";
import { Stars, TrackballControls } from "@react-three/drei";
import Cloud from "../components/Main/Cloud";

const Main: NextPage = () => {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 28.5], fov: 90 }}>
      <ambientLight />
      <directionalLight color="red" intensity={10} />
      <fog attach="fog" args={["#202025", 0, 80]} />
      <TrackballControls />
      <Stars
        radius={100}
        depth={50}
        count={1500}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <Cloud count={8} radius={23.5} />
    </Canvas>
  );
};

export default Main;
