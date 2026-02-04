import React, { useState, useEffect } from 'react';
import { Lock, TrendingUp, ShoppingBag, Zap, AlertTriangle, Package, Clock, Sprout, Trash2, Calendar, Plus, Save, Edit2, X } from 'lucide-react';

export default function InternalDashboard({ catalog = [], onUpdateProduct = () => { }, onAddProduct = () => { }, onDeleteProduct = () => { }, forecast = [], onUpdateForecast = () => { } }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [pin, setPin] = useState('');
    const [error, setError] = useState(false);
    const [orders, setOrders] = useState([]);
    const [stats, setStats] = useState({ revenue: 0, count: 0, aov: 0 });
    const [wastage, setWastage] = useState(0);

    // Edit Mode State
    const [editingId, setEditingId] = useState(null);
    const [editForm, setEditForm] = useState({});

    // New Product State
    const [isAdding, setIsAdding] = useState(false);
    const [newProduct, setNewProduct] = useState({ title: '', price: '', category: 'Leafy Greens', image: '/products/romaine_lettuce.png' });

    // Toast State
    const [toast, setToast] = useState(null);

    const showToast = (msg, type = 'success') => {
        setToast({ msg, type });
        setTimeout(() => setToast(null), 3000);
    };

    // Load data on mount
    useEffect(() => {
        const loadedOrders = JSON.parse(localStorage.getItem('vegco_orders') || '[]');
        setOrders(loadedOrders);

        const totalRev = loadedOrders.reduce((sum, o) => sum + o.total, 0);

        const savedWastage = JSON.parse(localStorage.getItem('vegco_wastage') || '0');
        setWastage(savedWastage);

        setStats({
            revenue: totalRev,
            count: loadedOrders.length,
            aov: loadedOrders.length ? Math.round(totalRev / loadedOrders.length) : 0
        });
    }, [isAuthenticated]);

    const handleLogin = (e) => {
        e.preventDefault();
        if (pin === '1985') {
            setIsAuthenticated(true);
            setError(false);
        } else {
            setError(true);
            setPin('');
        }
    };

    const handleDump = (product) => {
        if (window.confirm(`Report SPOILAGE for ${product.title}? \n\nThis will:\n1. Mark item as "Sold Out"\n2. Record ₹${product.price * 5} loss (Est. 5 units waste)`)) {
            const loss = product.price * 5;
            const newWastage = wastage + loss;
            setWastage(newWastage);
            localStorage.setItem('vegco_wastage', JSON.stringify(newWastage));
            onUpdateProduct(product.id, { inStock: false }); // Mark out of stock
            showToast(`Reported spoilage for ${product.title}`, 'error');
        }
    };

    const startEdit = (product) => {
        setEditingId(product.id);
        setEditForm({ ...product });
    };

    const saveEdit = () => {
        onUpdateProduct(editingId, editForm);
        setEditingId(null);
        showToast('Product updated successfully');
    };

    const cancelEdit = () => {
        setEditingId(null);
    };

    const handleAddSubmit = (e) => {
        e.preventDefault();
        const productToAdd = {
            ...newProduct,
            id: newProduct.title.toLowerCase().replace(/\s+/g, '-') + '-' + Math.floor(Math.random() * 1000),
            price: Number(newProduct.price),
            inStock: true,
            nutrients: { calories: 0, minerals: [] }, // Default dummy data
            tags: ['New']
        };
        onAddProduct(productToAdd);
        setIsAdding(false);
        setNewProduct({ title: '', price: '', category: 'Leafy Greens', image: '/products/romaine_lettuce.png' });
        showToast('New product added to catalog');
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            onDeleteProduct(id);
            showToast('Product deleted', 'error');
        }
    }

    // Helper to get simulated harvest date
    const getHarvestInfo = (id) => {
        const today = new Date();
        const seed = id.charCodeAt(0) + id.length;
        const daysAgo = seed % 3;
        const harvestDate = new Date(today);
        harvestDate.setDate(today.getDate() - daysAgo);

        const expiryDate = new Date(harvestDate);
        expiryDate.setDate(harvestDate.getDate() + 5);

        const daysToExpiry = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));

        return {
            date: harvestDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
            daysLeft: daysToExpiry
        };
    };

    if (!isAuthenticated) {
        return (
            <div style={{
                height: '100vh',
                backgroundColor: '#0f172a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontFamily: 'Inter, sans-serif'
            }}>
                <div style={{ width: '100%', maxWidth: '320px', padding: '2rem', textAlign: 'center' }}>
                    <div style={{
                        width: '60px', height: '60px', background: 'rgba(255,255,255,0.1)',
                        borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        margin: '0 auto 2rem'
                    }}>
                        <Lock size={24} color="#94a3b8" />
                    </div>
                    <h2 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>Restricted Access</h2>
                    <p style={{ color: '#64748b', marginBottom: '2rem', fontSize: '0.9rem' }}>Enter Ops Code to continue.</p>

                    <form onSubmit={handleLogin}>
                        <input
                            type="password"
                            value={pin}
                            onChange={(e) => setPin(e.target.value)}
                            placeholder="PIN"
                            autoFocus
                            style={{
                                width: '100%',
                                padding: '1rem',
                                background: 'rgba(255,255,255,0.05)',
                                border: error ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '0.5rem',
                                color: 'white',
                                fontSize: '1.5rem',
                                textAlign: 'center',
                                outline: 'none',
                                letterSpacing: '0.5em',
                                marginBottom: '1rem'
                            }}
                        />
                        <button
                            type="submit"
                            style={{
                                width: '100%',
                                padding: '1rem',
                                background: 'white',
                                color: 'black',
                                border: 'none',
                                borderRadius: '0.5rem',
                                fontWeight: '700',
                                cursor: 'pointer'
                            }}
                        >
                            AUTHENTICATE
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div style={{
            backgroundColor: '#0f172a',
            backgroundImage: 'url("/dashboard_bg_chlorophyll.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            padding: '2rem',
            color: 'white',
            fontFamily: 'Inter, sans-serif',
            position: 'relative'
        }}>
            <style>{`
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                .dashboard-btn {
                    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .dashboard-btn:hover {
                    transform: translateY(-1px);
                    filter: brightness(1.1);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                }
                .dashboard-btn:active {
                    transform: translateY(0);
                }
                .product-row {
                    transition: background 0.2s ease;
                }
                .product-row:hover {
                    background: rgba(255,255,255,0.03) !important;
                }
                .stat-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .stat-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                }
            `}</style>
            {/* Toast Notification */}
            {toast && (
                <div style={{
                    position: 'fixed', top: '2rem', right: '2rem',
                    background: toast.type === 'error' ? '#ef4444' : '#22c55e',
                    color: 'white', padding: '1rem 2rem', borderRadius: '0.5rem',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                    fontWeight: '600', zIndex: 100,
                    animation: 'slideIn 0.3s ease-out'
                }}>
                    {toast.msg}
                </div>
            )}

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>

                {/* Header */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '3rem',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    paddingBottom: '2rem',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    background: 'rgba(15, 23, 42, 0.6)',
                    backdropFilter: 'blur(12px)',
                    padding: '2rem',
                    borderRadius: '1rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                    <div>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.25rem 0.75rem',
                            background: 'rgba(34, 197, 94, 0.2)',
                            color: '#4ade80',
                            borderRadius: '999px',
                            fontSize: '0.75rem',
                            fontWeight: '700',
                            marginBottom: '0.5rem',
                            border: '1px solid rgba(34, 197, 94, 0.3)'
                        }}>
                            <Zap size={12} /> GOD MODE // L1
                        </div>
                        <h1 style={{ fontSize: '2rem', fontWeight: '800', letterSpacing: '-0.02em', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Director Dashboard</h1>
                        <p style={{ color: '#cbd5e1' }}>Full Catalog Control & Operations.</p>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem 1.5rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '0.25rem' }}>Total Revenue</div>
                            <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#4ade80' }}>₹ {stats.revenue.toLocaleString()}</div>
                        </div>
                        {/* Wastage Metric */}
                        <div style={{ background: 'rgba(239, 68, 68, 0.15)', padding: '1rem 1.5rem', borderRadius: '1rem', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                            <div style={{ fontSize: '0.875rem', color: '#fca5a5', marginBottom: '0.25rem' }}>Biomass Loss</div>
                            <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#f87171' }}>₹ {wastage.toLocaleString()}</div>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem 1.5rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '0.25rem' }}>Orders</div>
                            <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white' }}>{stats.count}</div>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                    {/* Catalog Command Center */}
                    <div style={{ gridColumn: 'span 2' }}>
                        <div style={{
                            background: 'rgba(15, 23, 42, 0.7)',
                            backdropFilter: 'blur(16px)',
                            borderRadius: '1rem',
                            border: '1px solid rgba(255,255,255,0.1)',
                            overflow: 'hidden',
                            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                        }}>
                            <div style={{
                                padding: '1.5rem',
                                borderBottom: '1px solid rgba(255,255,255,0.1)',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <h2 style={{ fontSize: '1.25rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.75rem', margin: 0, color: 'white' }}>
                                    <Package size={20} color="#4ade80" /> Catalog Manager
                                </h2>
                                <button
                                    onClick={() => setIsAdding(!isAdding)}
                                    className="dashboard-btn"
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                                        padding: '0.6rem 1.25rem', background: '#3b82f6', color: 'white',
                                        border: 'none', borderRadius: '0.5rem', fontWeight: '600', cursor: 'pointer',
                                        boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.5)'
                                    }}
                                >
                                    {isAdding ? <X size={16} /> : <Plus size={16} />}
                                    {isAdding ? 'Cancel' : 'New Product'}
                                </button>
                            </div>

                            {/* Add Product Form */}
                            {isAdding && (
                                <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '2rem', borderBottom: '1px solid rgba(59, 130, 246, 0.2)' }}>
                                    <form onSubmit={handleAddSubmit}>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                            <div>
                                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: '#60a5fa', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Product Title</label>
                                                <input
                                                    type="text" placeholder="e.g. Seasonal Mangoes" required
                                                    value={newProduct.title} onChange={e => setNewProduct({ ...newProduct, title: e.target.value })}
                                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.4)', color: 'white', outline: 'none' }}
                                                />
                                            </div>
                                            <div>
                                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: '#60a5fa', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Price (₹)</label>
                                                <input
                                                    type="number" placeholder="0.00" required
                                                    value={newProduct.price} onChange={e => setNewProduct({ ...newProduct, price: e.target.value })}
                                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.4)', color: 'white', outline: 'none' }}
                                                />
                                            </div>
                                            <div>
                                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: '#60a5fa', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Category</label>
                                                <select
                                                    value={newProduct.category} onChange={e => setNewProduct({ ...newProduct, category: e.target.value })}
                                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.4)', color: 'white', outline: 'none' }}
                                                >
                                                    <option value="Leafy Greens">Leafy Greens</option>
                                                    <option value="Exotic Veg">Exotic Veg</option>
                                                    <option value="Microgreens">Microgreens</option>
                                                    <option value="Kits">Kits</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: '#60a5fa', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Image Path</label>
                                                <input
                                                    type="text" placeholder="/products/default.png"
                                                    value={newProduct.image} onChange={e => setNewProduct({ ...newProduct, image: e.target.value })}
                                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.4)', color: 'white', outline: 'none' }}
                                                />
                                            </div>
                                        </div>
                                        <button type="submit" style={{ padding: '0.75rem 3rem', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '0.5rem', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 10px rgba(59, 130, 246, 0.4)' }}>Create Product</button>
                                    </form>
                                </div>
                            )}

                            {/* Table Header */}
                            <div style={{ padding: '1rem 1.5rem', background: 'rgba(0,0,0,0.2)', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'grid', gridTemplateColumns: 'minmax(200px, 2fr) 100px 120px 100px 80px', gap: '1rem', fontSize: '0.75rem', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase' }}>
                                <div>Product Details</div>
                                <div>Price</div>
                                <div style={{ textAlign: 'center' }}>Stock Status</div>
                                <div style={{ textAlign: 'center' }}>Expiry</div>
                                <div style={{ textAlign: 'right' }}>Actions</div>
                            </div>

                            <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
                                {catalog.map(product => {
                                    const inStock = product.inStock !== false;
                                    const isEditing = editingId === product.id;
                                    const harvestInfo = getHarvestInfo(product.id);

                                    return (
                                        <div key={product.id} className="product-row" style={{
                                            padding: '1rem 1.5rem',
                                            borderBottom: '1px solid rgba(255,255,255,0.05)',
                                            display: 'grid',
                                            gridTemplateColumns: 'minmax(200px, 2fr) 100px 120px 100px 80px',
                                            gap: '1rem',
                                            alignItems: 'center',
                                            background: (inStock || isEditing) ? 'transparent' : 'rgba(239, 68, 68, 0.1)',
                                            transition: 'background 0.2s'
                                        }}>
                                            {/* Product Column */}
                                            {isEditing ? (
                                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                                    <input
                                                        value={editForm.title}
                                                        onChange={e => setEditForm({ ...editForm, title: e.target.value })}
                                                        style={{ width: '100%', padding: '0.5rem', background: 'rgba(0,0,0,0.3)', border: '1px solid #64748b', color: 'white', borderRadius: '0.25rem' }}
                                                    />
                                                </div>
                                            ) : (
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                    <div style={{ width: '32px', height: '32px', borderRadius: '0.25rem', overflow: 'hidden', opacity: inStock ? 1 : 0.5, boxShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                                                        <img src={product.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                    </div>
                                                    <div style={{ fontWeight: '500', color: inStock ? 'white' : '#94a3b8' }}>{product.title}</div>
                                                </div>
                                            )}

                                            {/* Price Column */}
                                            {isEditing ? (
                                                <input
                                                    type="number"
                                                    value={editForm.price}
                                                    onChange={e => setEditForm({ ...editForm, price: Number(e.target.value) })}
                                                    style={{ width: '100%', padding: '0.5rem', background: 'rgba(0,0,0,0.3)', border: '1px solid #64748b', color: 'white', borderRadius: '0.25rem' }}
                                                />
                                            ) : (
                                                <div style={{ color: '#94a3b8' }}>₹{product.price}</div>
                                            )}

                                            {/* Stock Toggle */}
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <button
                                                    onClick={() => onUpdateProduct(product.id, { inStock: !inStock })}
                                                    style={{
                                                        border: 'none',
                                                        borderRadius: '999px',
                                                        padding: '0.25rem 0.75rem',
                                                        fontSize: '0.7rem',
                                                        fontWeight: '700',
                                                        cursor: 'pointer',
                                                        minWidth: '80px',
                                                        backgroundColor: inStock ? 'var(--color-primary)' : '#ef4444',
                                                        color: 'white',
                                                        opacity: inStock ? 1 : 0.5,
                                                        boxShadow: `0 2px 8px ${inStock ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`
                                                    }}
                                                >
                                                    {inStock ? 'IN STOCK' : 'SOLD OUT'}
                                                </button>
                                            </div>

                                            {/* Expiry Info */}
                                            <div style={{ textAlign: 'center', fontSize: '0.75rem', color: harvestInfo.daysLeft < 2 ? '#f87171' : '#64748b' }}>
                                                {harvestInfo.daysLeft} days
                                            </div>

                                            {/* Actions */}
                                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                                                {isEditing ? (
                                                    <>
                                                        <button onClick={saveEdit} style={{ background: '#22c55e', border: 'none', padding: '0.4rem', borderRadius: '0.25rem', cursor: 'pointer', color: 'white' }}><Save size={14} /></button>
                                                        <button onClick={cancelEdit} style={{ background: '#64748b', border: 'none', padding: '0.4rem', borderRadius: '0.25rem', cursor: 'pointer', color: 'white' }}><X size={14} /></button>
                                                    </>
                                                ) : (
                                                    <>
                                                        <button onClick={() => startEdit(product)} title="Edit" style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#94a3b8', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'white'} onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}><Edit2 size={16} /></button>
                                                        <button onClick={() => handleDelete(product.id)} title="Delete" style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#475569', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#ef4444'} onMouseLeave={e => e.currentTarget.style.color = '#475569'}><X size={16} /></button>
                                                        <button onClick={() => handleDump(product)} title="Dump" style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#fca5a5', opacity: 0.7 }}><Trash2 size={16} /></button>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Stacks */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                        {/* Forecast Manager (Live Control) */}
                        <div>
                            <div style={{
                                background: 'rgba(15, 23, 42, 0.7)',
                                backdropFilter: 'blur(16px)',
                                borderRadius: '1rem',
                                border: '1px solid rgba(255,255,255,0.1)',
                                padding: '1.5rem',
                                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                            }}>
                                <h2 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'white' }}>
                                    <Sprout size={20} color="#4ade80" /> Forecast Manager
                                </h2>

                                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 0.8fr', gap: '1rem', padding: '0 0.5rem 0.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '0.75rem', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase' }}>
                                    <div>Crop</div>
                                    <div>Stage</div>
                                    <div style={{ textAlign: 'center' }}>Inventory</div>
                                    <div style={{ textAlign: 'right' }}>Timeline</div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '400px', overflowY: 'auto' }}>
                                    {forecast && forecast.map(crop => (
                                        <div key={crop.id} style={{
                                            display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 0.8fr', gap: '1rem', alignItems: 'center',
                                            background: 'rgba(255,255,255,0.08)', padding: '0.75rem', borderRadius: '0.5rem',
                                            border: '1px solid rgba(255,255,255,0.05)'
                                        }}>
                                            {/* Col 1: Image & Name */}
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                                <div style={{
                                                    width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0,
                                                    backgroundImage: `url(${crop.image})`, backgroundSize: 'cover',
                                                    border: '1px solid rgba(255,255,255,0.2)'
                                                }} />
                                                <input
                                                    type="text"
                                                    value={crop.name}
                                                    onChange={(e) => onUpdateForecast(crop.id, { name: e.target.value })}
                                                    style={{
                                                        fontSize: '0.85rem', fontWeight: '600', color: 'white', background: 'transparent',
                                                        border: 'none', borderBottom: '1px dashed #475569', width: '100%', outline: 'none',
                                                        padding: '0'
                                                    }}
                                                />
                                            </div>

                                            {/* Col 2: Stage */}
                                            <select
                                                value={crop.stage}
                                                onChange={(e) => onUpdateForecast(crop.id, { stage: e.target.value })}
                                                style={{
                                                    background: '#1e293b', color: '#cbd5e1', border: '1px solid #334155',
                                                    padding: '0.3rem', borderRadius: '0.25rem', fontSize: '0.8rem', outline: 'none', width: '100%'
                                                }}
                                            >
                                                <option value="Planning">Planning</option>
                                                <option value="Seeding">Seeding</option>
                                                <option value="Germinating">Germinating</option>
                                                <option value="Vegetation">Vegetation</option>
                                                <option value="Flowering">Flowering</option>
                                                <option value="Harvesting">Harvesting</option>
                                            </select>

                                            {/* Col 3: Inventory */}
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}>
                                                <input
                                                    type="number"
                                                    value={crop.reserved}
                                                    onChange={(e) => onUpdateForecast(crop.id, { reserved: parseInt(e.target.value) || 0 })}
                                                    style={{
                                                        width: '40px', background: 'rgba(0,0,0,0.3)', border: '1px solid #334155',
                                                        color: 'white', borderRadius: '0.25rem', fontSize: '0.8rem', padding: '0.2rem', textAlign: 'center'
                                                    }}
                                                />
                                                <span style={{ color: '#64748b' }}>/</span>
                                                <input
                                                    type="number"
                                                    value={crop.capacity}
                                                    onChange={(e) => onUpdateForecast(crop.id, { capacity: parseInt(e.target.value) || 0 })}
                                                    style={{
                                                        width: '40px', background: 'rgba(0,0,0,0.3)', border: '1px solid #334155',
                                                        color: '#64748b', borderRadius: '0.25rem', fontSize: '0.8rem', padding: '0.2rem', textAlign: 'center'
                                                    }}
                                                />
                                            </div>

                                            {/* Col 4: Timeline */}
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.5rem' }}>
                                                <span style={{ fontSize: '0.7rem', color: '#64748b' }}>T-</span>
                                                <input
                                                    type="number"
                                                    value={crop.daysRemaining}
                                                    onChange={(e) => onUpdateForecast(crop.id, { daysRemaining: parseInt(e.target.value) })}
                                                    style={{
                                                        width: '40px', background: '#1e293b', color: '#4ade80',
                                                        border: '1px solid #334155', padding: '0.2rem', borderRadius: '0.25rem',
                                                        textAlign: 'center', fontWeight: '700', outline: 'none', fontSize: '0.8rem'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Recent Orders */}
                        <div>
                            <div style={{
                                background: 'rgba(15, 23, 42, 0.7)',
                                backdropFilter: 'blur(16px)',
                                borderRadius: '1rem',
                                border: '1px solid rgba(255,255,255,0.1)',
                                padding: '1.5rem',
                                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                            }}>
                                <h2 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'white' }}>
                                    <Clock size={20} color="#4ade80" /> Recent Orders
                                </h2>

                                {orders.length === 0 ? (
                                    <div style={{ padding: '2rem', textAlign: 'center', background: 'rgba(255,255,255,0.02)', borderRadius: '1rem', color: '#64748b', fontSize: '0.9rem' }}>
                                        No sales yet today.
                                    </div>
                                ) : (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        {orders.slice(0, 3).map((order, idx) => (
                                            <div key={idx} style={{
                                                background: 'rgba(255,255,255,0.03)',
                                                padding: '1rem',
                                                borderRadius: '0.75rem',
                                                border: '1px solid rgba(255,255,255,0.05)'
                                            }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                                    <span style={{ fontWeight: '600', color: '#e2e8f0', fontSize: '0.9rem' }}>{order.id}</span>
                                                    <span style={{ fontSize: '0.85rem', color: '#4ade80', fontWeight: '700' }}>₹{order.total}</span>
                                                </div>
                                                <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
                                                    {order.items.length} items • {new Date(order.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                </div>

                                                {/* Subscription Details if Present */}
                                                {order.items.some(i => i.type === 'subscription') && (
                                                    <div style={{ background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.2)', borderRadius: '0.5rem', padding: '0.75rem', marginTop: '0.5rem' }}>
                                                        <div style={{ fontSize: '0.75rem', color: '#4ade80', fontWeight: '700', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                            <Package size={12} /> SUBSCRIPTION PAYLOAD
                                                        </div>
                                                        {order.items.filter(i => i.type === 'subscription').map((subItem, sIdx) => (
                                                            <div key={sIdx} style={{ fontSize: '0.8rem', color: '#e2e8f0' }}>
                                                                <div style={{ fontWeight: '600' }}>{subItem.title}</div>
                                                                <ul style={{ paddingLeft: '1rem', margin: '0.25rem 0', color: '#94a3b8' }}>
                                                                    {subItem.boxConfig?.items.map((veg, vIdx) => (
                                                                        <li key={vIdx}>{veg.title}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
