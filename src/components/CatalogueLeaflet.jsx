import React, { useEffect } from 'react';
import products from '../data/products.json';
import { Leaf, Droplets, Flame, Weight, Clock, Activity, Target, ShieldCheck, AlertCircle, Zap } from 'lucide-react';

const CatalogueLeaflet = ({ onBack }) => {

    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@400;500;600;700&display=swap');

            @media print {
                @page { margin: 0; size: A4; }
                body {
                    margin: 0; 
                    -webkit-print-color-adjust: exact; 
                    print-color-adjust: exact; 
                    background: white !important;
                    color: black !important;
                    font-size: 10px;
                }
                .no-print { display: none !important; }
                .leaflet-container { 
                    box-shadow: none !important; 
                    border: none !important; 
                    width: 100% !important; 
                    max-width: 210mm !important; 
                    margin: 0 !important; 
                    padding: 10mm !important;
                    background: white !important;
                }
                .page-break { page-break-before: always; }
                .avoid-break { break-inside: avoid; }
            }
        `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    const categories = [...new Set(products.map(p => p.category))];

    // --- DATA EXTRACTED FROM COMPONENTS ---

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

    const journeySteps = [
        {
            title: "Precision Sowing",
            tag: "STAGE 01",
            duration: "Day 0-3",
            description: "Seeds are placed in secondary-grade sterile coco-peat plugs. No soil, no pathogens.",
            info: ["Sterile Media", "98% Germination", "Pathogen Free"]
        },
        {
            title: "Nutrient Infusion",
            tag: "STAGE 02",
            duration: "Day 4-10",
            description: "Seedlings move to NFT channels. A thin film of nutrient-rich water flows over roots 24/7.",
            info: ["Liquid Nutrition", "Precision pH Control", "Root Oxygenation"]
        },
        {
            title: "Accelerated Growth",
            tag: "STAGE 03",
            duration: "Day 11-25",
            description: "Under clinical LED spectrums, crops grow 300% faster without pesticides.",
            info: ["LED Optimization", "Zero Blemishes", "Vibrant Pigmentation"]
        },
        {
            title: "Clinical Harvest",
            tag: "STAGE 04",
            duration: "Day 26-28",
            description: "Crops are harvested at peak phyto-density. Roots are kept intact for freshness.",
            info: ["Living Roots", "Zero Waste", "Hyper-Fresh"]
        }
    ];

    const comparison = [
        { feature: "Soil Quality", mandi: "Unknown (Contaminated)", hydro: "Sterile Coco-Peat" },
        { feature: "Water Source", mandi: "Groundwater/Canal", hydro: "Double Purified RO" },
        { feature: "Pesticides", mandi: "Heavy Lead/Chemicals", hydro: "100% Residue-Free" },
        { feature: "Nutrient Density", mandi: "Depleted Soil Values", hydro: "Optimized Minerals" },
        { feature: "Logistics", mandi: "48-72h in Sunlight", hydro: "<4h Farm-to-Fork" }
    ];

    const recipes = [
        {
            name: "Emerald Detox Bowl",
            description: "A high-precision nutrient dense bowl engineered for cellular recovery.",
            time: "12 mins",
            calories: 210,
            clinical: "Anti-Inflammatory",
            image: "./recipe_detox_bowl_8k.png"
        },
        {
            name: "Clinical Palak Paneer",
            description: "High-protein zero-grit spinach reduction with organic cottage cheese.",
            time: "20 mins",
            calories: 320,
            clinical: "Bone Density",
            image: "./recipe_palak_paneer_8k.png"
        },
        {
            name: "V-Methi Thepla Protocol",
            description: "A diabetic-friendly iron-bound flatbread with fresh hydroponic Fenugreek.",
            time: "25 mins",
            calories: 145,
            clinical: "Glycemic Regulation",
            image: "./recipe_methi_thepla_8k.png"
        },
        {
            name: "Solar Moong Chilla",
            description: "High-absorption protein wrap with living radish microgreens.",
            time: "15 mins",
            calories: 180,
            clinical: "Digestive Efficiency",
            image: "./recipe_moong_dal_chilla_8k.png"
        },
        {
            name: "Curry Leaf Hydrosol Pesto",
            description: "A potent antioxidant elixir using A-grade hydroponic Curry Leaves.",
            time: "10 mins",
            calories: 95,
            clinical: "Neuro-Protection",
            image: "./recipe_curry_leaf_pesto_8k.png"
        },
        {
            name: "Basil-V Carbonara",
            description: "Italian precision meets lab-grown Italian Basil for a flawless aromatic profile.",
            time: "25 mins",
            calories: 450,
            clinical: "Cardiac Health",
            image: "./recipe_basil_carbonara_8k.png"
        }
    ];

    const getWeight = (product) => {
        if (product.category === 'Microgreens') return 'box';
        if (product.category === 'Kits') return 'pc';
        if (product.title.toLowerCase().includes('tomato')) return '200g cup';
        if (product.title.toLowerCase().includes('chilli')) return '250g';
        return '200g';
    };

    return (
        <div className="catalogue-leaflet-page" style={{
            minHeight: '100vh',
            backgroundColor: 'var(--color-bg-light)',
            backgroundImage: 'url("./luxury_global_texture_v2.png")',
            backgroundSize: '300px',
            backgroundRepeat: 'repeat',
            color: 'var(--color-text-main)',
            padding: '4rem 2rem',
            fontFamily: "'Inter', sans-serif"
        }}>
            {/* Controls */}
            <div className="no-print" style={{
                position: 'fixed',
                top: 0, scale: '1', left: 0, width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(28, 25, 23, 0.05)', display: 'flex', justifyContent: 'space-between', zIndex: 1000
            }}>
                <button onClick={onBack} className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>&larr; Back</button>
                <button onClick={() => window.print()} className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Print Full Leaflet</button>
            </div>

            <div className="leaflet-container" style={{
                maxWidth: '210mm',
                margin: '3rem auto',
                background: 'white',
                padding: '15mm',
                boxShadow: 'var(--shadow-xl)',
            }}>

                {/* --- HEADER --- */}
                <div style={{ textAlign: 'center', borderBottom: '2px solid rgba(28, 25, 23, 0.1)', paddingBottom: '2rem', marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '4rem', margin: 0, fontFamily: "'Playfair Display', serif", color: 'var(--color-text-main)' }}>VEGCO</h1>
                    <p style={{ letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--color-text-light)' }}>Full Integrated Catalogue</p>
                </div>

                {/* --- SECTION 1: PRODUCT CATALOGUE --- */}
                {categories.map((category) => (
                    <div key={category} style={{ marginBottom: '2rem', pageBreakInside: 'avoid' }}>
                        <h3 style={{ textTransform: 'uppercase', borderBottom: '1px solid rgba(28, 25, 23, 0.1)', paddingBottom: '0.5rem', color: 'var(--color-primary-dark)', fontFamily: 'var(--font-serif)' }}>{category}</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '1rem' }}>
                            {products.filter(p => p.category === category).map(product => (
                                <div key={product.id} className="avoid-break" style={{ border: '1px solid rgba(28, 25, 23, 0.05)', padding: '0.5rem' }}>
                                    <div style={{ aspectRatio: '4/3', width: '100%', background: '#f5f5f4', marginBottom: '0.5rem' }}>
                                        <img src={product.image.startsWith('/') ? '.' + product.image : product.image} alt={product.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div style={{ fontWeight: 'bold', fontSize: '0.9rem', color: 'var(--color-text-main)' }}>{product.title}</div>
                                    <div style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>
                                        ₹{product.price}
                                        <span style={{ fontSize: '0.7rem', fontWeight: 'normal', opacity: 0.8, marginLeft: '4px' }}>/ {getWeight(product)}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="page-break" />

                {/* --- SECTION 2: RATE CARD --- */}
                <div style={{ marginTop: '2rem' }}>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', marginBottom: '1.5rem', textAlign: 'center', color: 'var(--color-text-main)' }}>Commercial Rate Card</h2>
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
                        <thead>
                            <tr style={{ background: '#1c1917', color: '#fff' }}>
                                <th style={{ padding: '0.8rem', textAlign: 'left' }}>PRODUCT</th>
                                <th style={{ padding: '0.8rem', textAlign: 'right' }}>COMMERCIAL RATE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rateCardItems.map((item, i) => (
                                <tr key={i} style={{ borderBottom: '1px solid rgba(28, 25, 23, 0.1)' }}>
                                    <td style={{ padding: '0.8rem', color: 'var(--color-text-main)' }}>
                                        <div style={{ fontWeight: '600' }}>{item.name}</div>
                                        <div style={{ fontSize: '0.75rem', fontStyle: 'italic', fontFamily: 'serif', color: '#b45309' }}>{item.scientific}</div>
                                    </td>
                                    <td style={{ padding: '0.8rem', textAlign: 'right', fontWeight: 'bold', color: 'var(--color-primary)' }}>{item.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="page-break" />

                {/* --- SECTION 3: SEED TO SCALE (JOURNEY) --- */}
                <div style={{ marginTop: '2rem' }}>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', marginBottom: '1.5rem', textAlign: 'center', color: 'var(--color-text-main)' }}>Seed-to-Scale Protocol</h2>

                    {/* Steps Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        {journeySteps.map((step, i) => (
                            <div key={i} className="avoid-break" style={{ border: '1px solid rgba(28, 25, 23, 0.1)', padding: '1rem', background: '#fdfcf8' }}>
                                <div style={{ fontSize: '0.7rem', color: 'var(--color-text-light)', fontWeight: 'bold' }}>{step.tag} • {step.duration}</div>
                                <h4 style={{ fontSize: '1.1rem', margin: '0.5rem 0', color: 'var(--color-text-main)' }}>{step.title}</h4>
                                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{step.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Comparison Table */}
                    <div style={{ marginTop: '3rem', border: '1px solid rgba(28, 25, 23, 0.1)', borderRadius: '8px', overflow: 'hidden' }}>
                        <div style={{ background: '#1c1917', color: '#fff', padding: '0.5rem', textAlign: 'center', fontWeight: 'bold' }}>CONTROL CHECK</div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', fontSize: '0.8rem' }}>
                            <div style={{ padding: '0.5rem', fontWeight: 'bold', borderBottom: '1px solid #e7e5e4' }}>PARAMETER</div>
                            <div style={{ padding: '0.5rem', fontWeight: 'bold', borderBottom: '1px solid #e7e5e4', color: '#ef4444' }}>TRADITIONAL</div>
                            <div style={{ padding: '0.5rem', fontWeight: 'bold', borderBottom: '1px solid #e7e5e4', color: '#16a34a' }}>VEGCO</div>
                            {comparison.map((row, i) => (
                                <React.Fragment key={i}>
                                    <div style={{ padding: '0.5rem', borderBottom: '1px solid #e7e5e4' }}>{row.feature}</div>
                                    <div style={{ padding: '0.5rem', borderBottom: '1px solid #e7e5e4', color: 'var(--color-text-light)' }}>{row.mandi}</div>
                                    <div style={{ padding: '0.5rem', borderBottom: '1px solid #e7e5e4', fontWeight: 'bold' }}>{row.hydro}</div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="page-break" />



                {/* Footer */}
                <div style={{ textAlign: 'center', marginTop: '4rem', padding: '2rem', borderTop: '1px solid #e7e5e4', color: 'var(--color-text-light)', fontSize: '0.9rem', fontWeight: 'bold' }}>
                    <div style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>CONTACT: 9817 50 60 80</div>
                    VEGCO HYDROPONICS • 2025 ALL RIGHTS RESERVED
                </div>

            </div>
        </div>
    );
};

export default CatalogueLeaflet;
