import * as THREE from "three";
import { useEffect, useState } from "react";
import { useAspect } from "@react-three/drei";

interface VideoProps {
  src: string;
}

const Video = ({ src }: VideoProps) => {
  const size = useAspect(1800, 1000);
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src,
      crossOrigin: "Anonymous",
      loop: true,
      muted: true,
    })
  );

  useEffect(() => void video.play(), [video]);

  return (
    <mesh scale={size}>
      <planeBufferGeometry />
      <meshBasicMaterial toneMapped={false}>
        <videoTexture
          attach="map"
          args={[video]}
          encoding={THREE.sRGBEncoding}
        />
      </meshBasicMaterial>
    </mesh>
  );
};

export default Video;
