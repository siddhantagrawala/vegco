import React, { useState, useEffect } from 'react';
import { Activity, Droplets, Shield, FileText, Check, AlertCircle, Wind, Thermometer, Microscope } from 'lucide-react';

export default function PurityIndex({ onBack }) {
    const [telemetry, setTelemetry] = useState({
        ph: 6.0,
        tds: 450,
        do: 8.5, // Dissolved Oxygen
        temp: 21.5
    });

    // Simulated Telemetry Animation
    useEffect(() => {
        const interval = setInterval(() => {
            setTelemetry(prev => ({
                ph: +(prev.ph + (Math.random() * 0.1 - 0.05)).toFixed(2),
                tds: Math.floor(prev.tds + (Math.random() * 4 - 2)),
                do: +(prev.do + (Math.random() * 0.1 - 0.05)).toFixed(1),
                temp: +(prev.temp + (Math.random() * 0.2 - 0.1)).toFixed(1)
            }));
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    const zeroList = [
        "Pesticides", "Herbicides", "Fungicides", "Heavy Metals", "Soil Pathogens", "GMO Seeds", "Synthetic Waxes"
    ];

    return (
        <div style={{
            minHeight: '100vh',
            background: '#0f172a',
            color: 'white',
            fontFamily: 'Inter, sans-serif',
            paddingTop: '80px',
            backgroundImage: 'radial-gradient(circle at 50% 10%, rgba(56, 189, 248, 0.1) 0%, rgba(15, 23, 42, 1) 70%)'
        }}>
            <div className="container" style={{ paddingBottom: '4rem' }}>

                {/* Header */}
                <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.5rem 1rem', background: 'rgba(56, 189, 248, 0.1)',
                        border: '1px solid rgba(56, 189, 248, 0.2)', borderRadius: '999px',
                        color: '#38bdf8', fontSize: '0.8rem', letterSpacing: '0.1em', fontWeight: 'bold',
                        marginBottom: '1.5rem'
                    }}>
                        <Microscope size={14} /> SCIENCE OF PURITY
                    </div>
                    <h1 style={{
                        fontSize: '3.5rem', fontWeight: '800', letterSpacing: '-0.02em',
                        marginBottom: '1rem', background: 'linear-gradient(180deg, #fff 0%, #94a3b8 100%)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
                    }}>
                        Engineered Transparency.
                    </h1>
                    <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                        We don't rely on hope. We rely on data. Validating our produce to parts-per-billion precision.
                    </p>
                </div>

                {/* Main Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>

                    {/* Live Telemetry Card */}
                    <div style={{
                        gridColumn: 'span 2',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: '1.5rem', padding: '2rem',
                        backdropFilter: 'blur(10px)',
                        position: 'relative', overflow: 'hidden'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Activity size={20} color="#38bdf8" /> Live Nutrient Feed Data
                                </h3>
                                <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Real-time sensor relay from Hub-1 (Mumbai)</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%', boxShadow: '0 0 10px #22c55e' }}></span>
                                <span style={{ fontSize: '0.75rem', color: '#22c55e', fontWeight: 'bold', letterSpacing: '0.05em' }}>LIVE</span>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1.5rem' }}>
                            {/* Metric: pH */}
                            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                                <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.5rem' }}>pH LEVEL</div>
                                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'white', fontFamily: 'monospace' }}>{telemetry.ph}</div>
                                <div style={{ fontSize: '0.7rem', color: '#38bdf8' }}>Optimal: 5.8-6.2</div>
                            </div>

                            {/* Metric: TDS */}
                            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                                <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.5rem' }}>TDS (PPM)</div>
                                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'white', fontFamily: 'monospace' }}>{telemetry.tds}</div>
                                <div style={{ fontSize: '0.7rem', color: '#38bdf8' }}>Target: 400-500</div>
                            </div>

                            {/* Metric: DO */}
                            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                                <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.5rem' }}>OXYGEN (DO)</div>
                                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'white', fontFamily: 'monospace' }}>{telemetry.do}</div>
                                <div style={{ fontSize: '0.7rem', color: '#38bdf8' }}>mg/L Saturation</div>
                            </div>
                        </div>

                        {/* Decoration */}
                        <div style={{
                            position: 'absolute', bottom: '-50px', right: '-20px',
                            opacity: 0.1, transform: 'rotate(-20deg)'
                        }}>
                            <Droplets size={200} color="white" />
                        </div>
                    </div>

                    {/* The Zero List */}
                    <div style={{
                        background: '#ffffff', color: '#0f172a',
                        borderRadius: '1.5rem', padding: '2rem',
                        display: 'flex', flexDirection: 'column', height: '100%'
                    }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Shield size={24} color="#0f172a" /> The Zero List
                        </h3>
                        <p style={{ color: '#475569', marginBottom: '2rem', lineHeight: '1.6' }}>
                            We maintain a strict blacklist of agricultural inputs. If it enters our farm, it never leaves.
                        </p>

                        <div style={{ flex: 1, display: 'flex', flexWrap: 'wrap', alignContent: 'start', gap: '0.5rem' }}>
                            {zeroList.map((item, idx) => (
                                <span key={idx} style={{
                                    padding: '0.5rem 1rem', background: '#f1f5f9',
                                    color: '#64748b', borderRadius: '0.5rem', fontSize: '0.9rem',
                                    fontWeight: '500', textDecoration: 'line-through'
                                }}>
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '40px', height: '40px', background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Check size={24} color="#16a34a" />
                            </div>
                            <div>
                                <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>100% Residue Free</div>
                                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Certified by NABL Labs</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- SEPARATE FULL-WIDTH PRIVA SHOWCASE --- */}
                <div style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.08) 100%)',
                    border: '1px solid rgba(46, 213, 115, 0.2)', // Emerald tint border
                    borderRadius: '2rem', padding: '4rem',
                    marginBottom: '4rem',
                    display: 'flex', gap: '4rem', alignItems: 'center',
                    position: 'relative', overflow: 'hidden',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.4), inset 0 0 40px rgba(74, 222, 128, 0.05)'
                }}>
                    {/* Background Detail */}
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(74, 222, 128, 0.03))', zIndex: 0 }} />

                    <div style={{ flex: 1.2, position: 'relative', zIndex: 1 }}>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                            color: '#4ade80', fontSize: '0.9rem', fontWeight: '800',
                            marginBottom: '1.5rem', letterSpacing: '0.3em', textTransform: 'uppercase'
                        }}>
                            <Activity size={16} /> Precision Operator Interface
                        </div>
                        <h3 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '2rem', color: 'white', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
                            PRIVA COMPASS <br />
                            <span style={{ color: '#94a3b8', fontWeight: '300' }}>Master Greenhouse Control.</span>
                        </h3>
                        <p style={{ color: '#cbd5e1', lineHeight: '1.9', marginBottom: '3rem', fontSize: '1.25rem', maxWidth: '650px' }}>
                            Experience the pinnacle of Dutch agricultural intelligence. The <strong>Priva Compass</strong> allows our operators to synchronize climate, irrigation, and nutrition from a single clinical interface—ensuring every plant receives the exact profile it needs for laboratory-grade purity.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
                            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                                    <Wind size={20} color="#4ade80" />
                                    <div style={{ fontWeight: '800', fontSize: '1rem', letterSpacing: '0.05em' }}>HARDWARE RELAY</div>
                                </div>
                                <div style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.6' }}>Industrial digital gateways with direct sensor-to-valve logic paths for zero latency.</div>
                            </div>
                            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                                    <Microscope size={20} color="#38bdf8" />
                                    <div style={{ fontWeight: '800', fontSize: '1rem', letterSpacing: '0.05em' }}>CALIBRATION DRIFT: ZERO</div>
                                </div>
                                <div style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.6' }}>Self-healing sensor arrays that maintain +/- 0.01 pH tolerance across 100,000+ data cycles.</div>
                            </div>
                        </div>
                    </div>

                    <div style={{
                        flex: 1, height: '500px', borderRadius: '1.5rem', overflow: 'hidden',
                        border: '1px solid rgba(255,255,255,0.15)', boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
                        position: 'relative'
                    }}>
                        <img
                            src="./priva_compass_interface.png"
                            alt="Priva Compass Operator Interface"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(1.05)' }}
                        />
                        {/* Status Overlay */}
                        <div style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', padding: '0.5rem 1rem', borderRadius: '999px', border: '1px solid rgba(74, 222, 128, 0.3)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 10px #22c55e' }}></div>
                            <span style={{ fontSize: '0.7rem', fontWeight: '900', color: 'white' }}>SYSTEM LIVE: ZONE 1 CONTROL</span>
                        </div>
                    </div>
                </div>

                {/* Lab Certificates Section */}
                <div style={{
                    background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '1.5rem', padding: '3rem', position: 'relative'
                }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <div style={{ color: '#38bdf8', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>BATCH VALIDATION</div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1.5rem' }}>Latest Lab Reports</h2>
                            <p style={{ color: '#94a3b8', lineHeight: '1.8', marginBottom: '2rem' }}>
                                Every harvest batch undergoes random sampling for heavy metal and pesticide residue analysis. We believe transparency isn't a feature—it's a right.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', cursor: 'pointer', border: '1px solid transparent', transition: 'border 0.2s' }}>
                                    <FileText size={24} color="#cbd5e1" />
                                    <div style={{ flex: 1 }}>
                                        <div style={{ color: 'white', fontWeight: '600' }}>Heavy Metal Analysis - Jan 2024</div>
                                        <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Passed • Detection Limit: 0.001ppm</div>
                                    </div>
                                    <div style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: '600' }}>VIEW PDF</div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', cursor: 'pointer', border: '1px solid transparent', transition: 'border 0.2s' }}>
                                    <FileText size={24} color="#cbd5e1" />
                                    <div style={{ flex: 1 }}>
                                        <div style={{ color: 'white', fontWeight: '600' }}>Water Quality Report - Q1</div>
                                        <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Passed • IS 10500 Standards</div>
                                    </div>
                                    <div style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: '600' }}>VIEW PDF</div>
                                </div>
                            </div>
                        </div>

                        {/* Visual for Doc */}
                        <div style={{
                            background: 'transparent', height: '400px', borderRadius: '1rem',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            position: 'relative', overflow: 'hidden'
                        }}>
                            <img
                                src="./lab_report_modern.png"
                                alt="Certified Lab Report"
                                style={{
                                    width: '100%', height: '100%', objectFit: 'contain',
                                    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))',
                                    transform: 'rotate(2deg) scale(1.1)'
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <button onClick={onBack} style={{
                        background: 'transparent', border: '1px solid rgba(255,255,255,0.2)',
                        color: '#94a3b8', padding: '1rem 3rem', borderRadius: '0.5rem',
                        cursor: 'pointer', fontWeight: '600', transition: 'all 0.2s'
                    }}>
                        Return to Marketplace
                    </button>
                </div>
            </div>
        </div>
    );
}
