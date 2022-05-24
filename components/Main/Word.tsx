import React, { useCallback, useRef, useState } from "react";
import * as THREE from "three";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";

interface WordProps {
  children: string;
}

const Word: React.FC<WordProps> = ({ children, ...props }) => {
  const color = new THREE.Color();
  const fontProps = {
    // font: '/Inter-Bold.woff',
    fontSize: 4.5,
    cusor: "pointer",
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef<THREE.Mesh>();
  const [hovered, setHovered] = useState(false);
  const over = (e: ThreeEvent<PointerEvent>) => (
    e.stopPropagation(), setHovered(true)
  );
  const out = () => setHovered(false);
  const onClick = useCallback(() => {
    location.href = children.toLowerCase();
  }, []);
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current?.quaternion.copy(camera.quaternion);
    // Animate font color
    ref.current?.material.color.lerp(
      color.set(hovered ? "#61DAFB" : "white"),
      0.1
    );
  });
  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      onClick={onClick}
      children={children}
      {...fontProps}
      {...props}
    />
  );
};

export default Word;
