import React, { useState, useEffect } from 'react';
import { ArrowLeft, Plus, Leaf, Droplets, Thermometer, Activity, ShieldCheck, Microscope } from 'lucide-react';

export default function ProductDetail({ product, onBack, onAdd, cartItems }) {
    const [activeTab, setActiveTab] = useState('profile');
    const [reveal, setReveal] = useState(false);

    useEffect(() => {
        setReveal(true);
        window.scrollTo(0, 0);
    }, []);

    if (!product) return null;

    // Simulated Scientific Data (since our JSON is simple)
    const scientificName = product.title === 'Hydroponic Lettuce' ? 'Lactuca sativa var. capitata' :
        product.title === 'Cherry Tomatoes' ? 'Solanum lycopersicum var. cerasiforme' :
            product.title === 'Fresh Basil' ? 'Ocimum basilicum' :
                product.title === 'Bell Peppers' ? 'Capsicum annuum' :
                    product.title === 'Cucumber' ? 'Cucumis sativus' :
                        product.title === 'Strawberries' ? 'Fragaria × ananassa' :
                            product.title === 'Spinach' ? 'Spinacia oleracea' :
                                'Botanical Specimen #8492';

    const batchId = `BATCH-${Math.floor(Math.random() * 8999) + 1000}-${new Date().getFullYear()}`;
    const germinationRate = '99.4%';
    const harvestDate = new Date();
    harvestDate.setDate(harvestDate.getDate() + 2); // 2 days from now

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            background: '#f8fafc',
            zIndex: 1000,
            overflowY: 'auto',
            opacity: reveal ? 1 : 0,
            transition: 'opacity 0.4s ease-out',
            display: 'flex',
            flexDirection: 'column'
        }}>
            {/* Header / Nav */}
            <div style={{
                position: 'sticky',
                top: 0,
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(12px)',
                borderBottom: '1px solid rgba(28, 25, 23, 0.05)',
                padding: '1rem 2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                zIndex: 50
            }}>
                <button
                    onClick={onBack}
                    style={{
                        background: 'none', border: 'none', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                        color: 'var(--color-text-muted)', fontWeight: '600',
                        fontSize: '0.9rem', letterSpacing: '0.05em'
                    }}
                >
                    <ArrowLeft size={18} /> BACK TO ARCHIVE
                </button>

                <div style={{ fontFamily: 'monospace', color: '#94a3b8', fontSize: '0.8rem' }}>
                    {batchId} // {scientificName}
                </div>
            </div>

            <div className="container" style={{ margin: '0 auto', maxWidth: '1400px', width: '100%', padding: '2rem', flex: 1 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', height: '100%' }}>

                    {/* Visual Column */}
                    <div style={{ position: 'relative' }}>
                        <div style={{
                            position: 'relative',
                            borderRadius: '2rem',
                            overflow: 'hidden',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                            aspectRatio: '3/4',
                            height: 'calc(100vh - 200px)',
                            maxHeight: '800px'
                        }}>
                            {product.image.endsWith('.mp4') ? (
                                <video
                                    src={product.image}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            ) : (
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            )}
                            {/* Overlay Data */}
                            <div style={{
                                position: 'absolute', bottom: 0, left: 0, right: 0,
                                padding: '2rem',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
                            }}>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <Badge icon={<Leaf size={14} />} label="PESTICIDE FREE" />
                                    <Badge icon={<ShieldCheck size={14} />} label="LAB VERIFIED" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Data / Info Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
                        <h1 style={{
                            fontSize: '3.5rem',
                            fontWeight: '700',
                            fontFamily: 'var(--font-serif)',
                            color: 'var(--color-primary-dark)',
                            marginBottom: '0.5rem',
                            lineHeight: 1.1
                        }}>
                            {product.title}
                        </h1>
                        <div style={{
                            fontSize: '1.1rem',
                            color: 'var(--color-text-muted)',
                            fontStyle: 'italic',
                            marginBottom: '2rem',
                            fontFamily: 'var(--font-serif)'
                        }}>
                            {scientificName}
                        </div>

                        <p style={{
                            lineHeight: '1.8',
                            color: 'var(--color-text-main)',
                            fontSize: '1.1rem',
                            marginBottom: '3rem',
                            maxWidth: '600px'
                        }}>
                            {product.description} Cultivated in our controlled environment agriculture (CEA) facility under precise spectral conditions. This batch exhibits superior texture and enhanced nutrient density.
                        </p>

                        {/* Specs Grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '2rem',
                            marginBottom: '3rem',
                            borderTop: '1px solid rgba(0,0,0,0.05)',
                            paddingTop: '2rem'
                        }}>
                            <SpecItem label="Germination Rate" value={germinationRate} icon={<Activity size={20} color="#4ade80" />} />
                            <SpecItem label="Harvest Forecast" value={harvestDate.toLocaleDateString()} icon={<Thermometer size={20} color="#facc15" />} />
                            <SpecItem label="Water Efficiency" value="98.2%" icon={<Droplets size={20} color="#38bdf8" />} />
                            <SpecItem label="Nutrient Density" value="High (+24%)" icon={<Microscope size={20} color="#c084fc" />} />
                        </div>

                        <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--color-primary-dark)', fontFamily: 'var(--font-serif)' }}>
                                    ₹{product.price}
                                    <span style={{ fontSize: '1rem', color: '#94a3b8', marginLeft: '0.5rem', fontWeight: '400' }}>/ unit</span>
                                </div>
                            </div>

                            <button
                                onClick={() => onAdd(product)}
                                className="btn btn-primary"
                                style={{
                                    width: '100%',
                                    padding: '1.25rem',
                                    borderRadius: '1rem',
                                    fontSize: '1.1rem',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: 'var(--color-primary-dark)',
                                    color: 'white', letterSpacing: '0.1em'
                                }}
                            >
                                <Plus size={20} style={{ marginRight: '0.5rem' }} /> INITIALIZE ACQUISITION (ADD)
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

function Badge({ icon, label }) {
    return (
        <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)',
            color: 'white', padding: '0.4rem 0.8rem', borderRadius: '4px',
            fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em'
        }}>
            {icon} {label}
        </span>
    )
}

function SpecItem({ label, value, icon }) {
    return (
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{
                padding: '0.75rem', borderRadius: '50%', background: 'rgba(0,0,0,0.03)'
            }}>
                {icon}
            </div>
            <div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>{label}</div>
                <div style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--color-text-main)' }}>{value}</div>
            </div>
        </div>
    )
}
