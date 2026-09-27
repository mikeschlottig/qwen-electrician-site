import { useParams, Link } from 'react-router-dom';
import { Shield, CheckCircle, MapPin, ArrowRight, Phone, Award, Clock, Zap } from 'lucide-react';
import { services, locations } from '../data/services';

interface ServicePageProps {
  onOpenEstimate: () => void;
}

export default function ServicePage({ onOpenEstimate }: ServicePageProps) {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-[family-name:var(--font-display)] font-bold text-2xl text-zinc-200">Service Not Found</h1>
          <Link to="/" className="mt-4 inline-block text-copper hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  const isEmergency = service.id === 'emergency-repair';

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden" aria-label={`${service.shortTitle} service details`}>
        <div className="absolute inset-0 topo-overlay" />
        <div className="ambient-glow top-[-200px] right-[-100px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-xs font-[family-name:var(--font-mono)] text-zinc-500" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-zinc-300 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-zinc-400">{service.shortTitle}</span>
          </nav>

          <div className="max-w-4xl">
            {/* Emergency Badge */}
            {isEmergency && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emergency/30 bg-emergency/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-emergency emergency-pulse" />
                <span className="text-xs font-[family-name:var(--font-mono)] text-emergency font-medium">24/7 EMERGENCY SERVICE AVAILABLE</span>
              </div>
            )}

            {/* H1 */}
            <h1 className="font-[family-name:var(--font-display)] font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-[-0.03em] leading-tight gradient-text">
              {service.h1}
            </h1>

            <p className="mt-6 text-lg text-zinc-400 max-w-2xl leading-relaxed">
              {service.description}
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={onOpenEstimate} className="btn-copper px-6 py-3.5 rounded-xl text-sm font-bold text-zinc-950 flex items-center gap-2">
                Get Free Estimate
                <ArrowRight className="w-4 h-4" />
              </button>
              {isEmergency ? (
                <a href="tel:+15417727663" className="px-6 py-3.5 rounded-xl text-sm font-semibold text-emergency border border-emergency/30 bg-emergency/10 hover:bg-emergency/20 transition-all flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Emergency: (541) 772-7663
                </a>
              ) : (
                <a href="tel:+15417727663" className="px-6 py-3.5 rounded-xl text-sm font-semibold text-zinc-300 border border-zinc-700 hover:border-zinc-500 transition-all flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  (541) 772-7663
                </a>
              )}
            </div>

            {/* Warranty Badge */}
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
              <Shield className="w-3.5 h-3.5 text-copper" />
              <span className="text-xs font-[family-name:var(--font-mono)] text-zinc-400">{service.warranty}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Scope of Work */}
      <section className="py-16 lg:py-20 border-t border-white/[0.08]" aria-label="Scope of work">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-xs font-[family-name:var(--font-mono)] text-copper uppercase tracking-widest">
                SCOPE OF WORK
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-display)] font-bold text-2xl md:text-3xl tracking-[-0.03em] gradient-text">
                What's Included
              </h2>
              <ul className="mt-8 space-y-4">
                {service.scope.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-copper flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-[family-name:var(--font-display)] font-bold text-lg text-zinc-100 mb-6">
                Key Features & Benefits
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {service.features.map((feature, i) => (
                  <div key={i} className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-copper" />
                      <span className="text-xs text-zinc-300">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-lg border border-copper/20 bg-copper/5">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-4 h-4 text-copper" />
                  <span className="text-sm font-semibold text-zinc-200">Certified Installation</span>
                </div>
                <p className="text-xs text-zinc-500">
                  All installations performed by factory-trained and certified crews meeting manufacturer specifications for full warranty validation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-16 border-t border-white/[0.08]" aria-label="Service highlights">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: 'Fast Turnaround', desc: 'Most projects completed within scheduled timeline. Written guarantees on completion dates.' },
              { icon: Zap, title: 'Premium Materials', desc: 'Only top-tier manufacturer products with full warranty support and quality assurance.' },
              { icon: Shield, title: 'Full Warranty Coverage', desc: `${service.warranty} on all materials plus our 10-year workmanship guarantee.` },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto rounded-lg bg-copper/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-copper" />
                </div>
                <h3 className="font-semibold text-zinc-200 text-sm">{item.title}</h3>
                <p className="mt-2 text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Served */}
      <section className="py-16 lg:py-20 border-t border-white/[0.08]" aria-label="Locations served">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-[family-name:var(--font-mono)] text-copper uppercase tracking-widest">
              SERVICE AREA
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-display)] font-bold text-2xl md:text-3xl tracking-[-0.03em] gradient-text">
              {service.shortTitle} Available Throughout Southern Oregon
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {service.locations.map((loc) => {
              const locData = locations.find(l => l.name === loc);
              return (
                <div key={loc} className="glass-card rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-copper" />
                    <span className="text-sm font-medium text-zinc-200">{loc}</span>
                  </div>
                  {locData && (
                    <span className="text-xs text-zinc-600 block mt-1">{locData.county}</span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Local SEO Content */}
          <div className="mt-12 glass-card rounded-xl p-6 md:p-8">
            <h3 className="font-[family-name:var(--font-display)] font-bold text-lg text-zinc-200 mb-4">
              Serving {service.locations.slice(0, 3).join(', ')} and Surrounding Communities
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Pacific Crest Architectural Roofing provides professional {service.shortTitle.toLowerCase()} services throughout {service.locations.join(', ')}, and the greater Rogue Valley region. Our factory-trained installation crews serve both residential and commercial properties across Jackson and Josephine Counties with the same commitment to precision engineering and warranty protection. Whether your property is in the heart of Medford, the historic districts of Jacksonville, or the scenic communities of the Applegate Valley, our team delivers consistent, code-compliant installations that meet the unique demands of Southern Oregon's climate.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 border-t border-white/[0.08]" aria-label="Call to action">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-2xl md:text-3xl tracking-tight gradient-text">
            Ready to Start Your {service.shortTitle} Project?
          </h2>
          <p className="mt-4 text-zinc-400">
            Contact Pacific Crest today for a free, no-obligation estimate. Our specialists will assess your roofing needs and provide a detailed proposal within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button onClick={onOpenEstimate} className="btn-copper px-8 py-3.5 rounded-xl text-sm font-bold text-zinc-950 flex items-center gap-2">
              Get Your Free Estimate
              <ArrowRight className="w-4 h-4" />
            </button>
            <a href="tel:+15417727663" className="px-8 py-3.5 rounded-xl text-sm font-semibold text-zinc-300 border border-zinc-700 hover:border-zinc-500 transition-all flex items-center gap-2">
              <Phone className="w-4 h-4" />
              (541) 772-7663
            </a>
          </div>
          <p className="mt-4 text-xs text-zinc-600">
            Oregon CCB #248910 • Licensed • Bonded • Insured • Free Estimates
          </p>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 border-t border-white/[0.08]" aria-label="Related services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-xl text-zinc-200 mb-8">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {services.filter(s => s.id !== service.id).slice(0, 3).map((s) => (
              <Link
                key={s.id}
                to={`/services/${s.slug}`}
                className="glass-card rounded-xl p-5 hover:border-copper/30 transition-all group"
              >
                <h3 className="text-sm font-semibold text-zinc-200 group-hover:text-copper transition-colors">{s.shortTitle}</h3>
                <p className="mt-1 text-xs text-zinc-500 line-clamp-2">{s.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs text-copper opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
