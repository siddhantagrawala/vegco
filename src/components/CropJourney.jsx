import React, { useState, useEffect } from 'react';
import { Sprout, Droplets, Sun, Scissors, ShoppingCart, ShieldCheck, AlertCircle, ChevronRight, Zap, Target } from 'lucide-react';

const CropJourney = ({ onBack }) => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            title: "Precision Sowing",
            tag: "PHASE 01",
            duration: "Day 0-3",
            description: "Seeds are placed in secondary-grade sterile coco-peat plugs. No soil, no pathogens. Initial germination occurs in a controlled incubation chamber at 22°C.",
            info: ["Sterile Media", "90% Germination Rate", "Pathogen Free"],
            image: "/luxury_germination_phase_1.png"
        },
        {
            title: "First Emergence",
            tag: "PHASE 02",
            duration: "Day 4-10",
            description: "The first emerald sprout breaks dormancy. Roots tap into oxygen-rich nutrient film. Photosynthesis begins under calibrated broad-spectrum light.",
            info: ["First Leaf", "Root Development", "Oxygen Infusion"],
            image: "/luxury_germination_phase_2.png"
        },
        {
            title: "Accelerated Growth",
            tag: "PHASE 03",
            duration: "Day 11-25",
            description: "Under clinical LED spectrums (Photosynthetic active radiation), the crops grow 300% faster than traditional farming. Vibrant health is visible.",
            info: ["LED Optimization", "Zero Blemishes", "Vibrant Pigmentation"],
            image: "/luxury_germination_phase_3_real.png"
        },
        {
            title: "Clinical Harvest",
            tag: "PHASE 04",
            duration: "Day 26-28",
            description: "Crops are harvested at peak phyto-density. Roots are kept intact for maximum freshness. Immediately moved to cold storage within 15 minutes.",
            info: ["Living Roots", "Zero Post-Harvest Loss", "Hyper-Fresh Delivery"],
            image: "/luxury_germination_phase_4_real.png"
        }
    ];

    const comparison = [
        {
            feature: "Soil Quality",
            mandi: "Unknown (Contaminated)",
            mandiIcon: <AlertCircle color="#ef4444" size={16} />,
            hydro: "Sterile Coco-Peat",
            hydroIcon: <ShieldCheck color="var(--color-primary)" size={16} />
        },
        {
            feature: "Water Source",
            mandi: "Groundwater/Canal",
            mandiIcon: <AlertCircle color="#ef4444" size={16} />,
            hydro: "Double Purified RO",
            hydroIcon: <ShieldCheck color="var(--color-primary)" size={16} />
        },
        {
            feature: "Pesticides",
            mandi: "Heavy Lead/Chemicals",
            mandiIcon: <AlertCircle color="#ef4444" size={16} />,
            hydro: "100% Residue-Free",
            hydroIcon: <ShieldCheck color="var(--color-primary)" size={16} />
        },
        {
            feature: "Nutrient Density",
            mandi: "Depleted Soil Values",
            mandiIcon: <AlertCircle color="#ef4444" size={16} />,
            hydro: "Optimized Minerals",
            hydroIcon: <ShieldCheck color="var(--color-primary)" size={16} />
        },
        {
            feature: "Logistics",
            mandi: "48-72h in Sunlight",
            mandiIcon: <AlertCircle color="#ef4444" size={16} />,
            hydro: "<4h Farm-to-Fork",
            hydroIcon: <ShieldCheck color="var(--color-primary)" size={16} />
        }
    ];

    return (
        <div className="crop-journey-page" style={{
            minHeight: '100vh',
            backgroundColor: 'var(--color-bg-light)',
            // Use the new global texture if available, or fall back to subtle gradient
            backgroundImage: 'url("/luxury_global_texture_v2.png"), linear-gradient(to bottom, #fdfcf8, #f5f5f4)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            padding: '6rem 1rem',
            color: 'var(--color-text-main)',
            fontFamily: 'var(--font-sans)',
            overflowX: 'hidden'
        }}>


            <div className="container" style={{ maxWidth: '1200px' }}>
                <div style={{ textAlign: 'left', marginBottom: '8rem' }}>
                    <div style={{ color: 'var(--color-primary)', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                        The Seed-to-Scale Protocol
                    </div>
                    <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: '300', fontFamily: 'var(--font-serif)', letterSpacing: '-0.02em', textTransform: 'uppercase', lineHeight: 1, color: 'var(--color-text-main)' }}>
                        CROP <span style={{ color: 'var(--color-primary)', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>JOURNEY</span>
                    </h1>
                </div>

                {/* Vertical Timeline/Journey - Light Theme */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '6rem', marginBottom: '15rem' }}>
                    <div style={{ position: 'sticky', top: '10rem', height: 'fit-content' }}>
                        <div style={{ fontSize: '0.65rem', color: 'var(--color-text-light)', fontWeight: '800', letterSpacing: '0.2em', marginBottom: '2rem' }}>CURRENT DEPLOYMENT STAGE</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {steps.map((step, i) => (
                                <div
                                    key={i}
                                    onMouseEnter={() => setActiveStep(i)}
                                    style={{
                                        padding: '1.5rem 2rem',
                                        background: activeStep === i ? 'rgb(255, 255, 255)' : 'transparent',
                                        borderLeft: `3px solid ${activeStep === i ? 'var(--color-primary)' : 'rgba(28, 25, 23, 0.1)'}`,
                                        cursor: 'pointer',
                                        transition: 'all 0.4s ease',
                                        borderRadius: '0 1rem 1rem 0',
                                        boxShadow: activeStep === i ? 'var(--shadow-md)' : 'none'
                                    }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span style={{ fontSize: '0.65rem', fontWeight: '800', color: activeStep === i ? 'var(--color-primary)' : 'var(--color-text-muted)' }}>{step.tag}</span>
                                        <span style={{ fontSize: '0.65rem', color: 'var(--color-text-light)' }}>{step.duration}</span>
                                    </div>
                                    <div style={{ fontSize: '1.1rem', fontWeight: '600', color: activeStep === i ? 'var(--color-text-main)' : 'var(--color-text-muted)', fontFamily: 'var(--font-serif)' }}>{step.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <div style={{
                            borderRadius: '2rem',
                            overflow: 'hidden',
                            height: '500px',
                            border: '1px solid rgba(28, 25, 23, 0.05)',
                            background: '#fff',
                            position: 'relative',
                            marginBottom: '3rem',
                            boxShadow: 'var(--shadow-lg)'
                        }} className="animate-fade-up">
                            <img
                                key={activeStep}
                                src={steps[activeStep].image}
                                alt={steps[activeStep].title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.5s ease-in-out' }}
                            />
                            <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', padding: '1rem 2rem', background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)', borderRadius: '1rem', border: '1px solid rgba(28, 25, 23, 0.05)', display: 'flex', gap: '1rem', alignItems: 'center', boxShadow: 'var(--shadow-md)' }}>
                                <Zap color="var(--color-primary)" size={16} fill="currentColor" />
                                <span style={{ fontSize: '0.7rem', fontWeight: '800', letterSpacing: '0.1em', color: 'var(--color-primary-dark)' }}>PRECISION ACTIVE</span>
                            </div>
                        </div>

                        <div style={{ padding: '2rem 3rem' }}>
                            <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: 'var(--color-text-muted)', marginBottom: '2.5rem', fontWeight: '300', fontFamily: 'var(--font-sans)' }}>
                                {steps[activeStep].description}
                            </p>
                            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                                {steps[activeStep].info.map((inf, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: '#fff', padding: '0.6rem 1.2rem', borderRadius: '0.75rem', border: '1px solid rgba(28, 25, 23, 0.05)', boxShadow: 'var(--shadow-sm)' }}>
                                        <Target size={14} color="var(--color-primary)" />
                                        <span style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--color-text-main)' }}>{inf}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Comparison Section - Light Theme */}
                <div style={{ padding: '6rem 4rem', background: '#fff', borderRadius: '3rem', border: '1px solid rgba(28, 25, 23, 0.03)', marginBottom: '10rem', boxShadow: 'var(--shadow-lg)' }}>
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '300', fontFamily: 'var(--font-serif)', color: 'var(--color-text-main)' }}>PRECISION VS <span style={{ color: '#ef4444', fontStyle: 'italic' }}>TRADITIONAL</span></h2>
                        <p style={{ color: 'var(--color-text-light)', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.75rem', marginTop: '1rem' }}>Clinical Comparison Analysis</p>
                    </div>

                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid rgba(28, 25, 23, 0.05)' }}>
                                <th style={{ textAlign: 'left', padding: '2rem', color: 'var(--color-text-light)', fontSize: '0.7rem', letterSpacing: '0.2em' }}>PARAMETER</th>
                                <th style={{ textAlign: 'center', padding: '2rem', color: '#ef4444', fontSize: '0.7rem', letterSpacing: '0.2em' }}>TRADITIONAL MANDI</th>
                                <th style={{ textAlign: 'center', padding: '2rem', color: 'var(--color-primary)', fontSize: '0.7rem', letterSpacing: '0.2em' }}>VEGCO PRECISION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparison.map((item, i) => (
                                <tr key={i} style={{ borderBottom: i === comparison.length - 1 ? 'none' : '1px solid rgba(28, 25, 23, 0.03)' }}>
                                    <td style={{ padding: '2rem 2rem', color: 'var(--color-text-main)', fontSize: '0.9rem', fontWeight: '600', letterSpacing: '0.05em' }}>{item.feature.toUpperCase()}</td>
                                    <td style={{ padding: '2rem 2rem', textAlign: 'center' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', color: 'var(--color-text-muted)' }}>
                                            {item.mandiIcon}
                                            <span style={{ fontSize: '0.95rem', fontWeight: '500' }}>{item.mandi}</span>
                                        </div>
                                    </td>
                                    <td style={{ padding: '2rem 2rem', textAlign: 'center' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', color: 'var(--color-text-main)' }}>
                                            {item.hydroIcon}
                                            <span style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--color-primary-dark)' }}>{item.hydro}</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div style={{ textAlign: 'center', padding: '5rem 0' }}>
                    <button
                        onClick={onBack}
                        className="btn btn-primary"
                        style={{ padding: '1.25rem 3.5rem', fontSize: '0.9rem', letterSpacing: '0.15em' }}
                    >
                        START YOUR HARVEST →
                    </button>
                </div>
            </div>

            <div style={{
                marginTop: '10rem',
                opacity: 0.2, // More visible in light theme
                letterSpacing: '2em',
                fontSize: '0.65rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                color: 'var(--color-text-light)',
                textAlign: 'center'
            }}>
                PRECISION AGRICULTURE • GLOBAL STANDARD v1.0
            </div>
        </div>
    );
};

export default CropJourney;
