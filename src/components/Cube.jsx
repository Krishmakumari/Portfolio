import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState, useMemo } from 'react';
import { Float, useGLTF, useTexture } from '@react-three/drei';

const Cube = ({ ...props }) => {
  const { nodes } = useGLTF('models/cube.glb');

  const texture = useTexture('textures/cube.png');
  const memoizedMaterial = useMemo(() => 
    <meshMatcapMaterial matcap={texture} toneMapped={false} />, 
    [texture]
  );

  const cubeRef = useRef();
  const [hovered, setHovered] = useState(false);

  useGSAP(() => {
    if (!cubeRef.current) return;
    
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5,
    });
    
    tl.to(cubeRef.current.rotation, {
      y: hovered ? '+=2' : `+=${Math.PI * 2}`,
      x: hovered ? '+=2' : `-=${Math.PI * 2}`,
      duration: 2.5,
      ease: "power2.inOut"
    });
    
    return () => tl.kill();
  }, [hovered]);

  return (
    <Float floatIntensity={2}>
      <group position={[9, -4, 0]} rotation={[2.6, 0.8, -1.8]} scale={0.74} dispose={null} {...props}>
        <mesh
          ref={cubeRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}>
          {memoizedMaterial}
        </mesh>
      </group>
    </Float>
  );
};

useGLTF.preload('models/cube.glb');

export default Cube;