import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Shield, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { services, locations } from '../data/services';

interface LocationPageProps {
  onOpenEstimate: () => void;
}

export default function LocationPage({ onOpenEstimate }: LocationPageProps) {
  const { area } = useParams<{ area: string }>();
  const locationName = area?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || '';
  const locationData = locations.find(l => l.name.toLowerCase().replace(/\s+/g, '-') === area);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 topo-overlay" />
        <div className="ambient-glow top-[-200px] right-[-100px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 flex items-center gap-2 text-xs font-[family-name:var(--font-mono)] text-zinc-500" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-zinc-300 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-zinc-400">Service Areas</span>
            <span>/</span>
            <span className="text-zinc-400">{locationName}</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
              <MapPin className="w-3.5 h-3.5 text-copper" />
              <span className="text-xs font-[family-name:var(--font-mono)] text-zinc-400">
                {locationData?.county || 'Jackson County'}, Oregon
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-display)] font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-[-0.03em] leading-tight gradient-text">
              Expert Roofing Contractor in {locationName}, Oregon
            </h1>

            <p className="mt-6 text-lg text-zinc-400 max-w-2xl leading-relaxed">
              Pacific Crest Architectural Roofing provides premium residential and commercial roofing services to {locationName} and the surrounding {locationData?.county || 'Jackson County'} area. Licensed, bonded, and insured with Oregon CCB #248910.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={onOpenEstimate} className="btn-copper px-6 py-3.5 rounded-xl text-sm font-bold text-zinc-950 flex items-center gap-2">
                Get Free Estimate in {locationName}
                <ArrowRight className="w-4 h-4" />
              </button>
              <a href="tel:+15417727663" className="px-6 py-3.5 rounded-xl text-sm font-semibold text-zinc-300 border border-zinc-700 hover:border-zinc-500 transition-all flex items-center gap-2">
                <Phone className="w-4 h-4" />
                (541) 772-7663
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 border-t border-white/[0.08]" aria-label="Services available in this area">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-2xl tracking-tight gradient-text mb-8">
            Roofing Services Available in {locationName}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="glass-card rounded-xl p-5 hover:border-copper/30 transition-all group"
              >
                <h3 className="text-sm font-semibold text-zinc-200 group-hover:text-copper transition-colors">
                  {service.shortTitle}
                </h3>
                <p className="mt-2 text-xs text-zinc-500 line-clamp-2">{service.description}</p>
                <div className="mt-3 flex items-center gap-2">
                  <Shield className="w-3 h-3 text-copper" />
                  <span className="text-[10px] font-[family-name:var(--font-mono)] text-zinc-600">{service.warranty}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for This Area */}
      <section className="py-16 border-t border-white/[0.08]" aria-label="Why choose us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-[family-name:var(--font-display)] font-bold text-2xl tracking-tight gradient-text">
                Why {locationName} Homeowners Choose Pacific Crest
              </h2>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                As a locally-owned and operated roofing contractor, we understand the unique challenges that {locationName} properties face — from heavy winter rainfall and ice dam formation to wildfire season ember exposure. Our installations are specifically engineered for Southern Oregon's climate.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  'Local expertise in Southern Oregon building codes and permit requirements',
                  'Factory-trained crews with manufacturer certifications',
                  'Comprehensive warranty programs including 50-year non-prorated coverage',
                  'Direct insurance claim documentation and assistance',
                  '24/7 emergency response for storm damage throughout the Rogue Valley',
                  'Transparent pricing with no hidden fees or surprise charges',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-copper flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-[family-name:var(--font-display)] font-bold text-lg text-zinc-100 mb-6">
                What Our {locationName} Clients Say
              </h3>
              <div className="space-y-6">
                {[
                  { text: `Excellent work on our ${locationName} home. The crew was professional, finished ahead of schedule, and the cleanup was perfect. Highly recommend Pacific Crest.`, name: 'Verified Homeowner', rating: 5 },
                  { text: 'After getting three quotes, Pacific Crest offered the best value with the strongest warranty. Their GAF Master Elite certification made the difference.', name: 'Verified Homeowner', rating: 5 },
                ].map((review, i) => (
                  <div key={i} className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(review.rating)].map((_, j) => (
                        <Star key={j} className="w-3 h-3 fill-copper text-copper" />
                      ))}
                    </div>
                    <p className="text-xs text-zinc-400 italic leading-relaxed">"{review.text}"</p>
                    <span className="text-[10px] text-zinc-600 mt-2 block">— {review.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Areas */}
      <section className="py-16 border-t border-white/[0.08]" aria-label="Other service areas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-xl text-zinc-200 mb-6">
            Also Serving These Communities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {locations.filter(l => l.name !== locationName).map((loc) => (
              <Link
                key={loc.name}
                to={`/service-areas/${loc.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="glass-card rounded-lg p-3 text-center hover:border-copper/30 transition-all"
              >
                <span className="text-sm text-zinc-300">{loc.name}</span>
                <span className="text-xs text-zinc-600 block">{loc.county}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-white/[0.08]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-2xl md:text-3xl tracking-tight gradient-text">
            Schedule Your Free Roof Inspection in {locationName}
          </h2>
          <p className="mt-4 text-zinc-400">
            Contact Pacific Crest Architectural Roofing for a comprehensive roof assessment and detailed estimate. We serve all of {locationName} and the greater Rogue Valley.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button onClick={onOpenEstimate} className="btn-copper px-8 py-3.5 rounded-xl text-sm font-bold text-zinc-950">
              Get Free Estimate
            </button>
            <a href="tel:+15417727663" className="px-8 py-3.5 rounded-xl text-sm font-semibold text-zinc-300 border border-zinc-700 hover:border-zinc-500 transition-all flex items-center gap-2">
              <Phone className="w-4 h-4" />
              (541) 772-7663
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
