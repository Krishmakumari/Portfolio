<<<<<<< HEAD
import React,{useRef} from 'react'
import { Float ,useGLTF } from '@react-three/drei'
const ReactLogo = (props) => {
    const {nodes,materials}=useGLTF('/models/react.glb')
  return (
    <Float floatIntensity={1}>
        <group position={[8,8,0]} scale={0.35} {...props} dispose={null}>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes['React-Logo_Material002_0'].geometry}
            material={materials['Material.002']}
            position={[0.5,0.5,0.5]}
            rotation={[0,0,-Math.PI/2]}
            scale={[0.5,0.5,0.5]}
            />
        </group>
        </Float>
  )
}

=======
import React,{useRef} from 'react'
import { Float ,useGLTF } from '@react-three/drei'
const ReactLogo = (props) => {
    const {nodes,materials}=useGLTF('/models/react.glb')
  return (
    <Float floatIntensity={1}>
        <group position={[8,8,0]} scale={0.35} {...props} dispose={null}>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes['React-Logo_Material002_0'].geometry}
            material={materials['Material.002']}
            position={[0.5,0.5,0.5]}
            rotation={[0,0,-Math.PI/2]}
            scale={[0.5,0.5,0.5]}
            />
        </group>
        </Float>
  )
}

>>>>>>> 4b6c810f5a26ceb6dffa13bf8999e9d3226a77d2
export default ReactLogo