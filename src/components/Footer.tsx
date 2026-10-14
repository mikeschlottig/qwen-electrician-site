import { Shield, Phone, MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services, locations, certifications } from '../data/services';

interface FooterProps {
  onOpenEstimate: () => void;
}

export default function Footer({ onOpenEstimate }: FooterProps) {
  return (
    <footer className="border-t border-white/[0.08] bg-zinc-950" role="contentinfo">
      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="glass-card rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="ambient-glow top-[-100px] left-1/2 -translate-x-1/2 opacity-40" />
          <div className="relative">
            <h2 className="font-[family-name:var(--font-display)] font-bold text-2xl md:text-3xl tracking-tight text-zinc-100">
              Ready to Protect Your Investment?
            </h2>
            <p className="mt-3 text-zinc-400 max-w-xl mx-auto">
              Get a comprehensive roof inspection and detailed estimate from Southern Oregon's most trusted roofing contractor. No obligation.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <button onClick={onOpenEstimate} className="btn-copper px-8 py-3.5 rounded-xl text-sm font-bold text-zinc-950">
                Get Your Free Estimate
              </button>
              <a href="tel:+15417727663" className="px-8 py-3.5 rounded-xl text-sm font-semibold text-zinc-300 border border-zinc-700 hover:border-zinc-500 transition-all flex items-center gap-2">
                <Phone className="w-4 h-4" />
                (541) 772-7663
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-copper to-copper-hover flex items-center justify-center">
                <Shield className="w-4 h-4 text-zinc-950" />
              </div>
              <div>
                <span className="font-[family-name:var(--font-display)] font-bold text-sm text-zinc-100 block">PACIFIC CREST</span>
                <span className="text-[10px] font-[family-name:var(--font-mono)] text-zinc-500">ARCHITECTURAL ROOFING</span>
              </div>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Southern Oregon's premier architectural roofing contractor. Licensed, bonded, and insured. Serving the Rogue Valley since 2008.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <MapPin className="w-3.5 h-3.5 text-copper" />
                <span>1247 Crater Lake Ave, Medford, OR 97504</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <Phone className="w-3.5 h-3.5 text-copper" />
                <a href="tel:+15417727663" className="hover:text-zinc-300 transition-colors">(541) 772-7663</a>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <Mail className="w-3.5 h-3.5 text-copper" />
                <a href="mailto:info@pacificcrestroofing.com" className="hover:text-zinc-300 transition-colors">info@pacificcrestroofing.com</a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-[family-name:var(--font-mono)] text-zinc-400 uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-sm text-zinc-500 hover:text-copper transition-colors"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-xs font-[family-name:var(--font-mono)] text-zinc-400 uppercase tracking-wider mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {locations.map((loc) => (
                <li key={loc.name}>
                  <a href={`/service-areas/${loc.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-zinc-500 hover:text-copper transition-colors">
                    {loc.name}, {loc.county}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xs font-[family-name:var(--font-mono)] text-zinc-400 uppercase tracking-wider mb-4">Certifications</h3>
            <ul className="space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="text-sm text-zinc-500 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-copper" />
                  {cert}
                </li>
              ))}
            </ul>
            <div className="mt-6 p-3 rounded-lg border border-zinc-800 bg-zinc-900/50">
              <p className="text-xs font-[family-name:var(--font-mono)] text-zinc-500">
                Oregon CCB #248910
              </p>
              <p className="text-xs text-zinc-600 mt-1">
                Licensed • Bonded • Insured
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Pacific Crest Architectural Roofing. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">Terms of Service</a>
            <a href="/sitemap" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
