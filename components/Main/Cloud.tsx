import React from "react";
import * as THREE from "three";
import { useMemo } from "react";
import Word from "./Word";

const contents = ["Intro", "React", "Threejs", "Work", "Question"];

interface CloudProps {
  count: number;
  radius: number;
}

const Cloud = ({ count, radius }: CloudProps): JSX.Element[] => {
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++)
      // Taken from https://discourse.threejs.org/t/can-i-place-obects-on-a-sphere-surface-evenly/4773/6
      for (let j = 0; j < count; j++)
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          contents[Math.floor(Math.random() * 5)],
        ]);
    return temp;
  }, [count, radius]);
  return words.map(([pos, word], index) => (
    <Word key={index} position={pos} word={word} />
  ));
};

export default Cloud;
