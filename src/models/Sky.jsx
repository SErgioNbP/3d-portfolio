import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const SkyMaterial = shaderMaterial(
  {
    uColorTop: new THREE.Color(0x87cefa), // Light blue
    uColorBottom: new THREE.Color(0xffe4e1), // Light pink
  },
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  `
    varying vec2 vUv;
    uniform vec3 uColorTop;
    uniform vec3 uColorBottom;

    void main() {
      gl_FragColor = vec4(mix(uColorBottom, uColorTop, vUv.y), 1.0);
    }
  `
);

extend({ SkyMaterial });

const SkyNew = () => {
  const materialRef = useRef();
  return (
    <mesh scale={[100, 100, 100]}>
      <sphereGeometry args={[1, 32, 32]} />
      <skyMaterial ref={materialRef} side={THREE.BackSide} />
    </mesh>
  );
};

export default SkyNew;