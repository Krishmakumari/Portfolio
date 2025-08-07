<<<<<<< HEAD
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import React from 'react'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const Target = (props) => {
  const targetRef=useRef();
  const {scene}=useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')
  useGSAP(()=>{
    gsap.to(targetRef.current.position,{
      y:targetRef.current.position.y+0.5,
      duration:1.5,
      repeat:-1,
      yoyo:true
    })
  });

  return (
    <mesh {...props} ref={targetRef}>
      <primitive object={scene}/>
    </mesh>
  )
}

=======
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import React from 'react'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const Target = (props) => {
  const targetRef=useRef();
  const {scene}=useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')
  useGSAP(()=>{
    gsap.to(targetRef.current.position,{
      y:targetRef.current.position.y+0.5,
      duration:1.5,
      repeat:-1,
      yoyo:true
    })
  });

  return (
    <mesh {...props} ref={targetRef}>
      <primitive object={scene}/>
    </mesh>
  )
}

>>>>>>> 4b6c810f5a26ceb6dffa13bf8999e9d3226a77d2
export default Target;