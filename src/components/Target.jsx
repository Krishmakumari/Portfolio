import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import React from 'react'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Target = (props) => {
  const targetRef = useRef();
  
  try {
    const { scene } = useGLTF('/models/cube.glb');
    
    useGSAP(() => {
      if (!targetRef.current) return;
      
      const tl = gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
      
      return () => tl.kill();
    });

    return (
      <mesh {...props} ref={targetRef}>
        <primitive object={scene} />
      </mesh>
    );
  } catch (error) {
    console.error('Error loading Target model:', error);
    // Fallback to a simple box geometry if model fails to load
    return (
      <mesh {...props} ref={targetRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#ff6b6b" />
      </mesh>
    );
  }
}

useGLTF.preload('/models/cube.glb');

export default Target;