import React from 'react';
import { Plus } from 'lucide-react';

export default function ProductCard({ product, onAdd, onRemove, cartQuantity = 0, inStock = true, onClick }) {
    // No local state needed
    return (
        <div
            className="product-card group"
            style={{
                background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%)', // Dark luxury gradient
                backdropFilter: 'blur(10px)',
                borderRadius: '1.5rem',
                overflow: 'visible', // Allow 3D pop out
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                flexDirection: 'column',
                opacity: inStock ? 1 : 0.7,
                filter: inStock ? 'none' : 'grayscale(100%)',
                pointerEvents: inStock ? 'auto' : 'none',
                cursor: 'pointer',
                position: 'relative',
                transformStyle: 'preserve-3d' // Enable 3D
            }}
            onClick={onClick}
            onMouseEnter={e => {
                if (inStock) {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.5)';
                    e.currentTarget.style.borderColor = 'rgba(74, 222, 128, 0.4)';
                    // 3D Pop Image
                    const img = e.currentTarget.querySelector('.product-img');
                    if (img) img.style.transform = 'scale(1.1) translateZ(30px) translateY(-10px)';
                }
            }}
            onMouseLeave={e => {
                if (inStock) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    const img = e.currentTarget.querySelector('.product-img');
                    if (img) img.style.transform = 'scale(1) translateZ(0) translateY(0)';
                }
            }}
        >
            <div style={{
                height: '240px',
                overflow: 'hidden',
                position: 'relative',
                borderRadius: '1.5rem 1.5rem 0 0',
                transformStyle: 'preserve-3d'
            }}>
                {product.image.endsWith('.mp4') ? (
                    <video
                        className="product-img"
                        src={product.image}
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{
                            width: '100%', height: '100%', objectFit: 'cover',
                            transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                            transformOrigin: 'bottom center',
                            filter:
                                product.id === 'purple-cauliflower' ? 'none' :
                                    product.id === 'purple-basil' ? 'hue-rotate(260deg) saturate(1.5) brightness(0.8)' :
                                        product.id === 'red-grape-tomato' ? 'saturate(2) contrast(1.2)' :
                                            product.id === 'rosemary-herb' ? 'hue-rotate(-20deg) saturate(1.2) contrast(1.1)' :
                                                product.id === 'thyme-herb' ? 'hue-rotate(20deg) brightness(1.1) saturate(0.7)' :
                                                    product.id === 'mint-herb' ? 'hue-rotate(15deg) contrast(1.2) brightness(1.1)' :
                                                        product.id === 'locarno-lettuce' ? 'brightness(1.2) saturate(0.8) sepia(0.2)' :
                                                            product.id === 'red-lollo-rosso' ? 'hue-rotate(290deg) saturate(1.3) contrast(1.1)' :
                                                                product.id === 'sage-herb' ? 'grayscale(0.4) brightness(1.1)' :
                                                                    product.id === 'parsley-herb' ? 'saturate(1.4) brightness(0.9) hue-rotate(5deg)' :
                                                                        product.id === 'celery-stalks' ? 'brightness(1.15) saturate(1.1)' :
                                                                            'none'
                        }}
                    />
                ) : (
                    <img
                        className="product-img"
                        src={product.image}
                        alt={product.title}
                        style={{
                            width: '100%', height: '100%', objectFit: 'cover',
                            transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)', // Bouncy transition
                            transformOrigin: 'bottom center',
                            filter:
                                product.id === 'purple-cauliflower' ? 'none' :
                                    product.id === 'purple-basil' ? 'hue-rotate(260deg) saturate(1.5) brightness(0.8)' :
                                        product.id === 'red-grape-tomato' ? 'saturate(2) contrast(1.2)' :
                                            product.id === 'rosemary-herb' ? 'hue-rotate(-20deg) saturate(1.2) contrast(1.1)' :
                                                product.id === 'thyme-herb' ? 'hue-rotate(20deg) brightness(1.1) saturate(0.7)' :
                                                    product.id === 'mint-herb' ? 'hue-rotate(15deg) contrast(1.2) brightness(1.1)' :
                                                        product.id === 'locarno-lettuce' ? 'brightness(1.2) saturate(0.8) sepia(0.2)' :
                                                            product.id === 'red-lollo-rosso' ? 'hue-rotate(290deg) saturate(1.3) contrast(1.1)' :
                                                                product.id === 'sage-herb' ? 'grayscale(0.4) brightness(1.1)' :
                                                                    product.id === 'parsley-herb' ? 'saturate(1.4) brightness(0.9) hue-rotate(5deg)' :
                                                                        product.id === 'celery-stalks' ? 'brightness(1.15) saturate(1.1)' :
                                                                            'none'
                        }}
                    />
                )}
                {!inStock && (
                    <div style={{
                        position: 'absolute', inset: 0,
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        zIndex: 10
                    }}>
                        <span style={{
                            backgroundColor: '#ef4444', color: 'white',
                            padding: '0.5rem 1.5rem', borderRadius: '999px',
                            fontWeight: '800', letterSpacing: '0.1em',
                            fontSize: '1rem', border: '2px solid white'
                        }}>
                            SOLD OUT
                        </span>
                    </div>
                )}
                {product.tags && product.tags[0] && (
                    <span style={{
                        position: 'absolute',
                        top: '1rem',
                        left: '1rem',
                        backgroundColor: 'rgba(15, 23, 42, 0.9)',
                        padding: '0.35rem 0.85rem',
                        borderRadius: '999px',
                        fontSize: '0.7rem',
                        fontWeight: '600',
                        color: '#4ade80',
                        letterSpacing: '0.05em',
                        border: '1px solid rgba(74, 222, 128, 0.2)',
                        zIndex: 20,
                        transform: 'translateZ(20px)'
                    }}>
                        {product.tags[0].toUpperCase()}
                    </span>
                )}
                <span style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    backgroundColor: '#ef4444',
                    color: 'white',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '999px',
                    fontSize: '0.7rem',
                    fontWeight: '600',
                    letterSpacing: '0.05em',
                    boxShadow: '0 4px 12px rgba(239, 68, 68, 0.4)',
                    zIndex: 20,
                    transform: 'translateZ(20px)'
                }}>
                    SAVE 25%
                </span>
            </div>

            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                        <h3 className="chromatic-hover" style={{ fontSize: '1.4rem', fontWeight: '500', fontFamily: 'var(--font-serif)', lineHeight: '1.3', color: '#f8fafc', letterSpacing: '0.01em', margin: 0 }}>
                            {product.title}
                        </h3>
                        {product.weight && (
                            <span style={{
                                fontSize: '0.8rem',
                                fontWeight: '600',
                                color: '#94a3b8',
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                padding: '0.2rem 0.5rem',
                                borderRadius: '4px',
                                marginLeft: '0.5rem'
                            }}>
                                {product.weight}
                            </span>
                        )}
                    </div>
                    {product.scientific && (
                        <div style={{
                            fontSize: '0.8rem',
                            color: '#fbbf24',
                            fontFamily: 'var(--font-serif)',
                            fontStyle: 'italic',
                            marginBottom: '1rem',
                            opacity: 0.9
                        }}>
                            {product.scientific}
                        </div>
                    )}

                    {/* Nutritional Telemetry - Dark Mode */}
                    <div style={{
                        marginBottom: '1.5rem',
                        background: 'rgba(0, 0, 0, 0.3)',
                        padding: '1rem',
                        borderRadius: '0.75rem',
                        border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                            <span style={{ fontSize: '0.65rem', fontWeight: '700', color: '#4ade80', letterSpacing: '0.1em' }}>ENERGY INDEX</span>
                            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#e2e8f0' }}>{product.nutrients?.calories || 0} KCAL</span>
                        </div>
                        <div style={{ height: '4px', width: '100%', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                            <div style={{
                                height: '100%',
                                width: `${Math.min((product.nutrients?.calories || 0) * 2, 100)}%`,
                                background: 'linear-gradient(90deg, #4ade80, #22c55e)',
                                boxShadow: '0 0 10px rgba(34, 197, 94, 0.4)'
                            }} />
                        </div>
                    </div>

                    {/* Spectrographic Mineral Table - Dark Mode */}
                    <table style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        marginBottom: '1.5rem',
                        fontSize: '0.75rem'
                    }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                <th style={{ textAlign: 'left', padding: '0.5rem 0', color: '#94a3b8', fontWeight: '700', letterSpacing: '0.05em' }}>MINERAL</th>
                                <th style={{ textAlign: 'right', padding: '0.5rem 0', color: '#94a3b8', fontWeight: '700', letterSpacing: '0.05em' }}>QUANTITY</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(product.nutrients?.minerals || []).slice(0, 4).map((min, idx) => (
                                <tr key={idx} style={{ borderBottom: idx === 3 ? 'none' : '1px solid rgba(255,255,255,0.05)' }}>
                                    <td style={{ padding: '0.6rem 0', color: '#cbd5e1', fontWeight: '500' }}>{min.name || min}</td>
                                    <td style={{ padding: '0.6rem 0', textAlign: 'right', color: '#4ade80', fontWeight: '700' }}>
                                        {min.value ? `${min.value}${min.unit}` : 'DETECTED'}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '1.5rem', lineHeight: '1.6', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {product.description}
                    </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1' }}>
                        <span style={{ fontSize: '0.85rem', textDecoration: 'line-through', color: '#64748b', marginBottom: '4px' }}>
                            ₹{Math.round(product.price * 1.35)}
                        </span>
                        <span style={{ fontSize: '1.4rem', fontWeight: '700', color: '#f8fafc', fontFamily: 'var(--font-serif)' }}>
                            ₹{product.price}
                        </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1, justifyContent: 'flex-end' }}>
                        {cartQuantity > 0 ? (
                            <div style={{
                                display: 'flex', alignItems: 'center',
                                background: '#4ade80',
                                borderRadius: '999px',
                                padding: '0.2rem',
                                border: '1px solid rgba(74, 222, 128, 0.4)',
                                boxShadow: '0 4px 12px rgba(74, 222, 128, 0.3)'
                            }}>
                                <button
                                    onClick={(e) => { e.stopPropagation(); onRemove(product.id); }}
                                    style={{
                                        width: '32px', height: '32px', borderRadius: '50%',
                                        border: 'none', background: 'rgba(0,0,0,0.1)', color: '#022c22', cursor: 'pointer',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}
                                >
                                    <span style={{ fontSize: '1.2rem', fontWeight: '700', lineHeight: 1 }}>-</span>
                                </button>
                                <span style={{ width: '32px', textAlign: 'center', color: '#022c22', fontWeight: '800', fontSize: '1rem' }}>{cartQuantity}</span>
                                <button
                                    onClick={(e) => { e.stopPropagation(); onAdd(product); }}
                                    style={{
                                        width: '32px', height: '32px', borderRadius: '50%',
                                        border: 'none', background: 'rgba(0,0,0,0.1)', color: '#022c22', cursor: 'pointer',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}
                                >
                                    <Plus size={16} strokeWidth={4} />
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (inStock) onAdd(product);
                                }}
                                className="btn btn-primary"
                                style={{
                                    padding: '0.6rem 1.5rem',
                                    borderRadius: '999px',
                                    fontSize: '0.9rem',
                                    backgroundColor: inStock ? '#4ade80' : '#334155',
                                    color: inStock ? '#022c22' : '#94a3b8',
                                    fontWeight: '700',
                                    border: 'none',
                                    cursor: inStock ? 'pointer' : 'not-allowed',
                                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                                    transition: 'all 0.2s',
                                    boxShadow: inStock ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none'
                                }}
                                disabled={!inStock}
                            >
                                {inStock ? (
                                    <>
                                        <Plus size={18} strokeWidth={3} /> ADD
                                    </>
                                ) : (
                                    "OUT"
                                )}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
