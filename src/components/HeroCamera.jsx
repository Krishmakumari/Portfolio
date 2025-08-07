<<<<<<< HEAD
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

const HeroCamera = ({children,isMobile}) => {
    const groupRef=useRef();
    useFrame((state,delta)=>{
        easing.damp3(state.camera.position,[0,0,20],0.25,delta);
    
    if(!isMobile){
        easing.dampE(groupRef.current.rotation,[-state.pointer.y/3 ,
            -state.pointer.x/5,0],0.25,delta);

    }
    })
  return (
    <group ref={groupRef} scale={isMobile?1: 1.1}>{children}</group>
  )
}

=======
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

const HeroCamera = ({children,isMobile}) => {
    const groupRef=useRef();
    useFrame((state,delta)=>{
        easing.damp3(state.camera.position,[0,0,20],0.25,delta);
    
    if(!isMobile){
        easing.dampE(groupRef.current.rotation,[-state.pointer.y/3 ,
            -state.pointer.x/5,0],0.25,delta);

    }
    })
  return (
    <group ref={groupRef} scale={isMobile?1: 1.1}>{children}</group>
  )
}

>>>>>>> 4b6c810f5a26ceb6dffa13bf8999e9d3226a77d2
export default HeroCamera;