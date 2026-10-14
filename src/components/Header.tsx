import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown, Shield } from 'lucide-react';
import { locations } from '../data/services';

interface HeaderProps {
  onOpenEstimate: () => void;
}

export default function Header({ onOpenEstimate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cityDropdown, setCityDropdown] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Services', href: '/#services' },
    { label: 'About', href: '/#about' },
    { label: 'Reviews', href: '/#reviews' },
    { label: 'Service Areas', href: '/#locations' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/[0.08]" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" aria-label="Pacific Crest Architectural Roofing - Home">
            <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-copper to-copper-hover flex items-center justify-center">
              <Shield className="w-4 h-4 text-zinc-950" />
            </div>
            <div className="hidden sm:block">
              <span className="font-[family-name:var(--font-display)] font-bold text-sm tracking-tight text-zinc-100">
                PACIFIC CREST
              </span>
              <span className="block text-[10px] font-[family-name:var(--font-mono)] text-zinc-500 tracking-wider">
                ARCHITECTURAL ROOFING
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* City Selector */}
            <div className="hidden md:block relative">
              <button
                onClick={() => setCityDropdown(!cityDropdown)}
                className="flex items-center gap-1 text-xs font-[family-name:var(--font-mono)] text-zinc-500 hover:text-zinc-300 transition-colors px-2 py-1 rounded border border-zinc-800"
                aria-expanded={cityDropdown}
                aria-haspopup="listbox"
              >
                <span>SERVICE AREA</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {cityDropdown && (
                <div className="absolute right-0 top-full mt-1 glass-card rounded-lg p-2 min-w-[180px] z-50" role="listbox">
                  {locations.slice(0, 6).map((loc) => (
                    <a
                      key={loc.name}
                      href={`/service-areas/${loc.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-3 py-1.5 text-xs text-zinc-400 hover:text-copper hover:bg-white/5 rounded transition-colors"
                      role="option"
                      onClick={() => setCityDropdown(false)}
                    >
                      {loc.name}, {loc.county}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Emergency Phone */}
            <a
              href="tel:+15417727663"
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded border border-emergency/30 bg-emergency/10 text-emergency hover:bg-emergency/20 transition-colors"
              aria-label="Emergency dispatch - Call now"
            >
              <span className="w-2 h-2 rounded-full bg-emergency emergency-pulse" />
              <span className="text-xs font-[family-name:var(--font-mono)] font-medium">24/7 EMERGENCY</span>
            </a>

            {/* CTA Button */}
            <button
              onClick={onOpenEstimate}
              className="btn-copper px-4 py-2 rounded-lg text-sm font-semibold text-zinc-950"
            >
              Free Estimate
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-zinc-400 hover:text-zinc-100"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden glass-card border-t border-white/[0.08]">
          <nav className="px-4 py-4 space-y-3" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm text-zinc-400 hover:text-zinc-100 py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+15417727663"
              className="flex items-center gap-2 text-sm text-emergency py-2"
            >
              <Phone className="w-4 h-4" />
              24/7 Emergency: (541) 772-7663
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
