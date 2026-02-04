import React from 'react';
import { ChefHat, Info } from 'lucide-react';

export default function ChefPalate() {
    return (
        <section style={{
            padding: '6rem 2rem',
            background: '#fdfcf8', // Warm boutique background
            borderBottom: '1px solid rgba(0,0,0,0.05)'
        }}>
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.5rem 1rem', background: 'rgba(6, 78, 59, 0.05)',
                        color: '#064e3b', borderRadius: '999px', fontSize: '0.8rem',
                        fontWeight: '700', letterSpacing: '0.1rem', textTransform: 'uppercase',
                        marginBottom: '1.5rem'
                    }}>
                        <ChefHat size={16} /> The Culinary Choice
                    </div>
                    <h2 style={{
                        fontSize: '3rem', fontWeight: '900', color: '#1e293b',
                        fontFamily: 'var(--font-serif)', marginBottom: '1.5rem'
                    }}>
                        The "Chef's Palate"
                    </h2>
                    <p style={{
                        fontSize: '1.25rem', color: '#64748b', maxWidth: '700px',
                        margin: '0 auto', lineHeight: 1.6, fontStyle: 'italic'
                    }}>
                        "The secret ingredient in high-end kitchens." <br />
                        Best for Foodies, Home Chefs, and Hosts. Justifies the price through superior performance.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 1.5fr 1.5fr',
                    background: 'white',
                    borderRadius: '2rem',
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #e2e8f0'
                }}>
                    {/* Header Row */}
                    <div style={{ padding: '1.5rem', background: '#f8fafc', fontWeight: '800', color: '#94a3b8', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.05em', borderBottom: '1px solid #e2e8f0' }}>Sensory Experience</div>
                    <div style={{ padding: '1.5rem', background: '#f8fafc', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.05em', borderBottom: '1px solid #e2e8f0' }}>Standard Market Produce</div>
                    <div style={{ padding: '1.5rem', background: '#064e3b', fontWeight: '800', color: '#fcd34d', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.05em', borderBottom: '1px solid #065f46' }}>VEGCO Harvest</div>

                    {/* Row 1: Texture */}
                    <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b', fontWeight: '700' }}>Texture & Crunch</div>
                    <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0', color: '#64748b' }}>Often limp, leathery, or tough.</div>
                    <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0', color: '#064e3b', fontWeight: '700' }}>Explosive crunch. Audible Snap.</div>

                    {/* Row 2: Flavor */}
                    <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b', fontWeight: '700' }}>Flavor Profile</div>
                    <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0', color: '#64748b' }}>Inconsistent. Can be bitter or metallic.</div>
                    <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0', color: '#064e3b', fontWeight: '700' }}>Sweet, Complex, & Perfectly Balanced.</div>

                    {/* Row 3: Visual */}
                    <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b', fontWeight: '700' }}>Visual Appeal</div>
                    <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0', color: '#64748b' }}>Bruised, insect holes, dull color.</div>
                    <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0', color: '#064e3b', fontWeight: '700' }}>Vibrant, Jewel-Toned, Plating-Ready.</div>

                    {/* Row 4: Shelf Life */}
                    <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b', fontWeight: '700' }}>Shelf Life</div>
                    <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0', color: '#64748b' }}>Wilts within 48 hours in the fridge.</div>
                    <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0', color: '#064e3b', fontWeight: '700' }}>Stays Living & Crisp for 7+ Days.</div>

                    {/* Row 5: The Experience */}
                    <div style={{ padding: '1.5rem', color: '#1e293b', fontWeight: '700' }}>The Experience</div>
                    <div style={{ padding: '1.5rem', color: '#64748b', fontStyle: 'italic' }}>"It's just a vegetable."</div>
                    <div style={{ padding: '1.5rem', color: '#059669', fontWeight: '800', background: 'rgba(16, 185, 129, 0.1)' }}>"It's the highlight of the meal."</div>
                </div>
            </div>
        </section>
    );
}
