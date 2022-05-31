import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Ref, useRef } from "react";
import { Group } from "three";

const Texts = () => {
  const ref: Ref<Group> | undefined = useRef(null!);
  const { scene } = useGLTF("/gltf/WebGL.glb");

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x =
        ref.current.rotation.y =
        ref.current.rotation.z =
          Math.sin(clock.getElapsedTime()) * 0.3;
    }
  });

  return (
    <group ref={ref} position={[0, 0, 1]}>
      <primitive object={scene} />
    </group>
  );
};

export default Texts;
