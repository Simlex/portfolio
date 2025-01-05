'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useRef, useState, useEffect } from 'react'
import { Vector3, Mesh, Color, MeshStandardMaterial } from 'three'
import { Environment, Float, MeshWobbleMaterial, Text } from '@react-three/drei'

function AnimatedGeometry() {
    const meshRef = useRef<Mesh>(null)
    const materialRef = useRef<MeshStandardMaterial>(null)
    const [hovered, setHovered] = useState(false)
    const { mouse, viewport } = useThree()
    const color = new Color()

    useFrame((state) => {
        if (!meshRef.current || !materialRef.current) return

        // Convert mouse position to world space
        const x = (mouse.x * viewport.width) / 2
        const y = (mouse.y * viewport.height) / 2

        // Smooth follow mouse position
        meshRef.current.position.x += (x - meshRef.current.position.x) * 0.1
        meshRef.current.position.y += (y - meshRef.current.position.y) * 0.1

        // Rotate based on mouse position
        meshRef.current.rotation.x = y * 0.05
        meshRef.current.rotation.y = x * 0.05

        // Pulsating effect
        const scale = 5 + Math.sin(state.clock.elapsedTime * 2) * 0.1
        meshRef.current.scale.set(scale, scale, scale)

        // Color transition
        const hue = (state.clock.elapsedTime * 0.1) % 1
        color.setHSL(hue, 0.5, 0.5)
        materialRef.current.color = color
    })

    return (
        <group>
            <Float speed={5} rotationIntensity={2} floatIntensity={5}>
                <mesh
                    ref={meshRef}
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
                >
                    <octahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial
                        ref={materialRef}
                        color={hovered ? '#64B5F6' : '#1E88E5'}
                        roughness={0.3}
                        metalness={0.8}
                        wireframe={true}
                        wireframeLinewidth={3}
                    />
                </mesh>
            </Float>
            {/* <group position={[0, 0, -1]}>
        {[...Array(50)].map((_, i) => (
          <mesh key={i} position={[
            Math.random() * 10 - 5,
            Math.random() * 10 - 5,
            Math.random() * 10 - 5
          ]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
        ))}
      </group> */}
        </group>
    )
}

function GlowingDiamond() {
    const diamondRef = useRef<Mesh>(null)
    const glowRef = useRef<Mesh>(null)

    useFrame((state) => {
        if (diamondRef.current && glowRef.current) {
            // Rotate the diamond
            diamondRef.current.rotation.y += 0.005
            diamondRef.current.rotation.x += 0.0025

            // Pulsating effect
            const scale = 4 + Math.sin(state.clock.elapsedTime * 2) * 0.1
            diamondRef.current.scale.set(scale, scale, scale)

            // Glow effect
            const glowScale = 2.1 + Math.sin(state.clock.elapsedTime * 3) * 0.1
            glowRef.current.scale.set(glowScale, glowScale, glowScale)
        }
    })

    return (
        <group position={[0, -0, -2]}>
            <mesh ref={diamondRef}>
                <icosahedronGeometry args={[1, 0]} />
                <MeshWobbleMaterial
                    color="#00FFFF"
                    factor={0.1}
                    speed={1}
                    metalness={0.8}
                    roughness={0.2}
                    opacity={0.3}
                />
            </mesh>
            <mesh ref={glowRef}>
                <icosahedronGeometry args={[1.1, 0]} />
                <meshBasicMaterial color="#00FFFF" transparent opacity={0.3} />
            </mesh>
        </group>
    )
}


function FloatingText() {
    return (
        <Text
            position={[0, 0, -2]}
            fontSize={0.5}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
        >
            Similoluwa Afolabi
        </Text>
    )
}

export default function InteractiveBackground() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div className="fixed inset-0 z-10 opacity-50 pointer-events-none">
            <Canvas
                camera={{ position: new Vector3(0, 0, 5), fov: 80 }}
                style={{pointerEvents: 'none'}}
                // style={{ background: 'radial-gradient(circle, #0A192F 0%, #020C1B 100%)' }}
            >
                <AnimatedGeometry />
                <AnimatedGeometry />
                {/* <AnimatedGeometry /> */}
                {/* <FloatingText /> */}
                <Environment preset="night" />
                {/* <GlowingDiamond /> */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
            </Canvas>
        </div>
    )
}

