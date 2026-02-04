import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Activity } from 'lucide-react';

export default function SearchOverlay({ isOpen, onClose, products, onProductSelect }) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus();
            document.body.style.overflow = 'hidden';
            setQuery('');
            setResults([]);
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    useEffect(() => {
        if (query.trim().length > 1) {
            const filtered = products.filter(p =>
                p.title.toLowerCase().includes(query.toLowerCase()) ||
                p.category.toLowerCase().includes(query.toLowerCase()) ||
                p.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
            );
            setResults(filtered.slice(0, 8)); // Limit to 8 results for premium feel
        } else {
            setResults([]);
        }
    }, [query, products]);

    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            background: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '10vh',
            animation: 'fadeIn 0.3s ease-out'
        }}>
            <style>{`
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
                .search-input::placeholder { color: rgba(255,255,255,0.3); }
                .result-item:hover { background: rgba(255,255,255,0.05); transform: translateX(10px); }
            `}</style>

            <button
                onClick={onClose}
                style={{
                    position: 'absolute', top: '2rem', right: '2rem',
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                    color: 'white', padding: '1rem', borderRadius: '50%', cursor: 'pointer'
                }}
            >
                <X size={24} />
            </button>

            <div style={{ width: '100%', maxWidth: '800px', padding: '0 2rem' }}>
                <div style={{ position: 'relative', marginBottom: '4rem' }}>
                    <Search
                        size={32}
                        color={query ? "#4ade80" : "#64748b"}
                        style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', transition: 'color 0.3s' }}
                    />
                    <input
                        ref={inputRef}
                        type="text"
                        className="search-input"
                        placeholder="Search the VEGCO catalog..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={(e) => e.key === 'Escape' && onClose()}
                        style={{
                            width: '100%',
                            background: 'transparent',
                            border: 'none',
                            borderBottom: '2px solid rgba(255,255,255,0.1)',
                            padding: '1.5rem 0 1.5rem 4rem',
                            fontSize: '2.5rem',
                            fontWeight: '300',
                            color: 'white',
                            outline: 'none',
                            fontFamily: 'Inter, sans-serif'
                        }}
                    />
                    {query && (
                        <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Activity size={16} color="#4ade80" className="animate-pulse" />
                            <span style={{ fontSize: '0.7rem', color: '#4ade80', fontWeight: 'bold', letterSpacing: '0.1em' }}>LIVE FILTERING</span>
                        </div>
                    )}
                </div>

                <div style={{ display: 'grid', gap: '1rem', animation: 'slideUp 0.4s ease-out' }}>
                    {results.length > 0 ? (
                        results.map(product => (
                            <div
                                key={product.id}
                                className="result-item"
                                onClick={() => {
                                    onProductSelect(product);
                                    onClose();
                                }}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '2rem',
                                    padding: '1.5rem', borderRadius: '1.25rem',
                                    cursor: 'pointer', transition: 'all 0.2s ease',
                                    border: '1px solid rgba(255,255,255,0.05)'
                                }}
                            >
                                <div style={{ width: '80px', height: '80px', borderRadius: '12px', overflow: 'hidden', background: '#000' }}>
                                    <img src={product.image} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontSize: '0.7rem', color: '#38bdf8', fontWeight: 'bold', marginBottom: '0.25rem', textTransform: 'uppercase' }}>{product.category}</div>
                                    <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white' }}>{product.title}</div>
                                    <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>{product.description}</div>
                                </div>
                                <ArrowRight size={24} color="#334155" />
                            </div>
                        ))
                    ) : query.length > 1 ? (
                        <div style={{ textAlign: 'center', padding: '4rem', color: '#64748b' }}>
                            <p style={{ fontSize: '1.2rem' }}>No products match your precision search.</p>
                            <p style={{ fontSize: '0.9rem' }}>Try searching for "Lettuce", "Microgreens", or "Kits".</p>
                        </div>
                    ) : (
                        <div style={{ color: '#475569', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
                            {/* Frequently Searched or Featured */}
                            <p style={{ marginBottom: '1rem', fontWeight: '700', textTransform: 'uppercase' }}>Popular Requests</p>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                {['Romaine', 'Basil', 'Detox', 'Swiss Chard'].map(term => (
                                    <button
                                        key={term}
                                        onClick={() => setQuery(term)}
                                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', color: '#94a3b8', padding: '0.5rem 1rem', borderRadius: '999px', cursor: 'pointer' }}
                                    >
                                        {term}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
