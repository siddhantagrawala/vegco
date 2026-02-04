import React from 'react';

const RateCard = ({ onBack }) => {
    const products = [
        // Leafy Greens
        { name: 'Romaine Lettuce', scientific: 'Lactuca sativa var. longifolia', price: '₹300/kg' },
        { name: 'Locarno Lettuce', scientific: 'Lactuca sativa', price: '₹350/kg' },
        { name: 'Butterhead Lettuce', scientific: 'Lactuca sativa var. capitata', price: '₹320/kg' },
        { name: 'Lollo Rosso (Red)', scientific: 'Lactuca sativa var. crispa', price: '₹300/kg' },
        { name: 'Red Lollo Rosso', scientific: 'Lactuca sativa var. crispa', price: '₹300/kg' },
        { name: 'Baby Pak Choi', scientific: 'Brassica rapa subsp. chinensis', price: '₹320/kg' },
        { name: 'Wild Rocket (Arugula)', scientific: 'Diplotaxis tenuifolia', price: '₹300/kg' },
        { name: 'Swiss Chard (Rainbow)', scientific: 'Beta vulgaris subsp. vulgaris', price: '₹350/kg' },
        { name: 'Baby Spinach (Zero Grit)', scientific: 'Spinacia oleracea', price: '₹480/kg' },
        { name: 'Curly Kale', scientific: 'Brassica oleracea var. sabellica', price: '₹380/kg' },
        { name: 'Tuscan Kale (Dino)', scientific: 'Brassica oleracea var. palmifolia', price: '₹250/kg' },

        // Exotic Veg
        { name: 'Red Cherry Tomato', scientific: 'Solanum lycopersicum var. cerasiforme', price: '₹250/kg' },
        { name: 'Red Grape Tomato', scientific: 'Solanum lycopersicum', price: '₹280/kg' },
        { name: 'Yellow Grape Tomato', scientific: 'Solanum lycopersicum', price: '₹300/kg' },
        { name: 'Purple Cauliflower', scientific: 'Brassica oleracea var. botrytis', price: '₹450/kg' },
        { name: 'Yellow Cauliflower', scientific: 'Brassica oleracea var. botrytis', price: '₹350/kg' },
        { name: 'Gourmet Broccoli', scientific: 'Brassica oleracea var. italica', price: '₹280/kg' },
        { name: 'Exotic Celery', scientific: 'Apium graveolens', price: '₹220/kg' },
        { name: 'Green Chilli (Mild)', scientific: 'Capsicum annuum', price: '₹150/kg' },

        // Culinary Herbs
        { name: 'Italian Basil', scientific: 'Ocimum basilicum', price: '₹300/kg' },
        { name: 'Purple Basil (Opal)', scientific: 'Ocimum basilicum var. purpurascens', price: '₹350/kg' },
        { name: 'Rosemary', scientific: 'Salvia rosmarinus', price: '₹1400/kg' },
        { name: 'Thyme', scientific: 'Thymus vulgaris', price: '₹1200/kg' },
        { name: 'Sage', scientific: 'Salvia officinalis', price: '₹1000/kg' },
        { name: 'Parsley (Flat Leaf)', scientific: 'Petroselinum crispum', price: '₹280/kg' },
        { name: 'Cool Spear Mint', scientific: 'Mentha spicata', price: '₹250/kg' },
    ];

    return (
        <div className="rate-card-page" style={{
            minHeight: '100vh',
            backgroundColor: 'var(--color-bg-light)',
            backgroundImage: 'url("/luxury_global_texture_v2.png")',
            backgroundSize: '300px',
            backgroundRepeat: 'repeat',
            padding: '6rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            color: 'var(--color-text-main)',
            overflowX: 'hidden'
        }}>

            <button
                onClick={onBack}
                style={{
                    position: 'absolute',
                    top: '2rem',
                    left: '2rem',
                    background: 'rgba(28, 25, 23, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(28, 25, 23, 0.1)',
                    padding: '0.7rem 1.4rem',
                    borderRadius: '99px',
                    cursor: 'pointer',
                    fontSize: '0.7rem',
                    color: 'var(--color-text-main)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.25em',
                    fontWeight: '800',
                    zIndex: 10,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: 'var(--shadow-sm)'
                }}
                onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.boxShadow = '0 0 30px rgba(21, 128, 61, 0.3)';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(28, 25, 23, 0.05)';
                    e.currentTarget.style.color = 'var(--color-text-main)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }}
            >
                ← Return to Lab
            </button>

            <div className="rate-card-container" style={{
                maxWidth: '900px',
                width: '100%',
                backgroundColor: '#fff',
                padding: '7rem 6rem',
                borderRadius: '1.5rem',
                boxShadow: 'var(--shadow-xl)',
                border: '1px solid rgba(28, 25, 23, 0.05)',
                position: 'relative',
                overflow: 'hidden',
                animation: 'fadeUp 1.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
                zIndex: 2,
            }}>
                {/* Glowing Emerald Core */}
                <div style={{
                    position: 'absolute',
                    top: '-100px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '400px',
                    height: '200px',
                    background: 'radial-gradient(ellipse at center, rgba(21, 128, 61, 0.05) 0%, transparent 70%)',
                    zIndex: -1
                }} />

                <div style={{ textAlign: 'center', marginBottom: '7rem' }}>
                    <div style={{
                        color: 'var(--color-primary)',
                        fontSize: '0.7rem',
                        fontWeight: '900',
                        letterSpacing: '1em',
                        textTransform: 'uppercase',
                        marginBottom: '2.5rem',
                        opacity: 0.9,
                    }}>
                        FACILITY-BORN • REVOLUTION
                    </div>
                    <h1 style={{
                        fontSize: '6.5rem',
                        fontWeight: '200',
                        letterSpacing: '0.35em',
                        color: 'var(--color-text-main)',
                        margin: '0 0 1.5rem 0',
                        textTransform: 'uppercase',
                        fontFamily: 'var(--font-serif)',
                        lineHeight: 1
                    }}>
                        VEGCO
                    </h1>
                    <div style={{ height: '1px', width: '100px', background: 'linear-gradient(to right, transparent, rgba(21, 128, 61, 0.6), transparent)', margin: '3rem auto' }} />
                    <p style={{
                        fontSize: '0.9rem',
                        letterSpacing: '0.6em',
                        color: 'var(--color-text-light)',
                        textTransform: 'uppercase',
                        fontWeight: '400'
                    }}>
                        Replacing Negotiation with Calculation.
                    </p>
                </div>

                <div style={{ display: 'grid', gap: '3rem' }}>
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="rate-item"
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center', // Changed to center for better alignment
                                animation: `fadeUp 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) ${0.5 + (index * 0.12)}s forwards`,
                                opacity: 0,
                                borderBottom: '1px solid rgba(28, 25, 23, 0.05)',
                                paddingBottom: '1.5rem'
                            }}
                        >
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span style={{
                                    fontSize: '1.6rem',
                                    fontWeight: '300',
                                    color: 'var(--color-text-main)',
                                    fontFamily: 'var(--font-serif)',
                                    letterSpacing: '0.04em'
                                }}>
                                    {product.name}
                                </span>
                                <span style={{
                                    fontSize: '0.85rem',
                                    fontStyle: 'italic',
                                    color: '#b45309', // Gold/Bronze tone
                                    fontFamily: 'serif',
                                    marginTop: '0.2rem',
                                    opacity: 0.9
                                }}>
                                    {product.scientific}
                                </span>
                            </div>
                            <div style={{ flex: 1, borderBottom: '1px solid rgba(28, 25, 23, 0.05)', margin: '0 2rem', height: '0.5rem' }} />
                            <span style={{
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                color: 'var(--color-primary-dark)',
                                letterSpacing: '0.08em',
                                fontFamily: 'var(--font-sans)',
                            }}>
                                {product.price}
                            </span>
                        </div>
                    ))}
                </div>

                <div style={{
                    marginTop: '8rem',
                    textAlign: 'center',
                    borderTop: '1px solid rgba(28, 25, 23, 0.05)',
                    paddingTop: '5rem'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '4rem',
                        color: 'var(--color-text-light)',
                        fontSize: '0.7rem',
                        letterSpacing: '0.4em',
                        textTransform: 'uppercase',
                        fontWeight: '800'
                    }}>
                        <span>RO Purified Water</span>
                        <div style={{ height: '3px', width: '3px', backgroundColor: 'var(--color-primary)', borderRadius: '50%', boxShadow: '0 0 5px var(--color-primary)' }} />
                        <span>Bio-Secure Facility</span>
                        <div style={{ height: '3px', width: '3px', backgroundColor: 'var(--color-primary)', borderRadius: '50%', boxShadow: '0 0 5px var(--color-primary)' }} />
                        <span>Clinical Yield</span>
                    </div>
                    <p style={{
                        marginTop: '3.5rem',
                        color: 'var(--color-primary-dark)',
                        fontSize: '1rem',
                        fontStyle: 'italic',
                        letterSpacing: '0.15em',
                        fontFamily: 'var(--font-serif)',
                        opacity: 0.8
                    }}>
                        "Roots are not nature to us; they are engineering."
                    </p>
                </div>
            </div>

            <div style={{
                marginTop: '7rem',
                opacity: 0.15,
                letterSpacing: '1.5em',
                fontSize: '0.7rem',
                fontWeight: '900',
                textTransform: 'uppercase',
                color: 'var(--color-text-main)',
                zIndex: 2
            }}>
                Technologically Advanced Flora • V ONE
            </div>
        </div>
    );
};

export default RateCard;
