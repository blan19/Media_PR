import { Cloud } from "@react-three/drei";

const Clouds = () => {
  return (
    <group>
      {/* right */}
      <Cloud position={[340, 0, -70]} speed={0.2} opacity={1} width={10} />
      <Cloud position={[380, 0, -30]} speed={0.2} opacity={1} width={10} />
      <Cloud position={[320, 40, -30]} speed={0.2} opacity={1} width={10} />
      <Cloud position={[270, 40, -60]} speed={0.2} opacity={1} width={10} />
      <Cloud position={[230, 40, -60]} speed={0.2} opacity={1} width={10} />
      <Cloud position={[210, 50, -15]} speed={0.2} opacity={1} width={10} />
      <Cloud position={[170, 40, -70]} speed={0.2} opacity={1} width={10} />
      <Cloud position={[150, 40, -5]} speed={0.2} opacity={1} width={10} />
      <Cloud position={[100, 40, -25]} speed={0.2} opacity={1} width={10} />
      <Cloud position={[30, 40, -40]} speed={0.2} opacity={1} width={10} />
      <Cloud position={[-10, 40, -80]} speed={0.2} opacity={1} width={10} />
      <Cloud position={[-40, 40, 0]} speed={0.2} opacity={1} width={10} />
      <Cloud position={[-80, 40, 30]} speed={0.2} opacity={1} width={10} />
      {/* left */}
      <Cloud position={[350, 40, 50]} speed={0.2} opacity={1} width={10} />
      <Cloud position={[290, 40, 20]} speed={0.2} opacity={1} width={10} />
      <Cloud position={[270, 40, 60]} speed={0.2} opacity={1} width={10} />
      <Cloud position={[190, 40, 60]} speed={0.2} opacity={1} width={10} />
      <Cloud position={[110, 40, 70]} speed={0.2} opacity={1} width={10} />
      <Cloud position={[80, 40, 20]} speed={0.2} opacity={1} width={10} />
      <Cloud position={[70, 40, 50]} speed={0.2} opacity={1} width={10} />
      <Cloud position={[-20, 40, 80]} speed={0.2} opacity={1} width={10} />
    </group>
  );
};

export default Clouds;
