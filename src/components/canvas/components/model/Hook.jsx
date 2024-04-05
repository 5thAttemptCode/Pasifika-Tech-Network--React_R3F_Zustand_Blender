import React from 'react'
import { useGLTF } from '@react-three/drei'
import HolographicMaterial from '../material/Holographic'


export function Hook() {

  const { nodes, materials } = useGLTF('/hook.gltf')
  
  return (
    <group>
      <mesh geometry={nodes.path293.geometry} material={materials['SVGMat.001']} rotation={[Math.PI / 2, 0, 0]} scale={22.378}>
        <HolographicMaterial hologramOpacity={0.75} />
      </mesh>
      <mesh geometry={nodes.path344.geometry} material={materials['SVGMat.002']} />
      <mesh geometry={nodes.path900.geometry} material={materials['SVGMat.003']} />
      <mesh geometry={nodes.path902.geometry} material={materials['SVGMat.004']} />
      <mesh geometry={nodes.path904.geometry} material={materials['SVGMat.005']} />
      <mesh geometry={nodes.path906.geometry} material={materials['SVGMat.006']} />
      <mesh geometry={nodes.path908.geometry} material={materials['SVGMat.007']} />
    </group>
  )
}

useGLTF.preload('/hook.gltf')
