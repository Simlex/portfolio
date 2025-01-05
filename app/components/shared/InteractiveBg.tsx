'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { Vector3, Mesh } from 'three'
import { Environment, Float } from '@react-three/drei'
import { AnimatedGeometryProps } from '@/app/types/three-types'

function AnimatedGeometry({ mouse }: AnimatedGeometryProps) {
  const meshRef = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)
  
  useFrame((state) => {
    if (!meshRef.current) return
    
    // Smooth follow mouse position
    meshRef.current.rotation.x = (mouse.current?.[1] ?? 0) * 0.1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    meshRef.current.rotation.y = (mouse.current?.[0] ?? 0) * 0.1 + Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    
    // Subtle floating animation
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
  })

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <meshStandardMaterial
          color={hovered ? '#64B5F6' : '#1E88E5'}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
    </Float>
  )
}

export default function InteractiveBackground() {
  const mouse = useRef<[number, number]>([0, 0])
  
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    // Convert mouse position to normalized device coordinates (-1 to +1)
    mouse.current = [
      (event.clientX / window.innerWidth) * 2 - 1,
      -(event.clientY / window.innerHeight) * 2 + 1
    ]
  }

  return (
    <div 
      className="fixed inset-0 z-10 opacity-5 pointer-events-none"
      onMouseMove={handleMouseMove}
    >
      <Canvas
        camera={{ position: new Vector3(0, 0, 5), fov: 45 }}
        style={{ background: '#0A192F' }}
      >
        <AnimatedGeometry mouse={mouse} />
        <Environment preset="night" />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
      </Canvas>
    </div>
  )
}

