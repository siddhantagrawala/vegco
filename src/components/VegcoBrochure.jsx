import React, { useEffect } from 'react';
import products from '../data/products.json';
import {
    ShieldCheck, AlertCircle, Zap, Activity, Target, Clock, MapPin, Phone, Instagram, Globe
} from 'lucide-react';

const VegcoBrochure = ({ onBack }) => {

    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600;700;800;900&display=swap');

            @media print {
                @page { margin: 0; size: A4 portrait; }
                body {
                    margin: 0; 
                    -webkit-print-color-adjust: exact; 
                    print-color-adjust: exact; 
                    background: white !important;
                    color: black !important;
                }
                .no-print { display: none !important; }
                .brochure-container { 
                    width: 210mm !important; 
                    height: auto !important;
                    margin: 0 !important; 
                    border: none !important;
                    background: white !important;
                }
                .page {
                    min-height: 297mm;
                    width: 210mm;
                    page-break-after: always;
                    position: relative;
                    overflow: hidden;
                    background: #fff;
                    display: flex;
                    flex-direction: column;
                }
                .page:last-child {
                    page-break-after: auto;
                }
                * { print-color-adjust: exact; }
            }
        `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    // --- PAGINATION LOGIC ---
    const ITEMS_PER_PAGE = 6;
    const productPages = [];
    for (let i = 0; i < products.length; i += ITEMS_PER_PAGE) {
        productPages.push(products.slice(i, i + ITEMS_PER_PAGE));
    }

    const comparison = [
        { feature: "Soil Quality", mandi: "Unknown (Contaminated)", hydro: "Sterile Coco-Peat" },
        { feature: "Water Source", mandi: "Groundwater/Canal", hydro: "Double Purified RO" },
        { feature: "Pesticides", mandi: "Heavy Lead/Chemicals", hydro: "100% Residue-Free" },
        { feature: "Logistics", mandi: "48-72h in Sunlight", hydro: "<4h Farm-to-Fork" }
    ];

    const journeySteps = [
        { tag: "01", title: "Precision Sowing", desc: "Sterile Media" },
        { tag: "02", title: "Nutrient Infusion", desc: "Mineral Dosing" },
        { tag: "03", title: "LED Optimization", desc: "Spectrum Growth" },
        { tag: "04", title: "Clinical Harvest", desc: "Zero Residue" },
    ];

    const recipes = [
        { name: "Detox Bowl", cal: "210 kcal", benefit: "Anti-Inflammatory", img: "./recipe_detox_bowl_8k.png" },
        { name: "Palak Paneer", cal: "320 kcal", benefit: "Bone Density", img: "./recipe_palak_paneer_8k.png" },
        { name: "Methi Thepla", cal: "145 kcal", benefit: "Glycemic Control", img: "./recipe_methi_thepla_8k.png" },
    ];

    const rateCardItems = [
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

    const getWeight = (product) => {
        if (product.category === 'Microgreens') return 'box';
        if (product.category === 'Kits') return 'pc';
        if (product.title.toLowerCase().includes('tomato')) return '200g cup';
        if (product.title.toLowerCase().includes('chilli')) return '250g';
        return '200g';
    };

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: 'var(--color-bg-light)',
            backgroundImage: 'url("./luxury_global_texture_v2.png")',
            backgroundSize: '300px',
            backgroundRepeat: 'repeat',
            display: 'flex',
            justifyContent: 'center',
            padding: '2rem',
            fontFamily: "'Inter', sans-serif"
        }}>
            {/* Controls */}
            <div className="no-print" style={{
                position: 'fixed', top: '2rem', left: '2rem', zIndex: 1000
            }}>
                <button
                    onClick={onBack}
                    className="btn btn-outline"
                    style={{ padding: '0.6rem 1.2rem', background: '#fff' }}
                >
                    &larr; Back
                </button>
            </div>
            <div className="no-print" style={{
                position: 'fixed', top: '2rem', right: '2rem', zIndex: 1000
            }}>
                <button
                    onClick={() => window.print()}
                    className="btn btn-primary"
                    style={{ padding: '0.6rem 2rem' }}
                >
                    PRINT BROCHURE ({2 + productPages.length + 2} PAGES)
                </button>
            </div>

            <div className="brochure-container" style={{
                width: '210mm',
                background: 'white',
                boxShadow: 'var(--shadow-xl)',
            }}>

                {/* === PAGE 1: COVER PAGE (Kept Dark with Light Text - High Contrast for Print) === */}
                <div className="page" style={{
                    height: '297mm',
                    background: '#0a0a0a',
                    color: 'white',
                    display: 'flex', flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '3rem',
                    boxSizing: 'border-box',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                        backgroundImage: 'url("./luxury_greenhouse_8k.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.4,
                        zIndex: 0
                    }} />

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{ fontSize: '0.8rem', letterSpacing: '0.3em', color: 'var(--color-primary-light)', fontWeight: 'bold', marginBottom: '1rem' }}>
                            HYDROPONIC STANDARD V2.0
                        </div>
                        <h1 style={{
                            fontSize: '6rem', fontFamily: "'Playfair Display', serif",
                            margin: 0, lineHeight: 0.9, color: 'white'
                        }}>
                            VEGCO<span style={{ color: 'var(--color-primary)' }}>.</span>
                        </h1>
                        <p style={{ fontSize: '1.5rem', fontWeight: '300', color: '#fff', marginTop: '1rem', maxWidth: '400px' }}>
                            Precision engineered flora for the modern culinary clinic.
                        </p>
                        <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-primary-light)', fontWeight: 'bold', fontSize: '1.2rem' }}>
                            <Phone size={24} /> 9817 50 60 80
                        </div>
                    </div>

                    <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: '3rem', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '2rem' }}>
                        <div>
                            <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--color-primary-light)' }}>&lt;4h</div>
                            <div style={{ fontSize: '0.7rem', letterSpacing: '0.1em' }}>FARM TO TABLE</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--color-primary-light)' }}>0%</div>
                            <div style={{ fontSize: '0.7rem', letterSpacing: '0.1em' }}>RESIDUE</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--color-primary-light)' }}>10x</div>
                            <div style={{ fontSize: '0.7rem', letterSpacing: '0.1em' }}>NUTRIENT DENSITY</div>
                        </div>
                    </div>
                </div>

                {/* === PAGE 2: PROTOCOL & COMPARISON (Strictly Black Text) === */}
                <div className="page" style={{
                    height: '297mm',
                    padding: '3rem',
                    boxSizing: 'border-box',
                    background: '#fdfcf8',
                    display: 'flex', flexDirection: 'column',
                    color: '#1c1917' /* Force Dark Gray */
                }}>
                    <h2 style={{ fontSize: '3rem', fontFamily: "'Playfair Display', serif", margin: '0 0 3rem 0', color: '#1c1917' }}>
                        The Protocol
                    </h2>

                    <div style={{ marginBottom: '4rem' }}>
                        <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ position: 'absolute', top: '20px', left: 0, right: 0, height: '4px', background: '#e7e5e4', zIndex: 0 }} />
                            {journeySteps.map((step, i) => (
                                <div key={i} style={{ position: 'relative', zIndex: 1, width: '22%', background: 'white', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #e7e5e4', boxShadow: 'none' }}>
                                    <div style={{ width: '40px', height: '40px', background: '#1c1917', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1rem', marginBottom: '1rem' }}>{step.tag}</div>
                                    <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', color: '#1c1917', fontWeight: 'bold' }}>{step.title}</h4>
                                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#57534e', fontWeight: '600' }}>{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ background: 'white', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 0 0 1px #e7e5e4', flex: 1 }}>
                        <div style={{ background: '#1c1917', padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', color: 'white' }}>
                            <span style={{ fontWeight: 'bold' }}>ANALYSIS PARAMETER</span>
                            <div style={{ display: 'flex', gap: '4rem' }}>
                                <span style={{ color: '#fca5a5', fontWeight: 'bold' }}>TRADITIONAL</span>
                                <span style={{ color: '#86efac', fontWeight: 'bold' }}>VEGCO HYDRO</span>
                            </div>
                        </div>
                        <div style={{ padding: '0 2rem' }}>
                            {comparison.map((row, i) => (
                                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '1.5rem 0', borderBottom: '1px solid #e7e5e4' }}>
                                    <span style={{ fontWeight: '700', color: '#1c1917' }}>{row.feature}</span>
                                    <div style={{ display: 'flex', gap: '4rem', textAlign: 'right' }}>
                                        <span style={{ color: '#b91c1c', width: '150px', fontWeight: '700' }}>{row.mandi}</span>
                                        <span style={{ color: '#15803d', width: '150px', fontWeight: '800' }}>{row.hydro}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* === PAGE 3+: DYNAMIC CATALOGUE PAGES (Strictly Black Text) === */}
                {productPages.map((pageProducts, pageIndex) => (
                    <div key={pageIndex} className="page" style={{
                        height: '297mm',
                        padding: '3rem',
                        boxSizing: 'border-box',
                        background: 'white',
                        color: '#1c1917'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2rem', borderBottom: '2px solid #1c1917', paddingBottom: '1rem' }}>
                            <h2 style={{ fontSize: '2.5rem', fontFamily: "'Playfair Display', serif", margin: 0, color: '#1c1917' }}>Signature Collection</h2>
                            <span style={{ fontWeight: 'bold', color: '#1c1917' }}>PAGE {0 + 3 + pageIndex}</span>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                            {pageProducts.map((product) => (
                                <div key={product.id} style={{ display: 'flex', gap: '1rem', border: '1px solid #e7e5e4', padding: '1rem', borderRadius: '1rem' }}>
                                    <div style={{ width: '140px', height: '140px', flexShrink: 0, border: '1px solid #e7e5e4' }}>
                                        <img src={product.image.startsWith('/') ? '.' + product.image : product.image} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.1)' }} />
                                    </div>
                                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#1c1917', fontWeight: '800' }}>{product.title}</h3>
                                            <span style={{ color: '#1c1917', fontWeight: 'bold', fontSize: '1.2rem' }}>
                                                ₹{product.price}
                                                <span style={{ fontSize: '0.8rem', opacity: 0.7, marginLeft: '4px' }}>/ {getWeight(product)}</span>
                                            </span>
                                        </div>

                                        <div style={{ margin: '1rem 0', background: '#f5f5f4', padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid #e7e5e4' }}>
                                            <div style={{ fontSize: '0.65rem', fontWeight: '900', color: '#1c1917', marginBottom: '0.2rem' }}>ENERGY INDEX / KCAL</div>
                                            <div style={{ height: '6px', background: '#fff', borderRadius: '3px', border: '1px solid #e7e5e4' }}>
                                                <div style={{ width: '60%', height: '100%', background: '#1c1917', borderRadius: '2px' }} />
                                            </div>
                                        </div>

                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', fontSize: '0.75rem', gap: '0.3rem', color: '#1c1917' }}>
                                            {product.nutrients?.minerals?.slice(0, 2).map((m, i) => (
                                                <div key={i}><span style={{ fontWeight: '600' }}>{m.name}:</span> <span style={{ color: '#1c1917', fontWeight: '900' }}>{m.value || 'High'}</span></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginTop: 'auto', textAlign: 'center', fontSize: '0.8rem', color: '#1c1917', fontWeight: 'bold' }}>
                            {pageIndex < productPages.length - 1 ? 'Continued...' : 'End of Collection'}
                        </div>
                    </div>
                ))}

                {/* === PAGE: CLINICAL PROTOCOLS === */}
                <div className="page" style={{
                    height: '297mm',
                    padding: '3rem',
                    boxSizing: 'border-box',
                    background: '#fdfcf8',
                    display: 'flex',
                    flexDirection: 'column',
                    color: '#1c1917'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2rem', borderBottom: '2px solid #1c1917', paddingBottom: '1rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontFamily: "'Playfair Display', serif", margin: 0, color: '#1c1917' }}>Clinical Lab</h2>
                        <span style={{ fontWeight: 'bold', color: '#1c1917' }}>PAGE {0 + 3 + productPages.length}</span>
                    </div>

                    <div style={{ marginBottom: '4rem' }}>
                        <h3 style={{ textTransform: 'uppercase', marginBottom: '1.5rem', color: '#1c1917', fontWeight: '800' }}>Core Protocols</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            {recipes.map((r, i) => (
                                <div key={i} style={{ background: 'white', padding: '1rem', borderRadius: '0.8rem', display: 'flex', gap: '1rem', alignItems: 'center', boxShadow: 'none', border: '1px solid #e7e5e4' }}>
                                    <img src={r.img} style={{ width: '60px', height: '60px', borderRadius: '0.5rem', objectFit: 'cover', border: '1px solid #e7e5e4' }} />
                                    <div>
                                        <div style={{ fontWeight: '900', color: '#1c1917', fontSize: '1.1rem' }}>{r.name}</div>
                                        <div style={{ fontSize: '0.85rem', color: '#57534e', fontWeight: '600' }}>{r.cal} • {r.benefit}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* === PAGE: RATE CARD & BACK COVER === */}
                <div className="page" style={{
                    height: '297mm',
                    padding: '3rem',
                    boxSizing: 'border-box',
                    background: '#1c1917', // Dark theme for the final page
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'white'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2rem', borderBottom: '2px solid rgba(255,255,255,0.2)', paddingBottom: '1rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontFamily: "'Playfair Display', serif", margin: 0, color: 'white' }}>Commercial Rates</h2>
                        <span style={{ fontWeight: 'bold', color: 'rgba(255,255,255,0.5)' }}>PAGE {0 + 3 + productPages.length + 1}</span>
                    </div>

                    <div style={{
                        flex: 1,
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '1rem',
                        columnGap: '3rem',
                        alignContent: 'start',
                        marginBottom: '2rem' // Ensure space before footer
                    }}>
                        {rateCardItems.map((item, i) => (
                            <div key={i} style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'baseline',
                                borderBottom: '1px solid rgba(255,255,255,0.1)',
                                padding: '0.4rem 0'
                            }}>
                                <div>
                                    <div style={{ fontWeight: '500', fontSize: '0.9rem' }}>{item.name}</div>
                                    <div style={{ fontSize: '0.65rem', fontStyle: 'italic', color: '#fbbf24', fontFamily: 'serif', opacity: 0.9 }}>{item.scientific}</div>
                                </div>
                                <div style={{ fontWeight: 'bold', color: '#4ade80', fontSize: '0.9rem' }}>{item.price}</div>
                            </div>
                        ))}
                    </div>

                    {/* Footer / Back Cover Area */}
                    <div style={{ marginTop: 'auto', textAlign: 'center', padding: '2rem 0', borderTop: '2px solid rgba(255,255,255,0.2)' }}>
                        <div style={{ fontSize: '2rem', fontFamily: "'Playfair Display', serif", fontWeight: '900', marginBottom: '0.5rem', color: 'white' }}>
                            VEGCO.
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', fontSize: '0.9rem', color: 'white', fontWeight: 'bold', marginBottom: '1rem' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Phone size={16} /> 9817 50 60 80</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Globe size={16} /> www.vegco.inc</span>
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: '1rem', letterSpacing: '0.2em', fontWeight: '900' }}>
                            HYDROPONIC EXCELLENCE SINCE 2024
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default VegcoBrochure;
