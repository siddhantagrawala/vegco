import React from 'react';
import { Leaf, Award, Droplets } from 'lucide-react';

export default function Hero({ onViewCollection, onTechnologyClick }) {
    return (
        <div style={{
            position: 'relative',
            minHeight: '85vh',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            padding: '4rem 0'
        }}>
            <div style={{
                position: 'absolute',
                inset: 0,
                zIndex: -2,
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(255, 255, 255, 0.1)', // Reduced opacity for visibility
                    zIndex: 1,
                    backdropFilter: 'blur(1px)' // Reduced blur
                }} />

                {/* Fallback Background Color in case media fails completely */}
                <div style={{ position: 'absolute', inset: 0, background: '#f8fafc', zIndex: -1 }}></div>

                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    onError={(e) => {
                        e.target.style.display = 'none';
                        const slideshow = document.getElementById('hero-slideshow');
                        if (slideshow) slideshow.style.display = 'block';
                    }}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'saturate(1.1)',
                        zIndex: 0
                    }}
                >
                    <source src="./videos/vegco_showcase.mp4" type="video/mp4" />
                </video>

                {/* Fallback Slideshow */}
                <div id="hero-slideshow" style={{ display: 'none', position: 'absolute', inset: 0, zIndex: 0 }}>
                    <Slideshow />
                </div>
            </div>

            {/* Ambient Light Orbs - Subtle Warmth */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '800px',
                height: '800px',
                background: 'radial-gradient(circle, rgba(217, 119, 6, 0.05) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(100px)',
                zIndex: -1
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
                <div style={{ maxWidth: '800px', margin: '0 0 5rem' }}>




                    <h1 className="animate-fade-up delay-100" style={{
                        fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                        fontWeight: '300',
                        lineHeight: '1.1',
                        margin: '0 0 2rem',
                        color: 'var(--color-text-main)',
                        letterSpacing: '-0.02em',
                        textTransform: 'uppercase',
                        fontFamily: 'var(--font-serif)'
                    }}>
                        Engineering the <span style={{ color: 'var(--color-primary)', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>Emerald</span> Harvest.
                    </h1>

                    <p className="animate-fade-up delay-200" style={{
                        fontSize: '1.35rem',

                        color: '#0f172a', // Darker solid color (Slate 900)
                        marginBottom: '3rem',
                        maxWidth: '650px',
                        lineHeight: '1.7',
                        fontWeight: '500', // Increased weight from 300
                        textShadow: '0 2px 20px rgba(255,255,255,0.8)' // White glow for separation
                    }}>
                        Replacing Negotiation with Calculation. Experience the precision of Dutch hydroponics
                        combined with laboratory-grade purity. Freshness, calculated to perfection.
                    </p>

                    <div className="animate-fade-up delay-300" style={{ display: 'flex', gap: '1rem' }}>
                        <button
                            onClick={onViewCollection}
                            className="btn btn-primary"
                            style={{ padding: '1rem 2.5rem' }}
                        >
                            View Collection
                        </button>
                        <button
                            onClick={onTechnologyClick}
                            className="btn btn-outline"
                            style={{ padding: '1rem 2.5rem' }}
                        >
                            Our Technology
                        </button>
                    </div>
                </div>

                {/* Refined Feature Cards - Minimalist */}
                <div className="animate-fade-up delay-300" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                }}>
                    {[
                        { icon: Droplets, title: "Clinical Purity", desc: "RO-purified water. Bio-secure zones." },
                        { icon: Leaf, title: "100% Usable", desc: "Zero grit, zero stalks. Pure yield." },
                        { icon: Award, title: "Dutch Automation", desc: "Priva systems for jewel-grade consistency." }
                    ].map((item, idx) => (
                        <div key={idx} className="glass-panel" style={{
                            padding: '2.5rem',
                            borderRadius: '1.5rem',
                            cursor: 'default',
                        }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.9)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.6)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                            }}
                        >
                            <div style={{
                                width: '48px',
                                height: '48px',
                                background: 'var(--color-bg-alt)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem',
                                color: 'var(--color-primary)'
                            }}>
                                <item.icon size={24} strokeWidth={1.5} />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '500', marginBottom: '0.5rem', color: 'var(--color-text-main)', fontFamily: 'var(--font-serif)', letterSpacing: '0.02em' }}>{item.title}</h3>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}

function Slideshow() {
    const [index, setIndex] = React.useState(0);
    const images = [
        './videos/frames/stage1.png',
        './videos/frames/stage2.png',
        './videos/frames/stage3.png',
        './videos/frames/stage4.png'
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: -1 }}>
            {images.map((src, i) => (
                <img
                    key={src}
                    src={src}
                    alt=""
                    style={{
                        position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
                        opacity: index === i ? 1 : 0,
                        transition: 'opacity 1s ease-in-out',
                        filter: 'saturate(1.1)'
                    }}
                />
            ))}
        </div>
    )
}
