import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Text, PerspectiveCamera, Environment, Html } from '@react-three/drei';
import * as THREE from 'three';

// Featured products for the 3D carousel
const FEATURED_PRODUCTS = [
    {
        id: 'baby-spinach',
        title: 'Baby Spinach',
        subtitle: 'Zero Grit',
        price: '₹60',
        weight: '125g',
        color: '#059669',
        highlight: '558mg Potassium',
        emoji: '🥬'
    },
    {
        id: 'romaine-lettuce',
        title: 'Romaine Lettuce',
        subtitle: 'Caesar Essential',
        price: '₹149',
        weight: '200g',
        color: '#10b981',
        highlight: '247mg Potassium',
        emoji: '🥗'
    },
    {
        id: 'tuscan-kale',
        title: 'Tuscan Kale',
        subtitle: 'Superfood King',
        price: '₹199',
        weight: '200g',
        color: '#047857',
        highlight: '254mg Calcium',
        emoji: '🥦'
    },
    {
        id: 'cherry-tomato-red',
        title: 'Cherry Tomato',
        subtitle: 'Sweet as Candy',
        price: '₹119',
        weight: '200g',
        color: '#dc2626',
        highlight: '237mg Potassium',
        emoji: '🍅'
    },
    {
        id: 'italian-basil',
        title: 'Italian Basil',
        subtitle: 'Aroma of Italy',
        price: '₹99',
        weight: '50g',
        color: '#16a34a',
        highlight: '177mg Calcium',
        emoji: '🌿'
    }
];

// Individual floating product card
const ProductCard3D = ({ product, index, total, onHover }) => {
    const meshRef = useRef();
    const [hovered, setHovered] = useState(false);

    const angle = (index / total) * Math.PI * 2;
    const radius = 2.5;

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        // Orbit around center
        const currentAngle = angle + time * 0.15;
        if (meshRef.current) {
            meshRef.current.position.x = Math.cos(currentAngle) * radius;
            meshRef.current.position.z = Math.sin(currentAngle) * radius;
            meshRef.current.position.y = Math.sin(time * 0.5 + index) * 0.2;
            // Always face camera
            meshRef.current.rotation.y = -currentAngle + Math.PI / 2;
        }
    });

    return (
        <group ref={meshRef}>
            <Float speed={2} rotationIntensity={0.1} floatIntensity={0.3}>
                <mesh
                    onPointerOver={() => { setHovered(true); onHover(product); }}
                    onPointerOut={() => { setHovered(false); onHover(null); }}
                >
                    {/* Card Background */}
                    <planeGeometry args={[1.4, 1.8]} />
                    <meshStandardMaterial
                        color={hovered ? '#ffffff' : '#fafafa'}
                        transparent
                        opacity={hovered ? 0.98 : 0.9}
                        side={THREE.DoubleSide}
                    />
                </mesh>

                {/* Product Emoji/Icon */}
                <Html
                    center
                    distanceFactor={5}
                    position={[0, 0.4, 0.01]}
                    style={{
                        fontSize: hovered ? '3rem' : '2.5rem',
                        transition: 'all 0.3s ease',
                        pointerEvents: 'none',
                        userSelect: 'none'
                    }}
                >
                    {product.emoji}
                </Html>

                {/* Product Title */}
                <Html
                    center
                    distanceFactor={5}
                    position={[0, -0.15, 0.01]}
                    style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.65rem',
                        fontWeight: '700',
                        color: '#1c1917',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        pointerEvents: 'none',
                        whiteSpace: 'nowrap'
                    }}
                >
                    {product.title}
                </Html>

                {/* Subtitle */}
                <Html
                    center
                    distanceFactor={5}
                    position={[0, -0.35, 0.01]}
                    style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.45rem',
                        fontWeight: '500',
                        color: '#78716c',
                        pointerEvents: 'none',
                        whiteSpace: 'nowrap'
                    }}
                >
                    {product.subtitle}
                </Html>

                {/* Price Badge */}
                <Html
                    center
                    distanceFactor={5}
                    position={[0, -0.6, 0.01]}
                    style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.55rem',
                        fontWeight: '800',
                        color: product.color,
                        background: `${product.color}15`,
                        padding: '0.15rem 0.5rem',
                        borderRadius: '999px',
                        pointerEvents: 'none'
                    }}
                >
                    {product.price} / {product.weight}
                </Html>

                {/* Nutrient Highlight (only visible on hover) */}
                {hovered && (
                    <Html
                        center
                        distanceFactor={5}
                        position={[0, -0.85, 0.01]}
                        style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '0.4rem',
                            fontWeight: '600',
                            color: '#16a34a',
                            background: 'rgba(22, 163, 74, 0.1)',
                            padding: '0.1rem 0.4rem',
                            borderRadius: '4px',
                            pointerEvents: 'none',
                            animation: 'fadeIn 0.3s ease'
                        }}
                    >
                        ⚡ {product.highlight}
                    </Html>
                )}
            </Float>
        </group>
    );
};

