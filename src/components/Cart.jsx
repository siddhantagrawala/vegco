import React from 'react';
import { X, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';

export default function Cart({ isOpen, onClose, cartItems, onRemove, onAdd, onRemoveOne, onClear, onCheckout, onExplore }) {
    // Safety filter
    const validItems = cartItems.filter(item => item && item.price);
    const total = validItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <>
            {/* Overlay */}
            <div
                style={{
                    position: 'fixed',
                    inset: 0,
                    backgroundColor: 'rgba(28, 25, 23, 0.2)',
                    backdropFilter: 'blur(4px)',
                    opacity: isOpen ? 1 : 0,
                    pointerEvents: isOpen ? 'auto' : 'none',
                    transition: 'all 0.5s cubic-bezier(0.32, 0.72, 0, 1)',
                    zIndex: 99
                }}
                onClick={onClose}
            />

            {/* Drawer */}
            <div style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '100%',
                maxWidth: '450px',
                backgroundColor: 'var(--color-bg-light)',
                backgroundImage: 'url("/luxury_global_texture_v2.png")',
                boxShadow: '-10px 0 40px rgba(0,0,0,0.05)',
                transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
                transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                zIndex: 100,
                display: 'flex',
                flexDirection: 'column',
                borderLeft: '1px solid rgba(28, 25, 23, 0.05)'
            }}>
                <div style={{
                    padding: '2rem',
                    borderBottom: '1px solid rgba(28, 25, 23, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'rgba(255,255,255,0.5)',
                    backdropFilter: 'blur(10px)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <ShoppingBag size={20} color="var(--color-primary)" />
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '400', fontFamily: 'var(--font-serif)', color: 'var(--color-text-main)' }}>Your Selection ({cartItems.length})</h2>
                    </div>
                    <button
                        onClick={onClose}
                        style={{
                            background: 'none',
                            border: '1px solid rgba(28, 25, 23, 0.1)',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: 'var(--color-text-main)',
                            transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-text-main)'; e.currentTarget.style.color = '#fff'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--color-text-main)'; }}
                    >
                        <X size={20} />
                    </button>
                </div>

                <div style={{ flex: 1, overflowY: 'auto', padding: '2rem' }}>
                    {validItems.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--color-text-light)' }}>
                            <ShoppingBag size={48} style={{ opacity: 0.2, marginBottom: '1rem' }} />
                            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginBottom: '1.5rem' }}>Your harvest basket is empty.</p>
                            <button
                                onClick={onExplore}
                                className="btn btn-primary"
                            >
                                EXPLORE PRODUCE
                            </button>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {/* Aggregation Logic */}
                            {Object.values(validItems.reduce((acc, item) => {
                                if (!acc[item.id]) {
                                    acc[item.id] = { ...item, quantity: 0 };
                                }
                                acc[item.id].quantity += 1;
                                return acc;
                            }, {})).map((item) => (
                                <div key={item.id} style={{
                                    display: 'flex',
                                    gap: '1.5rem',
                                    padding: '1rem',
                                    backgroundColor: '#fff',
                                    borderRadius: '1rem',
                                    border: '1px solid rgba(28, 25, 23, 0.05)',
                                    boxShadow: 'var(--shadow-sm)',
                                    alignItems: 'center'
                                }}>
                                    {item.image.endsWith('.mp4') ? (
                                        <video
                                            src={item.image}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '0.75rem' }}
                                        />
                                    ) : (
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '0.75rem' }}
                                        />
                                    )}
                                    <div style={{ flex: 1 }}>
                                        <h4 style={{ fontSize: '1rem', fontWeight: '400', fontFamily: 'var(--font-serif)', marginBottom: '0.25rem', color: 'var(--color-text-main)' }}>{item.title}</h4>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Unit</span>
                                            <span style={{ fontWeight: '700', color: 'var(--color-primary-dark)', fontSize: '1.1rem' }}>₹{item.price}</span>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        {/* Quantity Controls */}
                                        <div style={{ display: 'flex', alignItems: 'center', background: '#f5f5f4', borderRadius: '0.75rem', padding: '0.25rem' }}>
                                            <button
                                                onClick={() => onRemoveOne(item.id)}
                                                style={{ width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', background: 'transparent', cursor: 'pointer', color: '#1c1917', fontWeight: 'bold' }}
                                            >-</button>
                                            <span style={{ width: '20px', textAlign: 'center', fontSize: '0.9rem', fontWeight: '600' }}>{item.quantity}</span>
                                            <button
                                                onClick={() => onAdd(item)}
                                                style={{ width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--color-primary-dark)', fontWeight: 'bold' }}
                                            >+</button>
                                        </div>

                                        <button
                                            onClick={() => onClear(item.id)}
                                            style={{
                                                background: 'rgba(239, 68, 68, 0.05)',
                                                border: 'none',
                                                color: '#ef4444',
                                                padding: '0.75rem',
                                                borderRadius: '0.75rem',
                                                cursor: 'pointer',
                                                transition: 'background 0.2s'
                                            }}
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div style={{ padding: '2rem', borderTop: '1px solid rgba(28, 25, 23, 0.05)', backgroundColor: 'var(--color-bg-light)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: 'var(--color-text-light)', fontSize: '0.9rem' }}>
                        <span>Subtotal</span>
                        <span>₹{total}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', color: 'var(--color-text-light)', fontSize: '0.9rem' }}>
                        <span>Taxes (Included)</span>
                        <span>₹{Math.round(total * 0.18)}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', fontWeight: '400', fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-text-main)', paddingTop: '1rem', borderTop: '1px dotted rgba(0,0,0,0.1)' }}>
                        <span>Total Estimate</span>
                        <span style={{ color: 'var(--color-primary-dark)' }}>₹{total}</span>
                    </div>
                    <button onClick={onCheckout} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem', fontSize: '0.9rem', letterSpacing: '0.1em' }}>
                        PROCEED TO CHECKOUT <ArrowRight size={18} />
                    </button>
                    <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.65rem', color: 'var(--color-text-light)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Secure Encrypted Transaction
                    </div>
                </div>
            </div>
        </>
    );
}
