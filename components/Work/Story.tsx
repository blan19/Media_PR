import { Cloud, OrbitControls, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Group } from "three";

interface IState {
  x: number;
  y: number;
  z: number;
}

const Story = () => {
  const { scene } = useGLTF("/gltf/MapWithoutModels.glb");
  const ref: React.Ref<Group> | undefined = useRef(null!);
  const [state, setState] = useState<IState>({
    x: 0,
    y: 0,
    z: -340,
  });
  const scroll = useScroll();

  useFrame(() => {
    if (ref.current) {
      ref.current.position.z = scroll.offset * 515;
    }
  });
  return (
    <group position={[0, 0, -340]}>
      <group ref={ref} position={[0, 0, -340]} rotation={[0, Math.PI * 1.5, 0]}>
        <primitive object={scene} />
        <group>
          {/* right */}
          <Cloud position={[20, 0, -340]} speed={0.2} opacity={1} width={10} />
          <Cloud position={[20, 0, 360]} speed={0.2} opacity={1} width={10} />
          {/* left */}
          <Cloud position={[-80, 0, 340]} speed={0.2} opacity={1} width={10} />
          <Cloud position={[-80, 0, 375]} speed={0.2} opacity={1} width={10} />
        </group>
      </group>
    </group>
  );
};

export default Story;