// Central basket/logo element
const CentralBasket = () => {
    const meshRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.y = time * 0.2;
        }
    });

    return (
        <group ref={meshRef}>
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                <Html
                    center
                    distanceFactor={4}
                    style={{
                        fontSize: '4rem',
                        pointerEvents: 'none',
                        userSelect: 'none',
                        filter: 'drop-shadow(0 4px 20px rgba(5, 150, 105, 0.3))'
                    }}
                >
                    🧺
                </Html>
            </Float>
        </group>
    );
};

const Lights = () => {
    return (
        <>
            <ambientLight intensity={0.7} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} />
            <pointLight position={[-10, -10, -10]} intensity={0.8} color="#38bdf8" />
            <pointLight position={[5, 5, 5]} intensity={0.5} color="#fcd34d" />
        </>
    );
};

// Info panel overlay
const InfoPanel = ({ product }) => {
    if (!product) return null;

    return (
        <div style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(20px)',
            padding: '1rem 2rem',
            borderRadius: '1rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
            border: '1px solid rgba(28, 25, 23, 0.05)',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            zIndex: 100,
            animation: 'slideUp 0.3s ease'
        }}>
            <span style={{ fontSize: '2.5rem' }}>{product.emoji}</span>
            <div>
                <div style={{
                    fontSize: '1rem',
                    fontWeight: '700',
                    color: '#1c1917',
                    fontFamily: 'Inter, sans-serif'
                }}>
                    {product.title}
                </div>
                <div style={{
                    fontSize: '0.75rem',
                    color: '#78716c',
                    fontFamily: 'Inter, sans-serif'
                }}>
                    {product.subtitle} • {product.weight}
                </div>
            </div>
            <div style={{
                background: `${product.color}15`,
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                fontWeight: '800',
                color: product.color,
                fontFamily: 'Inter, sans-serif'
            }}>
                {product.price}
            </div>
            <div style={{
                fontSize: '0.7rem',
                color: '#16a34a',
                fontWeight: '600',
                fontFamily: 'Inter, sans-serif'
            }}>
                ⚡ {product.highlight}
            </div>
        </div>
    );
};

export default function Scene3D() {
    const [hoveredProduct, setHoveredProduct] = useState(null);

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            opacity: 0.95
        }}>
            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0.5, 6]} fov={45} />
                <Lights />

                {/* Central Basket */}
                <CentralBasket />

                {/* Orbiting Product Cards */}
                {FEATURED_PRODUCTS.map((product, index) => (
                    <ProductCard3D
                        key={product.id}
                        product={product}
                        index={index}
                        total={FEATURED_PRODUCTS.length}
                        onHover={setHoveredProduct}
                    />
                ))}

                <Environment preset="apartment" />
            </Canvas>

            {/* Info Panel Overlay */}
            <InfoPanel product={hoveredProduct} />

            {/* Interaction Hint */}
            {!hoveredProduct && (
                <div style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(255,255,255,0.8)',
                    backdropFilter: 'blur(10px)',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: '#78716c',
                    fontFamily: 'Inter, sans-serif',
                    letterSpacing: '0.05em',
                    zIndex: 50
                }}>
                    ✨ Hover over products to explore
                </div>
            )}

            <style>{`
                @keyframes slideUp {
                    from { opacity: 0; transform: translateX(-50%) translateY(10px); }
                    to { opacity: 1; transform: translateX(-50%) translateY(0); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `}</style>
        </div>
    );
}
