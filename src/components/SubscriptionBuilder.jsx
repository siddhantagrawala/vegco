import React, { useState } from 'react';
import { Box, Check, Plus, Minus, Calendar, Package, ArrowRight, ArrowLeft } from 'lucide-react';

export default function SubscriptionBuilder({ onBack, onAdd, catalog }) {
    const [step, setStep] = useState(1);
    const [config, setConfig] = useState({
        size: null, // 'small', 'medium', 'large'
        frequency: 'weekly',
        items: [],
    });

    const sizes = [
        { id: 'small', label: 'Personal Payload', capacity: 4, price: 699, desc: 'Perfect for individuals. 4 items / week.' },
        { id: 'medium', label: 'Family Module', capacity: 8, price: 1299, desc: 'For couples or small families. 8 items / week.' },
        { id: 'large', label: 'Estate Supply', capacity: 12, price: 1899, desc: 'Full kitchen coverage. 12 items / week.' }
    ];

    const handleItemToggle = (product) => {
        const currentCount = config.items.filter(i => i.id === product.id).length;
        const boxCapacity = sizes.find(s => s.id === config.size).capacity;
        const totalSelected = config.items.length;

        if (currentCount > 0) {
            // Remove one instance
            const index = config.items.findIndex(i => i.id === product.id);
            const newItems = [...config.items];
            newItems.splice(index, 1);
            setConfig({ ...config, items: newItems });
        } else {
            // Add if under capacity
            if (totalSelected < boxCapacity) {
                setConfig({ ...config, items: [...config.items, product] });
            }
        }
    };

    const handleItemAdd = (product) => {
        const boxCapacity = sizes.find(s => s.id === config.size).capacity;
        if (config.items.length < boxCapacity) {
            setConfig({ ...config, items: [...config.items, product] });
        }
    }

    const handleItemRemove = (product) => {
        const index = config.items.findIndex(i => i.id === product.id);
        if (index > -1) {
            const newItems = [...config.items];
            newItems.splice(index, 1);
            setConfig({ ...config, items: newItems });
        }
    }

    const addToCart = () => {
        const sizeDef = sizes.find(s => s.id === config.size);
        const subProduct = {
            id: `sub-${Date.now()}`,
            title: `${sizeDef.label} (${config.frequency})`,
            price: sizeDef.price,
            image: '/images/products/subscription_box.jpg', // Placeholder
            description: `Custom configuration: ${config.items.map(i => i.title).join(', ')}`,
            type: 'subscription',
            boxConfig: {
                sizeId: config.size,
                sizeLabel: sizeDef.label,
                frequency: config.frequency,
                items: config.items.map(i => ({ id: i.id, title: i.title, image: i.image }))
            }
        };
        onAdd(subProduct);
        onBack();
    };

    return (
        <div style={{
            minHeight: '100vh',
            /* Background handled by global App wrapper for consistent footer blending */
            backgroundColor: 'transparent',
            paddingTop: '100px',
            paddingBottom: '4rem'
        }}>
            {/* Removed Video Background for static image preference */}

            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>

                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem' }}>
                    <div>
                        <button onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', color: '#64748b', fontWeight: '600', marginBottom: '1rem' }}>
                            <ArrowLeft size={18} /> ABORT CONFIG
                        </button>
                        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', fontFamily: 'var(--font-serif)', color: 'var(--color-text-main)' }}>
                            Payload Configuration.
                        </h1>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <StepIndicator num={1} active={step >= 1} label="SIZE" />
                        <StepIndicator num={2} active={step >= 2} label="CONTENTS" />
                        <StepIndicator num={3} active={step >= 3} label="FREQUENCY" />
                    </div>
                </div>

                {/* STEP 1: SIZE */}
                {step === 1 && (
                    <div className="animate-fade-up">
                        <h2 style={{ marginBottom: '2rem', fontSize: '1.25rem' }}>Select Module Capacity</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                            {sizes.map(size => (
                                <div
                                    key={size.id}
                                    onClick={() => setConfig({ ...config, size: size.id })}
                                    style={{
                                        padding: '2rem',
                                        borderRadius: '1rem',
                                        border: config.size === size.id ? '2px solid var(--color-primary)' : '1px solid rgba(0,0,0,0.1)',
                                        backgroundColor: config.size === size.id ? '#f0fdf4' : 'white',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s',
                                        position: 'relative'
                                    }}
                                >
                                    {config.size === size.id && <div style={{ position: 'absolute', top: '1rem', right: '1rem', color: 'var(--color-primary)' }}><Check /></div>}
                                    <Package size={32} style={{ marginBottom: '1rem', color: config.size === size.id ? 'var(--color-primary)' : '#94a3b8' }} />
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>{size.label}</h3>
                                    <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>{size.desc}</p>
                                    <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-text-main)' }}>₹{size.price}<span style={{ fontSize: '0.9rem', fontWeight: '400', color: '#94a3b8' }}>/box</span></div>
                                </div>
                            ))}
                        </div>
                        <div style={{ marginTop: '3rem', textAlign: 'right' }}>
                            <button
                                disabled={!config.size}
                                onClick={() => setStep(2)}
                                className="btn btn-primary"
                                style={{ padding: '1rem 2rem', opacity: config.size ? 1 : 0.5 }}
                            >
                                PROCEED TO SELECTION <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                            </button>
                        </div>
                    </div>
                )}

                {/* STEP 2: CONTENTS */}
                {step === 2 && (
                    <div className="animate-fade-up">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', position: 'sticky', top: '90px', background: 'rgba(248, 250, 252, 0.9)', backdropFilter: 'blur(10px)', padding: '1rem 0', zIndex: 10 }}>
                            <h2 style={{ fontSize: '1.25rem', margin: 0 }}>Configure Payload</h2>
                            <div style={{ fontSize: '1.1rem', fontWeight: '600', color: config.items.length === sizes.find(s => s.id === config.size).capacity ? 'var(--color-primary)' : 'var(--color-text-main)' }}>
                                Capacity: {config.items.length} / {sizes.find(s => s.id === config.size).capacity} Items
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                            {catalog.filter(p => p.id !== 'home-garden-kit').map(product => {
                                const count = config.items.filter(i => i.id === product.id).length;
                                return (
                                    <div key={product.id} style={{
                                        background: 'white', padding: '1rem', borderRadius: '0.75rem',
                                        border: count > 0 ? '1px solid var(--color-primary)' : '1px solid rgba(0,0,0,0.05)',
                                        display: 'flex', gap: '1rem', alignItems: 'center'
                                    }}>
                                        <img src={product.image} alt="" style={{ width: '60px', height: '60px', borderRadius: '0.5rem', objectFit: 'cover' }} />
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontWeight: '600', fontSize: '0.95rem' }}>{product.title}</div>
                                            <div style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <span>{product.nutrients?.calories || 0} kcal</span>
                                                {product.weight && (
                                                    <span style={{
                                                        background: '#f1f5f9', padding: '1px 6px', borderRadius: '4px', fontSize: '0.75rem', color: '#64748b'
                                                    }}>
                                                        {product.weight}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            {count > 0 && (
                                                <>
                                                    <button onClick={() => handleItemRemove(product)} style={btnStyle}><Minus size={14} /></button>
                                                    <span style={{ fontWeight: '600', width: '20px', textAlign: 'center' }}>{count}</span>
                                                </>
                                            )}
                                            <button
                                                onClick={() => handleItemAdd(product)}
                                                style={{ ...btnStyle, background: 'var(--color-primary)', color: 'white', border: 'none' }}
                                                disabled={config.items.length >= sizes.find(s => s.id === config.size).capacity}
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'space-between' }}>
                            <button onClick={() => setStep(1)} className="btn btn-outline">BACK</button>
                            <button
                                disabled={config.items.length === 0}
                                onClick={() => setStep(3)}
                                className="btn btn-primary"
                                style={{ padding: '1rem 2rem' }}
                            >
                                CONFIRM PAYLOAD <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                            </button>
                        </div>
                    </div>
                )}

                {/* STEP 3: FREQUENCY */}
                {step === 3 && (
                    <div className="animate-fade-up">
                        <h2 style={{ marginBottom: '2rem', fontSize: '1.25rem' }}>Delivery Protocol</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                            {['weekly', 'bi-weekly', 'monthly'].map(freq => (
                                <div
                                    key={freq}
                                    onClick={() => setConfig({ ...config, frequency: freq })}
                                    style={{
                                        padding: '2rem',
                                        borderRadius: '1rem',
                                        border: config.frequency === freq ? '2px solid var(--color-primary)' : '1px solid rgba(0,0,0,0.1)',
                                        backgroundColor: config.frequency === freq ? '#f0fdf4' : 'white',
                                        cursor: 'pointer',
                                        textAlign: 'center'
                                    }}
                                >
                                    <Calendar size={32} style={{ marginBottom: '1rem', color: config.frequency === freq ? 'var(--color-primary)' : '#94a3b8' }} />
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', textTransform: 'capitalize' }}>{freq}</h3>
                                    <p style={{ color: '#64748b' }}>
                                        {freq === 'weekly' ? 'Billed every 7 days' :
                                            freq === 'bi-weekly' ? 'Billed every 14 days' :
                                                'Billed every 30 days'}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(0,0,0,0.1)' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Manifest Summary</h3>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                                <span>{sizes.find(s => s.id === config.size).label} ({config.frequency})</span>
                                <span style={{ fontWeight: '700' }}>₹{sizes.find(s => s.id === config.size).price}</span>
                            </div>
                            <div style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '2rem' }}>
                                Includes: {config.items.map(i => i.title).join(', ')}
                            </div>
                            <button onClick={addToCart} className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
                                INITIATE SUBSCRIPTION
                            </button>
                        </div>
                        <div style={{ marginTop: '2rem', textAlign: 'left' }}>
                            <button onClick={() => setStep(2)} className="btn btn-outline">BACK</button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}

const btnStyle = {
    width: '28px', height: '28px', borderRadius: '50%', border: '1px solid #e2e8f0', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
}

function StepIndicator({ num, active, label }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: active ? 1 : 0.4 }}>
            <div style={{
                width: '30px', height: '30px', borderRadius: '50%',
                background: active ? 'var(--color-primary-dark)' : 'transparent',
                border: '1px solid var(--color-primary-dark)',
                color: active ? 'white' : 'var(--color-primary-dark)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: '700', fontSize: '0.8rem'
            }}>
                {num}
            </div>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em' }}>{label}</span>
        </div>
    )
}
