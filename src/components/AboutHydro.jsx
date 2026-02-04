import React, { useEffect } from 'react';
import { Leaf, Droplets, Sparkles, Heart, ArrowLeft, CheckCircle2, FlaskConical, Sun, Wheat } from 'lucide-react';

export default function AboutHydro({ onBack }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sections = [
        {
            title: "Freshness: The First Bite",
            tag: "Boutique Harvest",
            image: "/images/about/harvest_hero.png",
            content: "We believe the journey from stalk to plate should be measured in minutes, not miles. Our boutique harvest method ensures that every leaf reaches you with its cell structure intact—yielding a crunch and flavor intensity that traditional logistics simply cannot preserve. This isn't just produce; it's a vibrant, living experience.",
            features: ["Harvest-to-Plate in Hours", "Peak Nutrient Density", "Unrivaled Crispness"]
        },
        {
            title: "Purity: Pure Mineral Springs",
            tag: "Double RO Purified",
            image: "/images/about/freshness.png",
            content: "Instead of relying on unpredictable groundwater, we create our own. Using a rigorous Double Reverse Osmosis process, we strip water to its purest form before infusing it with a bespoke blend of minerals. No lead, no industrial runoff—just the crisp clarity of a mountain spring in every bite.",
            features: ["Double RO Purified Base", "Bespoke Mineral Profiles", "Zero Heavy Metal Risk"]
        },
        {
            title: "The Sanctuary: Nature Perfected",
            tag: "Sun-Drenched Tech",
            image: "/images/about/sanctuary.png",
            content: "Step into our sun-drenched sanctuary. While the world outside 'negotiates' with unpredictable weather, we calculate perfection. Our precision-controlled environment ensures that every plant receives its ideal dosage of light, warmth, and nutrition—delivering standard-setting freshness 365 days a year.",
            features: ["365 Days of Spring", "Gentle Hydro-Nutrition", "Pathogen-Free Growth"]
        }
    ];

    return (
        <div style={{
            backgroundColor: '#fdfcf8', // Warm Ivory
            minHeight: '100vh',
            color: '#1e293b',
            fontFamily: "'Outfit', sans-serif"
        }}>
            {/* Navigation Header */}
            <div style={{
                position: 'fixed', top: 0, left: 0, width: '100%',
                padding: '1.5rem 3rem', zIndex: 100,
                display: 'flex', alignItems: 'center',
                background: 'rgba(253, 252, 248, 0.8)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid rgba(0,0,0,0.05)'
            }}>
                <button
                    onClick={onBack}
                    style={{
                        display: 'flex', alignItems: 'center', gap: '0.75rem',
                        background: '#064e3b', // Deep Forest Green
                        border: 'none',
                        padding: '0.75rem 1.5rem', borderRadius: '999px',
                        color: 'white', cursor: 'pointer', fontWeight: '700',
                        fontSize: '0.9rem',
                        transition: 'all 0.2s',
                        boxShadow: '0 4px 12px rgba(6, 78, 59, 0.2)'
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                    <ArrowLeft size={18} /> BACK TO STORE
                </button>
            </div>

            {/* Hero Section - Dual Video Split Screen */}
            <section style={{
                height: '80vh', position: 'relative', overflow: 'hidden',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
                {/* Video Layer */}
                <div style={{ position: 'absolute', inset: 0, display: 'flex', zIndex: 0 }}>
                    {/* Left Video */}
                    <div style={{ flex: 1, height: '100%', position: 'relative' }}>
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(1.1) brightness(1.1) contrast(1.1)' }}
                        >
                            <source src="/videos/richness_left.mp4" type="video/mp4" />
                        </video>
                    </div>

                    {/* Right Video */}
                    <div style={{ flex: 1, height: '100%', position: 'relative' }}>
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(1.1) brightness(1.1) contrast(1.1)' }}
                        >
                            <source src="/videos/richness_right.mp4" type="video/mp4" />
                        </video>
                    </div>

                    {/* Overlay for Text Legibility - Reduced Opacity for Colors */}
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(255, 253, 245, 0.5)' }}></div>
                </div>

                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 2rem' }}>
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.5rem 1.25rem', background: 'rgba(16, 185, 129, 0.1)',
                        color: '#059669', borderRadius: '999px', fontSize: '0.85rem',
                        fontWeight: '800', letterSpacing: '0.15rem', textTransform: 'uppercase',
                        marginBottom: '2.5rem', border: '1px solid rgba(16, 185, 129, 0.2)'
                    }}>
                        <Sparkles size={14} /> The Boutique Harvest
                    </div>
                    <h1 style={{
                        fontSize: 'clamp(3.5rem, 9vw, 6.5rem)', fontWeight: '900', letterSpacing: '-0.04em',
                        fontFamily: 'serif', marginBottom: '1.5rem',
                        lineHeight: 1, color: '#064e3b' // Deep Forest
                    }}>
                        Richness in <br /> <span style={{ color: '#10b981', fontStyle: 'italic', fontWeight: '400' }}>Every Crunch.</span>
                    </h1>
                    <p style={{
                        fontSize: '1.5rem', color: '#64748b', maxWidth: '800px',
                        lineHeight: 1.6, fontWeight: '500', margin: '0 auto'
                    }}>
                        Moving beyond the clinical to the artisanal. <br />
                        We grow for flavor. We grow for richness. We grow for you.
                    </p>
                </div>
            </section>

            {/* Immersive Feature Blocks */}
            {sections.map((section, idx) => (
                <section key={idx} style={{
                    padding: '10rem 0',
                    display: 'flex',
                    flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse',
                    alignItems: 'center',
                    gap: '6rem',
                    maxWidth: '1400px',
                    margin: '0 auto',
                    paddingLeft: '2rem',
                    paddingRight: '2rem'
                }}>
                    <div style={{ flex: 1 }}>
                        <div style={{
                            fontSize: '0.85rem', color: '#10b981', fontWeight: '800',
                            letterSpacing: '0.2rem', marginBottom: '1.5rem', textTransform: 'uppercase'
                        }}>
                            {section.tag}
                        </div>
                        <h2 style={{
                            fontSize: '3.5rem', fontWeight: '900', marginBottom: '2.5rem',
                            fontFamily: 'serif', color: '#064e3b'
                        }}>
                            {section.title}
                        </h2>
                        <p style={{
                            fontSize: '1.4rem', color: '#475569', lineHeight: 1.8,
                            marginBottom: '3rem'
                        }}>
                            {section.content}
                        </p>
                        <div style={{ display: 'grid', gap: '1.25rem' }}>
                            {section.features.map((f, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#1e293b', fontSize: '1.2rem', fontWeight: '500' }}>
                                    <div style={{
                                        width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        <CheckCircle2 size={18} color="#10b981" />
                                    </div>
                                    {f}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{ flex: 1.2 }}>
                        <div style={{
                            position: 'relative',
                            borderRadius: '3rem',
                            overflow: 'hidden',
                            boxShadow: '0 40px 80px -15px rgba(0, 0, 0, 0.1)',
                            border: '8px solid white'
                        }}>
                            <img
                                src={section.image}
                                alt={section.title}
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                        </div>
                    </div>
                </section>
            ))}

            {/* Safety Protocol Comparison Matrix */}
            <section style={{
                padding: '8rem 2rem',
                background: '#f1f5f9',
                display: 'flex', justifyContent: 'center'
            }}>
                <div style={{ maxWidth: '1200px', width: '100%' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#064e3b', fontFamily: 'serif', marginBottom: '1rem' }}>
                            Safety Protocol: The Unseen Difference
                        </h2>
                        <p style={{ fontSize: '1.2rem', color: '#64748b' }}>
                            Why our greens taste cleaner? Because they are cleaner.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'minmax(200px, 1fr) 1fr 1fr',
                        background: 'white',
                        borderRadius: '2rem',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)',
                        border: '1px solid #e2e8f0'
                    }}>
                        {/* Header Row */}
                        <div style={{ padding: '1.5rem', background: '#f8fafc', fontWeight: '800', color: '#94a3b8', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.05em', borderBottom: '1px solid #e2e8f0' }}>Safety Protocol</div>
                        <div style={{ padding: '1.5rem', background: '#f8fafc', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.05em', borderBottom: '1px solid #e2e8f0' }}>Open-Field Farming (Mandi)</div>
                        <div style={{ padding: '1.5rem', background: '#064e3b', fontWeight: '800', color: '#fcd34d', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.05em', borderBottom: '1px solid #065f46' }}>VEGCO Boutique</div>

                        {/* Row 1: Water Source */}
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b', fontWeight: '700' }}>Water Source</div>
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0', color: '#64748b' }}>Often River/Groundwater <br /> <span style={{ fontSize: '0.9rem', color: '#ef4444' }}>(Risk of Heavy Metals)</span></div>
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0', color: '#064e3b', fontWeight: '600' }}>RO-Purified Mineral Water <br /> <span style={{ fontSize: '0.9rem', color: '#10b981' }}>(Drinkable Grade)</span></div>

                        {/* Row 2: Pesticide Load */}
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b', fontWeight: '700' }}>Pesticide Load</div>
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0', color: '#64748b' }}>Unregulated Chemical Cocktail</div>
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0', color: '#064e3b', fontWeight: '600' }}>Zero Residue. Bio-Control Only.</div>

                        {/* Row 3: Human Contact */}
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b', fontWeight: '700' }}>Human Contact</div>
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0', color: '#64748b' }}>Touched by 10+ people <br /><span style={{ fontSize: '0.9rem' }}>(Harvest &gt; Truck &gt; Mandi &gt; Vendor)</span></div>
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0', color: '#064e3b', fontWeight: '600' }}>Zero-Touch Harvest. Gloved & Masked.</div>

                        {/* Row 4: Pathogen Risk */}
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b', fontWeight: '700' }}>Pathogen Risk</div>
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0', color: '#64748b' }}>High exposure to E. Coli & Salmonella <br /><span style={{ fontSize: '0.9rem' }}>(Soil/Animals)</span></div>
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0', color: '#064e3b', fontWeight: '600' }}>Sterile, Controlled Environment.</div>

                        {/* Row 5: The Result */}
                        <div style={{ padding: '1.5rem', color: '#1e293b', fontWeight: '700' }}>The Result</div>
                        <div style={{ padding: '1.5rem', color: '#64748b', fontStyle: 'italic' }}>Requires scrubbing, soaking, and worrying.</div>
                        <div style={{ padding: '1.5rem', color: '#059669', fontWeight: '800', background: 'rgba(16, 185, 129, 0.1)' }}>Safe to eat straight from the box.</div>
                    </div>
                </div>
            </section>

            {/* Zero-Waste Math Section - Value Proposition */}
            <section style={{
                padding: '10rem 2rem',
                backgroundColor: 'white',
                borderTop: '1px solid rgba(0,0,0,0.05)',
                textAlign: 'center'
            }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.5rem 1rem', background: 'rgba(0, 0, 0, 0.03)',
                        color: '#64748b', borderRadius: '999px', fontSize: '0.8rem',
                        fontWeight: '700', letterSpacing: '0.1rem', textTransform: 'uppercase',
                        marginBottom: '2rem'
                    }}>
                        Proven Value
                    </div>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '1.5rem', fontFamily: 'serif', color: '#064e3b' }}>
                        The "Cheaper" Option <br /> is Actually Expensive.
                    </h2>
                    <p style={{
                        fontSize: '1.25rem', color: '#64748b', maxWidth: '600px',
                        margin: '0 auto 5rem auto', lineHeight: 1.6
                    }}>
                        To get <b>1kg of usable salad</b> on your plate, you have two choices. <br />
                        The math proves luxury is an economy.
                    </p>

                    <div style={{
                        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', textAlign: 'left'
                    }}>
                        {/* Mandi Card */}
                        <div style={{ padding: '3.5rem', background: '#f8fafc', borderRadius: '3rem', border: '1px solid #e2e8f0', opacity: 0.8 }}>
                            <h3 style={{ fontSize: '1.8rem', color: '#64748b', marginBottom: '2.5rem', fontWeight: '800', fontFamily: 'serif' }}>Local "Mandi"</h3>
                            <div style={{ display: 'grid', gap: '1.75rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.75rem' }}>
                                    <span>Sticker Price</span>
                                    <span style={{ fontWeight: '700' }}>₹60/kg</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.75rem' }}>
                                    <span>Waste (Stalks, Mud)</span>
                                    <span style={{ color: '#ef4444', fontWeight: '700' }}>45% Lost</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.75rem' }}>
                                    <span>Buy Requirement</span>
                                    <span style={{ color: '#64748b' }}>1.8 kg needed</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem', fontSize: '1.4rem' }}>
                                    <span style={{ color: '#64748b' }}>Real Cost for 1kg</span>
                                    <span style={{ fontWeight: '900', color: '#64748b' }}>₹108</span>
                                </div>
                            </div>
                        </div>

                        {/* VEGCO Card - Golden Highlight */}
                        <div style={{
                            padding: '3.5rem',
                            background: 'linear-gradient(145deg, #064e3b, #065f46)',
                            borderRadius: '3rem',
                            color: 'white',
                            position: 'relative',
                            boxShadow: '0 30px 60px -15px rgba(6, 78, 59, 0.3)',
                            transform: 'scale(1.05)'
                        }}>
                            <div style={{
                                position: 'absolute', top: -15, right: 30,
                                background: '#fbbf24', color: '#064e3b',
                                padding: '0.5rem 1rem', borderRadius: '999px',
                                fontWeight: '800', fontSize: '0.8rem', letterSpacing: '0.05em'
                            }}>
                                BEST VALUE
                            </div>
                            <h3 style={{ fontSize: '1.8rem', color: '#fcd34d', marginBottom: '2.5rem', fontWeight: '800', fontFamily: 'serif' }}>VEGCO Boutique</h3>
                            <div style={{ display: 'grid', gap: '1.75rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem' }}>
                                    <span>Sticker Price</span>
                                    <span style={{ fontWeight: '700' }}>₹100/kg</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem' }}>
                                    <span>Usable Harvest</span>
                                    <span style={{ color: '#fbbf24', fontWeight: '700' }}>100% Usable</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem' }}>
                                    <span>Buy Requirement</span>
                                    <span style={{ color: '#fbbf24' }}>1.0 kg needed</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem', fontSize: '1.4rem' }}>
                                    <span style={{ color: 'rgba(255,255,255,0.7)' }}>Real Cost for 1kg</span>
                                    <span style={{ fontWeight: '900', color: '#fbbf24' }}>₹100</span>
                                </div>
                            </div>
                            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px dashed rgba(255,255,255,0.2)', textAlign: 'center', color: '#fbbf24', fontWeight: 'bold' }}>
                                SAVE 8% + ZERO PREP TIME
                            </div>
                        </div>
                    </div>

                    <p style={{ marginTop: '5rem', color: '#94a3b8', fontSize: '1.2rem', fontStyle: 'italic', maxWidth: '600px', margin: '5rem auto 0 auto' }}>
                        "We don't just sell produce. We sell efficiency."
                    </p>
                </div>
            </section>

            {/* Footer Call to Action */}
            <section style={{
                padding: '12rem 2rem',
                textAlign: 'center',
                background: 'linear-gradient(to top, #fdfcf8, white)'
            }}>
                <h2 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '3rem', fontFamily: 'serif', color: '#064e3b' }}>
                    Taste the difference of <br /> Boutique Engineering.
                </h2>
                <button
                    onClick={onBack}
                    style={{
                        padding: '1.5rem 4rem',
                        fontSize: '1.2rem',
                        fontWeight: '800',
                        borderRadius: '999px',
                        background: '#064e3b',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 25px 50px -12px rgba(6, 78, 59, 0.4)',
                        transition: 'all 0.3s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                    BROWSE THE V ONE CATALOG
                </button>
            </section>
        </div>
    );
}
