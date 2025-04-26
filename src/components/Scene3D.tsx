
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Ring, OrbitControls } from '@react-three/drei';
import { Group } from 'three';

function FloatingShapes() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Purple sphere */}
      <Sphere position={[-2, 0, 0]} args={[0.5, 32, 32]}>
        <meshStandardMaterial color="#9b87f5" transparent opacity={0.7} />
      </Sphere>

      {/* Light blue box */}
      <Box position={[2, 0, 0]} args={[0.8, 0.8, 0.8]} rotation={[0.5, 0.5, 0]}>
        <meshStandardMaterial color="#D3E4FD" transparent opacity={0.6} />
      </Box>

      {/* Green ring */}
      <Ring position={[0, 1.5, 0]} args={[0.5, 0.7, 32]}>
        <meshStandardMaterial color="#F2FCE2" transparent opacity={0.5} />
      </Ring>
    </group>
  );
}

const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <FloatingShapes />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
