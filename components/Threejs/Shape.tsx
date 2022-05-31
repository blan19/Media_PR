import { useFrame } from "@react-three/fiber";
import { Ref, useRef } from "react";
import { BufferGeometry, Material, Mesh } from "three";

const Shape = () => {
  const box: Ref<Mesh<BufferGeometry, Material | Material[]>> | undefined =
    useRef(null!);

  useFrame(({ clock }) => {
    const delta = clock.getDelta();

    box.current.rotation.x += 0.01;
    box.current.rotation.y += 0.01;
  });
  return (
    <group position={[0, -23, 0]}>
      <mesh ref={box}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </group>
  );
};

export default Shape;
