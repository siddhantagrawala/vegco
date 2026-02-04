import React, { useEffect } from 'react';
import { Check, Package, Calendar } from 'lucide-react';
import confetti from 'https://cdn.skypack.dev/canvas-confetti';

export default function OrderSuccess({ onHome }) {
    useEffect(() => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }, []);

    return (
        <div style={{
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem',
            backgroundImage: 'url("/luxury_global_texture_v2.png")',
            backgroundSize: '300px' // Ensure texture matches body
        }}>
            <div style={{ maxWidth: '600px', width: '100%' }} className="animate-fade-up">
                <div style={{
                    width: '100px',
                    height: '100px',
                    background: 'rgba(22, 163, 74, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 2rem',
                    color: 'var(--color-primary)'
                }}>
                    <Check size={50} strokeWidth={2.5} />
                </div>

                <div style={{ fontSize: '0.8rem', fontWeight: '800', letterSpacing: '0.2em', color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: '1rem' }}>
                    Transaction Successful
                </div>

                <h1 style={{ fontSize: '3.5rem', fontWeight: '400', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-text-main)' }}>Order Confirmed</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', marginBottom: '3rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
                    "Your emerald harvest has been reserved."
                </p>

                <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '2rem', marginBottom: '3rem', textAlign: 'left', backgroundColor: '#fff', boxShadow: 'var(--shadow-lg)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(28, 25, 23, 0.05)' }}>
                        <div style={{ padding: '0.75rem', background: 'rgba(28, 25, 23, 0.03)', borderRadius: '0.75rem' }}>
                            <Package size={24} color="var(--color-primary)" />
                        </div>
                        <div>
                            <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-light)', fontWeight: '700' }}>Order Reference</div>
                            <span style={{ fontWeight: '600', fontSize: '1.1rem', color: 'var(--color-text-main)' }}>#{Math.floor(Math.random() * 100000)}</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <div style={{ padding: '0.75rem', background: 'rgba(28, 25, 23, 0.03)', borderRadius: '0.75rem' }}>
                            <Calendar size={24} color="var(--color-primary)" />
                        </div>
                        <div>
                            <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-light)', fontWeight: '700' }}>Estimated Delivery</div>
                            <span style={{ fontWeight: '600', fontSize: '1.1rem', color: 'var(--color-text-main)' }}>Tomorrow, 7:00 AM - 9:00 AM</span>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                    <button onClick={onHome} className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
                        Continue Shopping
                    </button>
                </div>
            </div>
        </div>
    );
}
