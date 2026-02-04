import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import PaymentGateway from './components/PaymentGateway';
import OrderSuccess from './components/OrderSuccess';
import InternalDashboard from './components/InternalDashboard';
import RateCard from './components/RateCard';
import RecipeLab from './components/RecipeLab';
import CropJourney from './components/CropJourney';
import CatalogueLeaflet from './components/CatalogueLeaflet';
import VegcoBrochure from './components/VegcoBrochure';
import CrunchTest from './components/CrunchTest';
import EngineeringTrust from './components/EngineeringTrust';
import ProductDetail from './components/ProductDetail';
import HarvestForecast from './components/HarvestForecast';
import SubscriptionBuilder from './components/SubscriptionBuilder';
import PurityIndex from './components/PurityIndex';
import AboutHydro from './components/AboutHydro';
import ChefPalate from './components/ChefPalate';
import SearchOverlay from './components/SearchOverlay';
import initialProducts from './data/products.json';

import ErrorBoundary from './components/ErrorBoundary';
import TransitionOverlay from './components/TransitionOverlay';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [view, setView] = useState('store');
  const [showPayment, setShowPayment] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(null);

  // Shared Forecast State
  const [forecast, setForecast] = useState([
    { id: 101, name: 'Wasabi Arugula', stage: 'Germinating', daysRemaining: 12, capacity: 50, reserved: 42, status: 'active', image: '/emerald_lettuce_macro_8k.png', hue: '0deg' },
    { id: 102, name: 'Purple Basil', stage: 'Vegetation', daysRemaining: 5, capacity: 100, reserved: 88, status: 'active', image: '/images/products/purple_basil.png', hue: '0deg' },
    { id: 103, name: 'Micro-Cilantro', stage: 'Seeding', daysRemaining: 18, capacity: 200, reserved: 15, status: 'active', image: '/luxury_germination_phase_2.png', hue: '0deg' },
    { id: 104, name: 'Saffron Crocus', stage: 'Planning', daysRemaining: 45, capacity: 10, reserved: 10, status: 'full', image: '/luxury_germination_phase_4_real.png', hue: '320deg' },
  ]);

  const handleUpdateForecast = (id, updates) => {
    setForecast(prev => prev.map(item => item.id === id ? { ...item, ...updates } : item));
  };

  const handleReserveSlot = (id) => {
    setForecast(prev => prev.map(item => {
      if (item.id === id && item.reserved < item.capacity) {
        return { ...item, reserved: item.reserved + 1 };
      }
      return item;
    }));
  };

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      setView('success');
      setCart([]);
    }
  }, []);

  const openProductDossier = (product) => {
    setCurrentProductId(product.id);
    setView('product');
  };

  // Dynamic Catalog State (The "God Mode" Source of Truth)
  // Dynamic Catalog State (The "God Mode" Source of Truth)
  const [catalog, setCatalog] = useState(() => {
    // EMERGENCY RECOVERY: Always load fresh if crash loop detected
    try {
      // Simple safe load or fallback
      return initialProducts;
    } catch (e) {
      return initialProducts;
    }
  });

  // FORCE SYNC (Hardened)
  // FORCE SYNC (Simplified)
  useEffect(() => {
    // Just ensure we are valid
    localStorage.setItem('vegco_catalog', JSON.stringify(initialProducts));
  }, []);

  // Persist Catalog
  useEffect(() => {
    localStorage.setItem('vegco_catalog', JSON.stringify(catalog));
  }, [catalog]);

  const categories = ['All', ...new Set(catalog.map(p => p.category))];

  const filteredProducts = selectedCategory === 'All'
    ? catalog
    : catalog.filter(p => p.category === selectedCategory);

  const addToCart = (product, quantity = 1) => {
    const newItems = Array(quantity).fill(product);
    setCart(prev => [...prev, ...newItems]);
    setIsCartOpen(true); // User Feedback: Auto-open cart
  };

  const handleRemoveOne = (id) => {
    const idx = cart.findIndex(item => item && item.id === id);
    if (idx !== -1) {
      removeFromCart(idx);
    }
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const clearProductFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  // CRUD Actions for Dashboard
  const updateProduct = (id, updates) => {
    setCatalog(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const addProduct = (newProduct) => {
    setCatalog(prev => [newProduct, ...prev]);
  };

  const deleteProduct = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setCatalog(prev => prev.filter(p => p.id !== id));
    }
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setView('checkout');
    window.scrollTo(0, 0);
  };

  const handlePaymentStart = (formData) => {
    console.log('Order Details:', formData);
    setShowPayment(true);
  };

  const handlePaymentComplete = () => {
    // Persist Order for Owner Dashboard
    const newOrder = {
      id: `VG-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toISOString(),
      items: [...cart],
      total: cart.reduce((sum, item) => sum + item.price, 0),
      status: 'Processing',
      customer: { name: 'Walk-in / Guest', type: 'Standard' }
    };

    const existingOrders = JSON.parse(localStorage.getItem('vegco_orders') || '[]');
    localStorage.setItem('vegco_orders', JSON.stringify([newOrder, ...existingOrders]));

    setShowPayment(false);
    setCart([]);
    setView('success');
  };



  // Cinematic View Switcher
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleViewSwitch = (newView) => {
    if (view === newView) return;

    setIsTransitioning(true);

    // 1. Wait for Shutter Close (800ms)
    setTimeout(() => {
      // 2. Change View
      setView(newView);

      // Scroll Logic for specific views
      if (newView === 'store') {
        setTimeout(() => {
          const el = document.getElementById('shop');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else if (newView === 'journey') {
        setTimeout(() => {
          const el = document.getElementById('journey-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }

      // 3. Open Shutter (Reveal)
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 800);
  };

  return (
    <ErrorBoundary>
      <div className="App" style={{
        /* Global Background for Subscription View to cover Footer */
        backgroundImage: view === 'subscription'
          ? 'linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0.4)), url("/images/payload_bg.jpg")'
          : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        position: 'relative' // Ensure overlay positioning context
      }}>
        <TransitionOverlay isTransitioning={isTransitioning} />

        {!['leaflet', 'brochure', 'internal'].includes(view) && (
          <Navbar
            cartCount={cart.length}
            onCartClick={() => setIsCartOpen(true)}
            onRateCardClick={() => setView('rate-card')}
            onSearchOpen={() => setIsSearchOpen(true)}

            // Cinematic Transitions
            onHarvestClick={() => handleViewSwitch('store')}
            onAboutClick={() => handleViewSwitch('about')}
            onJourneyClick={() => handleViewSwitch('journey')}
            onRecipeClick={() => handleViewSwitch('recipe-lab')}
            onPurityClick={() => handleViewSwitch('purity-index')}
            onForecastClick={() => handleViewSwitch('forecast')}
            onBuildBoxClick={() => handleViewSwitch('subscription')}

            // Standard Views (No Transition or Modal)
            onLeafletClick={() => setView('leaflet')}
            onBrochureClick={() => setView('brochure')}
          />
        )}

        <main style={{ paddingTop: ['leaflet', 'purity-index', 'store', 'internal'].includes(view) ? '0' : '80px' }}>
          {view === 'internal' && (
            <InternalDashboard
              catalog={catalog}
              onUpdateProduct={updateProduct}
              onAddProduct={addProduct}
              onDeleteProduct={deleteProduct}
              forecast={forecast}
              onUpdateForecast={handleUpdateForecast}
            />
          )}

          {view === 'product' && currentProductId && (
            <ProductDetail
              product={catalog.find(p => p.id === currentProductId)}
              onBack={() => setView('store')}
              onAdd={addToCart}
              cartItems={cart}
            />
          )}

          {view === 'forecast' && (
            <HarvestForecast
              onBack={() => setView('store')}
              forecastData={forecast}
              onReserve={handleReserveSlot}
            />
          )}

          {view === 'subscription' && (
            <SubscriptionBuilder
              onBack={() => setView('store')}
              onAdd={addToCart}
              catalog={catalog}
            />
          )}

          {view === 'about' && (
            <AboutHydro onBack={() => setView('store')} />
          )}

          {(view === 'store' || view === 'journey') && (
            <>
              <Hero />
              <ChefPalate />

              <div className="container" style={{ paddingBottom: '4rem' }}>
                <div id="shop" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '2rem',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}>
                  <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#fff', mixBlendMode: 'difference', letterSpacing: '-0.02em', zIndex: 10 }}>Fresh Harvest</h2>

                  <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    overflowX: 'auto',
                    paddingBottom: '0.5rem',
                    maxWidth: '100%'
                  }}>
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        style={{
                          padding: '0.5rem 1rem',
                          borderRadius: '999px',
                          border: cat === selectedCategory ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                          backgroundColor: cat === selectedCategory ? 'var(--color-primary)' : 'rgba(255,255,255,0.03)',
                          color: cat === selectedCategory ? 'white' : 'var(--color-text-main)',
                          fontWeight: '600',
                          fontSize: '0.875rem',
                          whiteSpace: 'nowrap',
                          cursor: 'pointer'
                        }}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: '2rem'
                }}>
                  {filteredProducts.map(product => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAdd={addToCart}
                      onRemove={handleRemoveOne}
                      cartQuantity={cart.filter(item => item && item.id === product.id).length}
                      inStock={product.inStock}
                    />
                  ))}
                </div>
              </div>

              {/* Journey Section Moved Here */}
              <div id="journey-section">
                <CropJourney />
              </div>
            </>
          )}

          {view === 'checkout' && (
            <Checkout
              cart={cart}
              onBack={() => setView('store')}
              onPayment={handlePaymentStart}
            />
          )}

          {view === 'success' && (
            <OrderSuccess onHome={() => setView('store')} />
          )}

          {view === 'rate-card' && (
            <RateCard onBack={() => setView('store')} />
          )}

          {view === 'recipe-lab' && (
            <RecipeLab onBack={() => setView('store')} />
          )}

          {view === 'leaflet' && (
            <CatalogueLeaflet onBack={() => setView('store')} />
          )}

          {view === 'brochure' && (
            <VegcoBrochure onBack={() => setView('store')} />
          )}

          {view === 'purity-index' && (
            <PurityIndex onBack={() => setView('store')} />
          )}
        </main>

        {/* Payment Gateway Overlay */}
        {showPayment && (
          <PaymentGateway
            amount={cart.reduce((sum, i) => sum + i.price, 0)}
            onUserPaid={handlePaymentComplete}
          />
        )}



        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cart}
          onAdd={addToCart}
          onRemoveOne={handleRemoveOne}
          onClear={clearProductFromCart}
          onCheckout={handleCheckout}
          onExplore={() => {
            setIsCartOpen(false);
            setView('store');
            // Optional: Scroll to shop section
            setTimeout(() => {
              const el = document.getElementById('shop');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
        />

        <SearchOverlay
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          products={catalog}
          onProductSelect={(product) => openProductDossier(product)}
        />

        {view !== 'success' && view !== 'leaflet' && view !== 'brochure' && (
          <>
            {/* Trust & Engineering Section */}
            {view === 'store' && <EngineeringTrust />}

            <footer style={{
              backgroundColor: view === 'subscription' ? 'transparent' : '#fff',
              backgroundImage: view === 'subscription' ? 'none' : 'url("/luxury_global_texture_v2.png")',
              color: view === 'subscription' ? 'var(--color-primary-dark)' : 'var(--color-text-main)',
              borderTop: view === 'subscription' ? 'none' : '1px solid rgba(28, 25, 23, 0.05)',
              padding: '4rem 0',
              marginTop: 'auto',
              backdropFilter: view === 'subscription' ? 'blur(0px)' : 'none'
            }}>
              <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
                  <div>
                    <h3
                      onClick={(e) => {
                        // Robust Manual Triple Click (Requires Alt Key)
                        if (!e.altKey) return;

                        window.secretClickCount = (window.secretClickCount || 0) + 1;

                        // Reset after 1 second of inactivity
                        clearTimeout(window.secretClickTimer);
                        window.secretClickTimer = setTimeout(() => {
                          window.secretClickCount = 0;
                        }, 1000);

                        if (window.secretClickCount >= 3) {
                          setView('internal');
                          window.secretClickCount = 0;
                        }
                      }}
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: '400',
                        fontFamily: 'var(--font-serif)',
                        marginBottom: '1.5rem',
                        color: 'var(--color-primary-dark)',
                        cursor: 'pointer',
                        userSelect: 'none'
                      }}
                    >
                      VEGCO
                    </h3>
                  </div>
                  <div>
                    <button onClick={() => setView('store')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.9rem', fontWeight: '500', color: 'var(--color-text-main)' }}>Store</button>
                    <button onClick={() => setView('crop-journey')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.9rem', fontWeight: '500', color: 'var(--color-text-main)' }}>Journal</button>
                    <button onClick={() => setView('purity-index')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.9rem', fontWeight: '500', color: 'var(--color-text-main)' }}>Purity Scale</button>
                    <button onClick={() => setView('forecast')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.9rem', fontWeight: '500', color: 'var(--color-text-main)' }}>Forecast</button>
                    <button onClick={() => setView('subscription')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.9rem', fontWeight: '500', color: 'var(--color-primary-dark)' }}>Build Box</button>
                    <div style={{ width: '1px', height: '20px', backgroundColor: '#e5e7eb', margin: '0 0.5rem' }}></div>
                    <button onClick={() => setIsCartOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-main)' }}>Concierge</button>
                    <a href="mailto:hello@vegco.inc" style={{ display: 'block', color: view === 'subscription' ? 'var(--color-text-main)' : 'var(--color-text-muted)', marginBottom: '0.5rem', textDecoration: 'none' }}>hello@vegco.inc</a>
                    <a href="tel:+919817506080" style={{ display: 'block', color: view === 'subscription' ? 'var(--color-text-main)' : 'var(--color-text-muted)', textDecoration: 'none' }}>9817 50 60 80</a>
                    <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                      {/* Social placeholders could go here */}
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: '700', marginBottom: '1.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-main)' }}>Curated Selections</h4>
                    <ul style={{ listStyle: 'none', color: view === 'subscription' ? 'var(--color-text-main)' : 'var(--color-text-muted)', display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0 }}>
                      <li style={{ cursor: 'pointer' }} onClick={() => { setView('store'); setSelectedCategory('Leafy Greens'); setTimeout(() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Leafy Greens</li>
                      <li style={{ cursor: 'pointer' }} onClick={() => { setView('store'); setSelectedCategory('Exotic Veg'); setTimeout(() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Exotic Vegetables</li>
                      <li style={{ cursor: 'pointer' }} onClick={() => { setView('store'); setSelectedCategory('Exotic Veg'); setTimeout(() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Culinary Herbs</li>
                    </ul>
                  </div>
                </div>
                <div style={{ borderTop: view === 'subscription' ? '1px solid rgba(0,0,0,0.1)' : '1px solid rgba(28, 25, 23, 0.05)', marginTop: '4rem', paddingTop: '2rem', textAlign: 'center', color: view === 'subscription' ? 'var(--color-text-main)' : 'var(--color-text-light)', fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                  © 2024 VEGCO Hydroponics. All rights reserved. Precision Agriculture Standard.
                </div>
              </div>
            </footer>
          </>
        )}
      </div>
    </ErrorBoundary>
  );
}

export default App;
