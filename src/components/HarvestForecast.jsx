import React, { useState } from 'react';
import { Calendar, Clock, Lock, Check, Timer } from 'lucide-react';

export default function HarvestForecast({ onBack, forecastData, onReserve }) {
    // Use shared data if available, otherwise fallback (though App.jsx should provide it)
    const forecast = forecastData || [
        { id: 101, name: 'Wasabi Arugula', stage: 'Germinating', daysRemaining: 12, capacity: 50, reserved: 42, status: 'active', image: '/emerald_lettuce_macro_8k.png', hue: '0deg' },
    ];

    const [myReservations, setMyReservations] = useState([]);

    const handleReserve = (id) => {
        if (!myReservations.includes(id)) {
            setMyReservations([...myReservations, id]);
            // Call parent handler to update global stats
            if (onReserve) onReserve(id);
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#f8fafc',
            paddingTop: '100px', // Space for fixed navbar
            paddingBottom: '4rem'
        }}>
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-primary-dark)', fontWeight: '600', letterSpacing: '0.1em', fontSize: '0.9rem' }}>
                        <Calendar size={18} /> LIVE GROW SCHEDULE
                    </div>
                    <h1 style={{ fontSize: '3rem', fontWeight: '800', fontFamily: 'var(--font-serif)', color: 'var(--color-text-main)', marginBottom: '1rem' }}>
                        Harvest Forecast.
                    </h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                        Secure your allocation before the harvest begins. Our crops are engineered for perfection and limited by our strict quality control standards.
                    </p>
                </div>

                {/* Forecast Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                    {forecast.map((crop) => {
                        const isReserved = myReservations.includes(crop.id);
                        const isFull = crop.reserved >= crop.capacity;

                        return (
                            <div key={crop.id} style={{
                                backgroundColor: 'white',
                                borderRadius: '1rem',
                                border: '1px solid rgba(28, 25, 23, 0.05)',
                                padding: '2rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '2rem',
                                boxShadow: 'var(--shadow-sm)',
                                transition: 'transform 0.2s',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                {/* Background Image with Filter */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0, left: 0, width: '100%', height: '100%',
                                    backgroundImage: `url(${crop.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    filter: `hue-rotate(${crop.hue}) brightness(0.7) blur(1px)`,
                                    zIndex: 0,
                                    transition: 'all 0.5s ease',
                                    opacity: 0.15 // Subtle background texture
                                }} />

                                <div style={{
                                    position: 'absolute',
                                    left: '2rem',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    width: '80px', height: '80px',
                                    borderRadius: '50%',
                                    backgroundImage: `url(${crop.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    filter: `hue-rotate(${crop.hue}) contrast(1.2)`,
                                    border: '3px solid white',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                    zIndex: 2
                                }} />

                                {/* Progress Bar Background */}
                                <div style={{
                                    position: 'absolute', bottom: 0, left: 0, height: '4px',
                                    width: `${100 - (crop.daysRemaining / 60 * 100)}%`, // Rough visualization of progress
                                    background: 'var(--color-primary)',
                                    opacity: 0.2
                                }} />

                                {/* Status Indicator */}
                                <div style={{
                                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                                    minWidth: '80px', textAlign: 'center',
                                    marginLeft: '100px', // Clear the image
                                    zIndex: 2, position: 'relative'
                                }}>
                                    <div style={{
                                        width: '50px', height: '50px', borderRadius: '50%',
                                        background: isFull ? '#fee2e2' : '#dcfce7',
                                        color: isFull ? '#ef4444' : '#16a34a',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        marginBottom: '0.5rem'
                                    }}>
                                        {isReserved ? <Check size={24} /> : (isFull ? <Lock size={20} /> : <Timer size={24} />)}
                                    </div>
                                    <span style={{ fontSize: '0.7rem', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase' }}>
                                        {isFull && !isReserved ? 'CLOSED' : 'OPEN'}
                                    </span>
                                </div>

                                {/* Info */}
                                <div style={{ flex: 1, zIndex: 2, position: 'relative' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', fontFamily: 'var(--font-serif)', color: 'var(--color-text-main)' }}>
                                            {crop.name}
                                        </h3>
                                        <span style={{
                                            fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '999px',
                                            background: '#f1f5f9', color: '#64748b', fontWeight: '600'
                                        }}>
                                            {crop.stage}
                                        </span>
                                    </div>

                                    <div style={{ display: 'flex', gap: '2rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                            <Clock size={16} /> T-Minus {crop.daysRemaining} Days
                                        </span>
                                        <span>
                                            Allocation: <strong style={{ color: 'var(--color-text-main)' }}>{Math.round((crop.reserved / crop.capacity) * 100)}% Claimed</strong>
                                        </span>
                                    </div>
                                </div>

                                {/* Action */}
                                <button
                                    onClick={() => !isFull && !isReserved && handleReserve(crop.id)}
                                    disabled={isFull || isReserved}
                                    style={{
                                        backgroundColor: isReserved ? 'var(--color-text-main)' : (isFull ? '#f3f4f6' : 'var(--color-primary-dark)'),
                                        color: isFull ? '#9ca3b8' : 'white',
                                        border: 'none',
                                        padding: '0.8rem 1.5rem',
                                        borderRadius: '0.75rem',
                                        fontWeight: '600',
                                        cursor: isFull || isReserved ? 'default' : 'pointer',
                                        minWidth: '140px'
                                    }}
                                >
                                    {isReserved ? 'RESERVED' : (isFull ? 'WAITLIST FULL' : 'RESERVE SLOT')}
                                </button>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
