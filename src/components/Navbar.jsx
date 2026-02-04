import React, { useState, useEffect } from 'react';
import {
  ShoppingBag, Search, Menu, X, Thermometer, Droplets, Wind, Activity,
  Leaf, Home, BookOpen, Map, FileText, LayoutTemplate, Shield, Mail, Phone
} from 'lucide-react';

export default function Navbar({
  cartCount,
  onCartClick,
  onRateCardClick,
  onSearchOpen,
  onRecipeClick,
  onJourneyClick,
  onLeafletClick,
  onBrochureClick,
  onPurityClick,
  onForecastClick,
  onHarvestClick,
  onBuildBoxClick,
  onAboutClick
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [telemetry, setTelemetry] = useState({ temp: 24.2, humidity: 65, co2: 410 });

  // Simulate live telemetry
  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry(prev => ({
        temp: +(prev.temp + (Math.random() * 0.2 - 0.1)).toFixed(1),
        humidity: Math.min(Math.max(prev.humidity + Math.floor(Math.random() * 3 - 1), 60), 70),
        co2: Math.min(Math.max(prev.co2 + Math.floor(Math.random() * 5 - 2), 400), 450)
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: '1.5rem',
        left: '1.5rem',
        right: '1.5rem',
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none' // Allow clicks through to background if needed, but inner has auto
      }}>
        <div
          className="floating-glass"
          style={{
            width: '100%',
            maxWidth: '1440px',
            height: '4.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 2rem',
            pointerEvents: 'auto',
            transition: 'all 0.4s var(--ease-luxury)'
          }}
        >
          {/* Left Block: Menu & Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Menu"
              style={{
                background: 'none', border: 'none', color: 'var(--color-text-main)', cursor: 'pointer',
                display: 'flex', alignItems: 'center', transition: 'transform 0.2s var(--ease-luxury)'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>

            <div
              className="logo-container chromatic-hover"
              style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer',
                zIndex: 51, position: 'relative'
              }}
              onClick={() => window.location.href = '/'}
            >
              <img
                src="./vegco_v_final_clean.png"
                alt="VEGCO Logo"
                style={{
                  height: '32px',
                  width: 'auto',
                  objectFit: 'contain'
                }}
              />
              <span style={{
                fontSize: '1.4rem', fontWeight: '800', letterSpacing: '-0.05em',
                fontFamily: 'var(--font-serif)', color: 'var(--color-text-main)'
              }}>
                VEGCO.
              </span>
            </div>
          </div>

          {/* Center Block: Desktop Quick Links - Refined for compact floating look */}
          <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flex: 0, justifyContent: 'center' }}>
            <button onClick={onHarvestClick} className="nav-link-btn" style={{ fontSize: '0.75rem' }}>Harvest</button>
            <button onClick={onAboutClick} className="nav-link-btn" style={{ fontSize: '0.75rem' }}>About</button>
            <button onClick={onJourneyClick} className="nav-link-btn" style={{ fontSize: '0.75rem' }}>Journey</button>
            <button onClick={onRecipeClick} className="nav-link-btn" style={{ fontSize: '0.75rem' }}>Lab</button>
            <button onClick={onPurityClick} className="nav-link-btn" style={{ fontSize: '0.75rem' }}>Purity</button>
            <button onClick={onForecastClick} className="nav-link-btn" style={{ fontSize: '0.75rem' }}>Forecast</button>
            <button onClick={onBuildBoxClick} className="nav-link-btn" style={{
              fontSize: '0.75rem',
              color: 'var(--color-primary)',
              fontWeight: '800'
            }}>Build Box</button>
          </div>

          {/* Right Block: Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flex: 1, justifyContent: 'flex-end' }}>
            <button
              onClick={onSearchOpen}
              aria-label="Search"
              style={{
                background: 'none', border: 'none', color: 'var(--color-text-main)', cursor: 'pointer',
                transition: 'transform 0.2s var(--ease-luxury)'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button
              onClick={onCartClick}
              aria-label="Shopping Bag"
              style={{
                background: 'none', border: 'none', color: 'var(--color-text-main)',
                position: 'relative', cursor: 'pointer',
                transition: 'transform 0.2s var(--ease-luxury)'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span style={{
                  position: 'absolute', top: '-6px', right: '-8px',
                  backgroundColor: 'var(--color-primary)', color: 'white',
                  fontSize: '0.65rem', fontWeight: 'bold',
                  height: '16px', width: '16px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(21, 128, 61, 0.4)'
                }}>
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      <style>{`
              .nav-link-btn {
                  background: none; border: none;
                  font-weight: 500; font-size: 0.95rem; cursor: pointer;
                  text-transform: uppercase; letter-spacing: 0.1em; transition: all 0.3s ease;
                  font-family: var(--font-sans);
                  white-space: nowrap;
              }
              .nav-link-btn:hover { text-decoration: underline; opacity: 0.8; }
              .hidden.md\\:flex { display: none; }
              @media (min-width: 1024px) { .hidden.md\\:flex { display: flex; } }
          `}</style>


      {/* --- SIDEBAR DRAWER --- */}
      {
        isMenuOpen && (
          <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            zIndex: 9999, display: 'flex'
          }}>
            <div
              style={{ flex: 1, background: 'rgba(28, 25, 23, 0.2)', backdropFilter: 'blur(3px)' }}
              onClick={() => setIsMenuOpen(false)}
            />

            <div style={{
              width: '320px', background: '#fdfcf8', height: '100%',
              boxShadow: '-10px 0 25px rgba(0,0,0,0.05)',
              display: 'flex', flexDirection: 'column',
              borderRight: '1px solid rgba(28, 25, 23, 0.05)',
              animation: 'slideIn 0.3s ease-out',
              overflowY: 'auto'
            }}>
              <div style={{ padding: '2rem', borderBottom: '1px solid rgba(28, 25, 23, 0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--color-primary)', letterSpacing: '0.1em', fontWeight: '600' }}>EST. 2024</div>
                  <div style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', fontWeight: 'bold', fontFamily: 'var(--font-serif)' }}>VEGCO.</div>
                </div>
                <button onClick={() => setIsMenuOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer' }}>
                  <X size={24} strokeWidth={1.5} />
                </button>
              </div>
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <button
                  onClick={() => { onHarvestClick(); setIsMenuOpen(false); }}
                  style={{ background: 'none', border: 'none', textAlign: 'left', padding: '0.5rem 0', fontSize: '1.1rem', color: '#1c1917', cursor: 'pointer', fontWeight: '500' }}
                >
                  Harvest
                </button>
                <button
                  onClick={() => { onAboutClick(); setIsMenuOpen(false); }}
                  style={{ background: 'none', border: 'none', textAlign: 'left', padding: '0.5rem 0', fontSize: '1.1rem', color: '#1c1917', cursor: 'pointer', fontWeight: '500' }}
                >
                  About
                </button>
                <button
                  onClick={() => { onJourneyClick(); setIsMenuOpen(false); }}
                  style={{ background: 'none', border: 'none', textAlign: 'left', padding: '0.5rem 0', fontSize: '1.1rem', color: '#1c1917', cursor: 'pointer', fontWeight: '500' }}
                >
                  Our Journey
                </button>
                <button
                  onClick={() => { onRecipeClick(); setIsMenuOpen(false); }}
                  style={{ background: 'none', border: 'none', textAlign: 'left', padding: '0.5rem 0', fontSize: '1.1rem', color: '#1c1917', cursor: 'pointer', fontWeight: '500' }}
                >
                  Culinary Lab
                </button>
                <button
                  onClick={() => { onPurityClick(); setIsMenuOpen(false); }}
                  style={{ background: 'none', border: 'none', textAlign: 'left', padding: '0.5rem 0', fontSize: '1.1rem', color: '#1c1917', cursor: 'pointer', fontWeight: '500' }}
                >
                  Purity Scale
                </button>
                <button
                  onClick={() => { onForecastClick(); setIsMenuOpen(false); }}
                  style={{ background: 'none', border: 'none', textAlign: 'left', padding: '0.5rem 0', fontSize: '1.1rem', color: '#1c1917', cursor: 'pointer', fontWeight: '500' }}
                >
                  Forecast
                </button>
                <button
                  onClick={() => { onBuildBoxClick(); setIsMenuOpen(false); }}
                  style={{ background: 'none', border: 'none', textAlign: 'left', padding: '0.5rem 0', fontSize: '1.1rem', color: '#1c1917', cursor: 'pointer', fontWeight: '500' }}
                >
                  Build Box
                </button>
                <button
                  onClick={() => { onRateCardClick(); setIsMenuOpen(false); }}
                  style={{ background: 'none', border: 'none', textAlign: 'left', padding: '0.5rem 0', fontSize: '1.1rem', color: '#1c1917', cursor: 'pointer', fontWeight: '500' }}
                >
                  Rate Card
                </button>
                <button
                  onClick={() => { onLeafletClick(); setIsMenuOpen(false); }}
                  style={{ background: 'none', border: 'none', textAlign: 'left', padding: '0.5rem 0', fontSize: '1.1rem', color: '#1c1917', cursor: 'pointer', fontWeight: '500' }}
                >
                  Leaflet
                </button>
                <button
                  onClick={() => { onBrochureClick(); setIsMenuOpen(false); }}
                  style={{ background: 'none', border: 'none', textAlign: 'left', padding: '0.5rem 0', fontSize: '1.1rem', color: '#1c1917', cursor: 'pointer', fontWeight: '700' }}
                >
                  Brochure
                </button>
              </div>

              <div style={{ marginTop: 'auto', padding: '2rem', background: 'rgba(28, 25, 23, 0.02)', borderTop: '1px solid rgba(28, 25, 23, 0.05)' }}>
                <div style={{ fontSize: '0.65rem', color: '#57534e', letterSpacing: '0.2em', marginBottom: '1rem', fontWeight: '800', textTransform: 'uppercase' }}>Technical Support</div>
                <a href="tel:+919817506080" style={{ fontSize: '0.9rem', color: '#1c1917', fontWeight: 'bold', display: 'block', textDecoration: 'none', marginBottom: '0.3rem' }}>+91 9817 50 60 80</a>
                <a href="mailto:operations@vegco.inc" style={{ fontSize: '0.8rem', color: '#57534e', display: 'block', textDecoration: 'none' }}>operations@vegco.inc</a>
              </div>
            </div>

          </div>
        )
      }
    </>
  );
}
