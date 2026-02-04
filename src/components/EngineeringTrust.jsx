import React, { useRef, useEffect } from 'react';
import { Microscope, ShieldCheck, Activity, Droplets } from 'lucide-react';

export default function EngineeringTrust() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.8; // Slow down slightly for cinematic feel
        }
    }, []);

    return (
        <section style={{
            position: 'relative',
            height: '80vh', // Significant presence
            minHeight: '600px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontFamily: 'Inter, sans-serif'
        }}>
            {/* Cinematic Background */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(15, 23, 42, 0.4)', // Dark overlay for text legibility
                    zIndex: 2
                }}></div>

                {/* Shadow Gradient for smooth transition */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '200px',
                    background: 'linear-gradient(to top, #0f172a 0%, transparent 100%)',
                    zIndex: 3
                }}></div>

                <div style={{ display: 'flex', width: '100%', height: '100%' }}>
                    {/* Left Video: Quality BG */}
                    <div style={{ flex: 1, height: '100%', position: 'relative' }}>
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.1) saturate(1.2)' }}
                        >
                            <source src="/videos/quality_bg.mp4" type="video/mp4" />
                        </video>
                    </div>

                    {/* Right Video: Emerald Harvest */}
                    <div style={{ flex: 1, height: '100%', position: 'relative' }}>
                        <video
                            ref={videoRef}
                            autoPlay
                            loop
                            muted
                            playsInline
                            poster="/trust_poster.png"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.1) saturate(1.2)' }}
                        >
                            <source src="/videos/emerald_harvest.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>

                {/* Fallback Slideshow (Hidden by default, shown if video fails) */}
                <div id="fallback-slideshow" style={{ display: 'none', position: 'absolute', inset: 0 }}>
                    <Slideshow />
                </div>
            </div>

            {/* Content Layer */}
            <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>

                <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.8rem',
                    marginBottom: '2rem', padding: '0.5rem 1.5rem',
                    background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)',
                    borderRadius: '999px', border: '1px solid rgba(255,255,255,0.2)',
                    animation: 'fadeInUp 1s ease-out'
                }}>
                    <Microscope size={18} color="#4ade80" />
                    <span style={{ fontSize: '0.85rem', letterSpacing: '0.15em', fontWeight: '700', textTransform: 'uppercase' }}>
                        Beyond Organic
                    </span>
                </div>

                <h2 style={{
                    fontSize: '4rem',
                    fontWeight: '800',
                    letterSpacing: '-0.03em',
                    marginBottom: '1.5rem',
                    textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                    maxWidth: '800px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    lineHeight: '1.1'
                }}>
                    Engineering the <br />
                    <span style={{
                        background: 'linear-gradient(to right, #4ade80, #22c55e)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>Priva Precision Harvest.</span>
                </h2>

                <p style={{
                    fontSize: '1.25rem',
                    maxWidth: '700px',
                    margin: '0 auto 4rem',
                    color: '#e2e8f0',
                    lineHeight: '1.8',
                    textShadow: '0 2px 4px rgba(0,0,0,0.8)'
                }}>
                    We don't just grow food. We optimize it. From seed to plate, every variable is controlled, every nutrient is calibrated, and every harvest is verified.
                </p>

                {/* Metric Pillars */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    <div style={{ background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(12px)', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <ShieldCheck size={32} color="#4ade80" style={{ marginBottom: '1rem' }} />
                        <div style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>100%</div>
                        <div style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>Pesticide & Pathogen Free</div>
                    </div>
                    <div style={{ background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(12px)', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <Activity size={32} color="#38bdf8" style={{ marginBottom: '1rem' }} />
                        <div style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>PRIVA</div>
                        <div style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>Dutch Automation Core</div>
                    </div>
                    <div style={{ background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(12px)', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <Droplets size={32} color="#facc15" style={{ marginBottom: '1rem' }} />
                        <div style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>-95%</div>
                        <div style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>Water Usage vs. Trad. Farm</div>
                    </div>
                </div>

            </div>

            <style>{`
@keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
}
`}</style>
        </section>
    );

}

function Slideshow() {
    const [index, setIndex] = React.useState(0);
    const images = [
        '/videos/frames/stage1.png',
        '/videos/frames/stage2.png',
        '/videos/frames/stage3.png',
        '/videos/frames/stage4.png'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000); // 3 seconds per slide
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {images.map((src, i) => (
                <img
                    key={src}
                    src={src}
                    alt=""
                    style={{
                        position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
                        opacity: index === i ? 1 : 0,
                        transition: 'opacity 1s ease-in-out',
                        filter: 'contrast(1.1) saturate(1.2)'
                    }}
                />
            ))}
        </div>
    )
}
