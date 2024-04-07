import React, { useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber"
import { Hook } from "./components/model/Hook"
import { MotherBoard } from './components/model/MotherBoard';


function RotatingHookParent({ children }) {
  const groupRef = useRef()
  
  useFrame(({ clock }) => {
    groupRef.current.rotation.y = clock.elapsedTime * 0.2
  })

  return <group rotation-x={1} ref={groupRef}>{children}</group>
}

export default function BackgroundCanvas() {

  return (
    <div className="canvas">
      <Canvas camera={{ position: [0, 0, 3.4], fov: 75 }}>
        <directionalLight intensity={2} />
        <RotatingHookParent>
          {/* <Hook /> */}
          <MotherBoard />
        </RotatingHookParent>
      </Canvas>
    </div>
  )
}