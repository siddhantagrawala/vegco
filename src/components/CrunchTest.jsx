import React, { useRef, useState } from 'react';

const CrunchTest = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleCrunch = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
            setIsPlaying(true);
            setTimeout(() => setIsPlaying(false), 1000); // Visual feedback duration
        }
    };

    return (
        <section style={{
            position: 'relative',
            height: '600px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            marginTop: '0'
        }}>
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                poster="/emerald_lettuce_macro_8k.png"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'translate(-50%, -50%)',
                    zIndex: -1,
                    filter: 'brightness(0.5)',
                    backgroundColor: '#1a472a' // Dark green fallback
                }}
            >
                <source src="/video_fresh_lettuce.mp4" type="video/mp4" />
                {/* Fallback Image if video fails - NOW WITH BRIGHTNESS FILTER */}
                <img src="/emerald_lettuce_macro_8k.png" alt="Fresh Lettuce" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5)' }} />
            </video>

            {/* DARK OVERLAY for Guaranteed Contrast */}
            <div style={{
                position: 'absolute', inset: 0,
                background: 'rgba(0,0,0,0.4)', // 40% darkness
                zIndex: 0
            }}></div>

            <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
                <h2 style={{
                    fontSize: '4rem', // Larger
                    fontFamily: 'var(--font-serif)',
                    marginBottom: '1rem',
                    color: '#ffffff',
                    fontWeight: '800',
                    textShadow: '0 4px 20px rgba(0,0,0,0.9)' // Heavy shadow
                }}>
                    The "Crunch" Test
                </h2>
                <p style={{
                    fontSize: '1.25rem',
                    maxWidth: '600px',
                    margin: '0 auto 3rem',
                    color: 'rgba(255,255,255,0.9)',
                    lineHeight: '1.6'
                }}>
                    You can't taste through a screen, but you can see the difference.
                    Experience the visual signature of 100% hydration.
                </p>

                {/* Button Removed as per request */}
            </div>


            <audio ref={audioRef} src="/custom_crunch.wav" preload="auto" />
        </section >
    );
};

export default CrunchTest;
