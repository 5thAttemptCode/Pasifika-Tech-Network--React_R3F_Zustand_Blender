import React, { useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber"
import { Hook } from "./components/model/Hook"


function RotatingHookParent({ children }) {
  const groupRef = useRef()
  
  useFrame(({ clock }) => {
    groupRef.current.rotation.y = clock.elapsedTime * 0.2
  })

  return <group ref={groupRef}>{children}</group>
}

export default function BackgroundCanvas() {

  return (
    <div className="canvas">
      <Canvas camera={{ position: [0, 0, 3.4], fov: 55 }}>
        <RotatingHookParent>
          <Hook />
        </RotatingHookParent>
      </Canvas>
    </div>
  )
}