import React, { useState, useEffect } from 'react';
import { Loader2, CheckCircle, ShieldCheck } from 'lucide-react';

export default function PaymentGateway({ amount, onUserPaid }) {
    const [status, setStatus] = useState('processing'); // processing, success

    useEffect(() => {
        // Fake processing time
        const timer = setTimeout(() => {
            setStatus('confirming');
            setTimeout(() => {
                onUserPaid();
            }, 1500);
        }, 2000);
        return () => clearTimeout(timer);
    }, [onUserPaid]);

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(28, 25, 23, 0.4)',
            backdropFilter: 'blur(10px)',
            zIndex: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{
                background: '#fff',
                padding: '3rem',
                borderRadius: '2rem',
                width: '90%',
                maxWidth: '450px',
                textAlign: 'center',
                boxShadow: 'var(--shadow-xl)',
                border: '1px solid rgba(28, 25, 23, 0.05)'
            }}>
                {status === 'processing' && (
                    <div className="animate-fade-up">
                        <div style={{ marginBottom: '2rem', display: 'inline-block', position: 'relative' }}>
                            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(28, 25, 23, 0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <ShieldCheck size={40} color="var(--color-primary)" />
                            </div>
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '400', marginBottom: '1rem', fontFamily: 'var(--font-serif)', color: 'var(--color-text-main)' }}>Processing Payment</h3>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '2.5rem', fontFamily: 'var(--font-sans)', fontSize: '1rem' }}>Securely charging <span style={{ fontWeight: '700', color: 'var(--color-text-main)' }}>₹{amount}</span>...</p>
                        <div style={{ display: 'flex', justifyContent: 'center', color: 'var(--color-primary)' }}>
                            <Loader2 className="spin" size={32} style={{ animation: 'spin 1s linear infinite' }} />
                        </div>
                        <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
                    </div>
                )}

                {status === 'confirming' && (
                    <div className="animate-fade-up">
                        <div style={{ marginBottom: '2rem', display: 'inline-block' }}>
                            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(22, 163, 74, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <CheckCircle size={40} color="var(--color-primary)" />
                            </div>
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '400', marginBottom: '1rem', fontFamily: 'var(--font-serif)', color: 'var(--color-primary-dark)' }}>Payment Approved</h3>
                        <p style={{ color: 'var(--color-text-muted)' }}>Redirecting to order confirmation...</p>
                    </div>
                )}
            </div>
        </div>
    );
}
