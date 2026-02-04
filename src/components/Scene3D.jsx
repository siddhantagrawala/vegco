import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const FloatingCore = () => {
    const meshRef = useRef();

    // Subtle animation
    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.x = Math.sin(time * 0.2) * 0.2;
            meshRef.current.rotation.y = Math.cos(time * 0.3) * 0.2;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={meshRef}>
                <sphereGeometry args={[1, 64, 64]} />
                <MeshDistortMaterial
                    color="#059669"
                    speed={3}
                    distort={0.4}
                    radius={1}
                    metalness={0.8}
                    roughness={0.1}
                    emissive="#10b981"
                    emissiveIntensity={0.2}
                    transparent
                    opacity={0.9}
                />
            </mesh>
        </Float>
    );
};

const Lights = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#38bdf8" />
        </>
    );
};

export default function Scene3D() {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            pointerEvents: 'none',
            opacity: 0.8
        }}>
            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={40} />
                <Lights />
                <FloatingCore />
                <ContactShadows
                    position={[0, -1.5, 0]}
                    opacity={0.4}
                    scale={10}
                    blur={2}
                    far={4}
                />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
