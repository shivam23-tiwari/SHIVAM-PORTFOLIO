import { Canvas, useFrame } from "@react-three/fiber";
import { PresentationControls, Environment, Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function DeveloperWorkspace() {
  const laptopScreensRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (laptopScreensRef.current) {
      const material = laptopScreensRef.current.material as THREE.MeshBasicMaterial;
      material.color.setHSL(0.58, 0.8, 0.1 + Math.sin(state.clock.elapsedTime * 3) * 0.05);
    }
  });

  return (
    <group position={[0, -0.8, 0]}>
      {/* Laptop Base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3.2, 0.1, 2.4]} />
        <meshStandardMaterial color="#0b0f19" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Trackpad area */}
      <mesh position={[0, 0.051, 0.6]}>
        <boxGeometry args={[1.2, 0.01, 0.8]} />
        <meshStandardMaterial color="#050810" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Keyboard area */}
      <mesh position={[0, 0.051, -0.2]}>
        <boxGeometry args={[2.8, 0.01, 1.2]} />
        <meshStandardMaterial color="#03050a" metalness={0.8} roughness={0.5} />
      </mesh>
      
      {/* Laptop Screen */}
      <group position={[0, 0.05, -1.2]} rotation={[-0.15, 0, 0]}>
        {/* Screen back */}
        <mesh position={[0, 1.1, 0]}>
          <boxGeometry args={[3.2, 2.2, 0.1]} />
          <meshStandardMaterial color="#0b0f19" metalness={0.9} roughness={0.1} />
        </mesh>
        
        {/* Display surface */}
        <mesh position={[0, 1.1, 0.051]} ref={laptopScreensRef}>
          <planeGeometry args={[3.1, 2.1]} />
          <meshBasicMaterial color="#020617" />
        </mesh>
        
        {/* Abstract Data Streams / Architecture graph on screen */}
        <group position={[-1.3, 1.9, 0.052]}>
          <mesh position={[0.4, 0, 0]}><planeGeometry args={[0.8, 0.04]} /><meshBasicMaterial color="#38bdf8" /></mesh>
          <mesh position={[0.6, -0.15, 0]}><planeGeometry args={[1.2, 0.04]} /><meshBasicMaterial color="#818cf8" /></mesh>
          <mesh position={[1.5, -0.3, 0]}><planeGeometry args={[0.4, 0.04]} /><meshBasicMaterial color="#10b981" /></mesh>
          <mesh position={[0.5, -0.45, 0]}><planeGeometry args={[1.0, 0.04]} /><meshBasicMaterial color="#38bdf8" /></mesh>
          <mesh position={[0.8, -0.6, 0]}><planeGeometry args={[1.6, 0.04]} /><meshBasicMaterial color="#94a3b8" /></mesh>
          
          <mesh position={[2.2, -0.3, 0]}><planeGeometry args={[0.6, 0.04]} /><meshBasicMaterial color="#ef4444" /></mesh>
          <mesh position={[1.8, -0.8, 0]}><circleGeometry args={[0.1, 32]} /><meshBasicMaterial color="#38bdf8" wireframe /></mesh>
          <mesh position={[1.2, -0.8, 0]}><circleGeometry args={[0.1, 32]} /><meshBasicMaterial color="#10b981" wireframe /></mesh>
          <mesh position={[1.5, -0.8, 0]}><planeGeometry args={[0.4, 0.02]} /><meshBasicMaterial color="#71717a" /></mesh>
        </group>
      </group>

      <ComplexAISphere />

      {/* Database/Kafka Pipeline Abstraction */}
      <Float floatIntensity={1.5} speed={1.5} rotationIntensity={0.5}>
        <group position={[2.2, 0.8, 0.5]}>
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.3, 0.3, 0.15, 32]} />
            <meshStandardMaterial color="#818cf8" metalness={0.7} roughness={0.2} transparent opacity={0.8} />
          </mesh>
          <mesh position={[0, 0.25, 0]}>
            <cylinderGeometry args={[0.3, 0.3, 0.15, 32]} />
            <meshStandardMaterial color="#818cf8" metalness={0.7} roughness={0.2} transparent opacity={0.8} />
          </mesh>
          <mesh position={[0, 0.5, 0]}>
            <cylinderGeometry args={[0.3, 0.3, 0.15, 32]} />
            <meshStandardMaterial color="#10b981" metalness={0.7} roughness={0.2} emissive="#10b981" emissiveIntensity={0.2} transparent opacity={0.9} />
          </mesh>
        </group>
      </Float>

      {/* Connection lines simulating architecture */}
      <group position={[0, 0, 0]}>
         <mesh position={[1.5, 1.2, 0.5]} rotation={[0, 0, Math.PI / 4]}>
            <cylinderGeometry args={[0.01, 0.01, 1.5, 8]} />
            <meshBasicMaterial color="#38bdf8" transparent opacity={0.3} />
         </mesh>
         <mesh position={[-1.2, 1.5, 0]} rotation={[0, 0, -Math.PI / 3]}>
            <cylinderGeometry args={[0.01, 0.01, 1.8, 8]} />
            <meshBasicMaterial color="#38bdf8" transparent opacity={0.3} />
         </mesh>
      </group>
    </group>
  );
}

function ComplexAISphere() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float floatIntensity={2} speed={2} rotationIntensity={1.5}>
      <mesh ref={sphereRef} position={[-2, 1, 0]}>
        <icosahedronGeometry args={[0.5, 2]} />
        <meshStandardMaterial color="#38bdf8" wireframe opacity={0.3} transparent />
      </mesh>
      <Sphere args={[0.3, 32, 32]} position={[-2, 1, 0]}>
        <MeshDistortMaterial color="#0f172a" emissive="#38bdf8" emissiveIntensity={0.5} distort={0.4} speed={2} />
      </Sphere>
    </Float>
  );
}


export function HeroScene() {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 2, 7.5], fov: 40 }}>
      {/* Fog for depth */}
      <fog attach="fog" args={['#020617', 5, 20]} />
      <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1} castShadow color="#ffffff" />
      <pointLight position={[-10, 5, -10]} intensity={0.8} color="#38bdf8" />
      <pointLight position={[10, 5, 10]} intensity={0.8} color="#818cf8" />
      
      <PresentationControls
        global
        rotation={[0.1, -0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <DeveloperWorkspace />
      </PresentationControls>

      <Environment preset="city" />
    </Canvas>
  );
}
