import React, { useEffect, useState } from 'react';

const TransitionOverlay = ({ isTransitioning, onTransitionEnd }) => {
    const [showLogo, setShowLogo] = useState(false);

    useEffect(() => {
        if (isTransitioning) {
            // Trigger logo slightly after shutter closes
            const timer = setTimeout(() => setShowLogo(true), 300);
            return () => clearTimeout(timer);
        } else {
            setShowLogo(false);
        }
    }, [isTransitioning]);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 9999,
                pointerEvents: 'none', // Allow clicks to pass through when hidden (though opacity handles visibility)
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {/* Left Shutter Panel */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '50%',
                    height: '100%',
                    backgroundColor: '#022c22', // Midnight Green
                    background: 'linear-gradient(90deg, #022c22 0%, #0f172a 100%)',
                    transform: isTransitioning ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
                    borderRight: '1px solid rgba(255, 215, 0, 0.1)', // Subtle Gold Line
                    boxShadow: '10px 0 30px rgba(0,0,0,0.5)',
                    zIndex: 2,
                }}
            />

            {/* Right Shutter Panel */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '50%',
                    height: '100%',
                    backgroundColor: '#022c22',
                    background: 'linear-gradient(-90deg, #022c22 0%, #0f172a 100%)',
                    transform: isTransitioning ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
                    borderLeft: '1px solid rgba(255, 215, 0, 0.1)',
                    boxShadow: '-10px 0 30px rgba(0,0,0,0.5)',
                    zIndex: 2,
                }}
            />

            {/* Central Logo / Pulse */}
            <div
                style={{
                    zIndex: 3,
                    opacity: showLogo ? 1 : 0,
                    transform: showLogo ? 'scale(1)' : 'scale(0.8)',
                    transition: 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                }}
            >
                <div style={{
                    width: '80px', height: '80px',
                    backgroundImage: 'url("/vegco_v_final_clean.png")',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.3))'
                }} />
                <span style={{
                    fontFamily: 'var(--font-serif)',
                    color: '#fbbf24', // Amber-400/Gold
                    fontSize: '0.9rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    opacity: 0.8
                }}>Loading Experience</span>
            </div>
        </div>
    );
};

export default TransitionOverlay;
