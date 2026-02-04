import React, { useState } from 'react';

export default function Checkout({ cart, onPayment, onBack }) {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        pincode: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onPayment(formData);
    };

    return (
        <div className="container" style={{ padding: '4rem 1.5rem', minHeight: '80vh' }}>
            <button onClick={onBack} style={{
                background: 'none',
                border: '1px solid rgba(28, 25, 23, 0.1)',
                padding: '0.6rem 1.2rem',
                borderRadius: '99px',
                color: 'var(--color-text-light)',
                marginBottom: '3rem',
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                transition: 'all 0.3s ease'
            }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-primary)'; e.currentTarget.style.color = 'var(--color-primary)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(28, 25, 23, 0.1)'; e.currentTarget.style.color = 'var(--color-text-light)'; }}
            >
                ← Return to Store
            </button>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
                {/* Form */}
                <div className="animate-fade-up">
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '400', marginBottom: '2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-text-main)' }}>Delivery Details</h2>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-light)' }}>Full Name</label>
                            <input
                                required
                                type="text"
                                placeholder="John Doe"
                                className="glass-panel"
                                style={{ width: '100%', padding: '1rem', borderRadius: '0.75rem', border: '1px solid rgba(28, 25, 23, 0.1)', outline: 'none', fontSize: '1rem', color: 'var(--color-text-main)', fontFamily: 'var(--font-sans)', background: '#fff' }}
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-light)' }}>Phone Number</label>
                            <input
                                required
                                type="tel"
                                placeholder="+91 98765 43210"
                                className="glass-panel"
                                style={{ width: '100%', padding: '1rem', borderRadius: '0.75rem', border: '1px solid rgba(28, 25, 23, 0.1)', outline: 'none', fontSize: '1rem', color: 'var(--color-text-main)', fontFamily: 'var(--font-sans)', background: '#fff' }}
                                value={formData.phone}
                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-light)' }}>Delivery Address</label>
                            <textarea
                                required
                                placeholder="Flat No, Building, Street..."
                                className="glass-panel"
                                style={{ width: '100%', padding: '1rem', borderRadius: '0.75rem', border: '1px solid rgba(28, 25, 23, 0.1)', minHeight: '120px', outline: 'none', fontSize: '1rem', color: 'var(--color-text-main)', fontFamily: 'var(--font-sans)', resize: 'vertical', background: '#fff' }}
                                value={formData.address}
                                onChange={e => setFormData({ ...formData, address: e.target.value })}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-light)' }}>Pincode</label>
                            <input
                                required
                                type="text"
                                placeholder="5600xx"
                                className="glass-panel"
                                style={{ width: '100%', padding: '1rem', borderRadius: '0.75rem', border: '1px solid rgba(28, 25, 23, 0.1)', outline: 'none', fontSize: '1rem', color: 'var(--color-text-main)', fontFamily: 'var(--font-sans)', background: '#fff' }}
                                value={formData.pincode}
                                onChange={e => setFormData({ ...formData, pincode: e.target.value })}
                            />
                        </div>

                        <button className="btn btn-primary" type="submit" style={{ marginTop: '2rem', justifyContent: 'center', padding: '1.25rem', fontSize: '1rem' }}>
                            Proceed to Payment
                        </button>
                    </form>
                </div>

                {/* Order Summary */}
                <div className="animate-fade-up delay-100">
                    <div style={{ padding: '2.5rem', borderRadius: '2rem', backgroundColor: '#fff', border: '1px solid rgba(28, 25, 23, 0.05)', boxShadow: 'var(--shadow-lg)' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '400', marginBottom: '2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-text-main)' }}>Your Selection</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxHeight: '400px', overflowY: 'auto', paddingRight: '0.5rem' }}>
                            {cart.map((item, i) => (
                                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(28, 25, 23, 0.05)' }}>
                                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                        {item.image.endsWith('.mp4') ? (
                                            <video
                                                src={item.image}
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                style={{ width: '60px', height: '60px', borderRadius: '0.75rem', objectFit: 'cover' }}
                                            />
                                        ) : (
                                            <img src={item.image} alt={item.title} style={{ width: '60px', height: '60px', borderRadius: '0.75rem', objectFit: 'cover' }} />
                                        )}
                                        <div>
                                            <div style={{ fontSize: '1rem', fontWeight: '600', fontFamily: 'var(--font-serif)', color: 'var(--color-text-main)' }}>{item.title}</div>
                                            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', marginTop: '0.25rem' }}>Qty: 1</div>
                                        </div>
                                    </div>
                                    <div style={{ fontWeight: '700', color: 'var(--color-text-main)' }}>₹{item.price}</div>
                                </div>
                            ))}
                        </div>
                        <div style={{ borderTop: '2px solid rgba(28, 25, 23, 0.1)', margin: '2rem 0 1rem 0', paddingTop: '2rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--color-text-muted)' }}>
                                <span>Subtotal</span>
                                <span>₹{total}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--color-text-muted)' }}>
                                <span>Delivery</span>
                                <span style={{ color: 'var(--color-primary)' }}>Free</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '400', fontSize: '2rem', marginTop: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-text-main)' }}>
                                <span>Total</span>
                                <span style={{ color: 'var(--color-primary-dark)' }}>₹{total}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
