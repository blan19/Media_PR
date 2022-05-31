import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";
import Clouds from "./Clouds";
import Texts from "./Texts";

interface IState {
  x: number;
  y: number;
  z: number;
}

const Story = () => {
  const { scene } = useGLTF("/gltf/MapWithoutModels.glb");
  const ref: React.Ref<Group> | undefined = useRef(null!);
  const scroll = useScroll();

  useFrame(() => {
    if (ref.current) {
      ref.current.position.z = scroll.offset * 515;
    }
  });
  return (
    <group position={[0, 0, -340]}>
      {/* <OrbitControls /> */}
      <group ref={ref} position={[0, 0, -340]} rotation={[0, Math.PI * 1.5, 0]}>
        <primitive object={scene} />
        <Texts />
        <Clouds />
      </group>
    </group>
  );
};

export default Story;
