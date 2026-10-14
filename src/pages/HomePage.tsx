import { Link } from 'react-router-dom';
import { Shield, Award, Star, ArrowRight, CheckCircle, Clock, Zap, Home, Building, Warehouse, AlertTriangle, Gem, Droplets } from 'lucide-react';
import Hero from '../components/Hero';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { services, stats, locations } from '../data/services';

interface HomePageProps {
  onOpenEstimate: () => void;
}

const serviceIcons: Record<string, any> = {
  'residential-shingles': Home,
  'commercial-metal': Building,
  'flat-membrane': Warehouse,
  'emergency-repair': AlertTriangle,
  'cedar-synthetic': Gem,
  'gutters-fascia': Droplets,
};

export default function HomePage({ onOpenEstimate }: HomePageProps) {
  return (
    <main>
      <Hero onOpenEstimate={onOpenEstimate} />

      {/* Manufacturer Certifications Strip */}
      <section className="py-8 border-b border-white/[0.08]" aria-label="Manufacturer certifications">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            <span className="text-xs font-[family-name:var(--font-mono)] text-zinc-600 uppercase tracking-wider">Certified By</span>
            {['GAF Master Elite®', 'CertainTeed SELECT™', 'Malarkey Emerald Pro™', 'Owens Corning Platinum', 'ABC Metal Roofing'].map((cert) => (
              <div key={cert} className="flex items-center gap-2 px-3 py-1.5 rounded border border-zinc-800/50 bg-zinc-900/30">
                <span className="w-1.5 h-1.5 rounded-full bg-copper/60" />
                <span className="text-xs font-[family-name:var(--font-mono)] text-zinc-500">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Metrics Section */}
      <section className="py-16 border-y border-white/[0.08]" aria-label="Company statistics and trust metrics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="glass-card rounded-xl p-6 text-center counter-animate" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="font-[family-name:var(--font-display)] font-extrabold text-2xl md:text-3xl copper-gradient-text">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs font-[family-name:var(--font-mono)] text-zinc-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-28" aria-label="Our roofing services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-[family-name:var(--font-mono)] text-copper uppercase tracking-widest">
              OUR EXPERTISE
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-display)] font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em] leading-tight gradient-text">
              Comprehensive Roofing Solutions for Southern Oregon
            </h2>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              From architectural shingle replacements to commercial standing seam systems, we deliver precision-engineered roofing solutions backed by industry-leading warranties.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = serviceIcons[service.id] || Home;
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  className="glass-card rounded-xl p-6 group hover:border-copper/30 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-copper/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-10 h-10 rounded-lg bg-copper/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-copper" />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-lg text-zinc-100 group-hover:text-copper transition-colors">
                      {service.shortTitle}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-500 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs font-[family-name:var(--font-mono)] text-zinc-600">
                      <Shield className="w-3 h-3" />
                      <span>{service.warranty}</span>
                    </div>
                    <div className="mt-3 flex items-center gap-1 text-xs text-copper opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Learn more</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 lg:py-28 border-t border-white/[0.08]" aria-label="Before and after project comparisons">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-[family-name:var(--font-mono)] text-copper uppercase tracking-widest">
              PROJECT RESULTS
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-display)] font-extrabold text-3xl md:text-4xl tracking-[-0.03em] leading-tight gradient-text">
              See the Pacific Crest Difference
            </h2>
            <p className="mt-4 text-zinc-400">
              Drag the slider to compare storm-damaged roofs before and after our precision restoration work.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider />
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { label: 'Tear-off & Decking Repair', detail: 'Complete substrate restoration' },
              { label: 'GAF Timberline HDZ', detail: 'Class 4 Impact Rated' },
              { label: '50-Year Warranty', detail: 'Non-prorated, transferable' },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-lg p-4 text-center">
                <span className="text-sm font-semibold text-zinc-200">{item.label}</span>
                <span className="text-xs text-zinc-500 block mt-1">{item.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-20 lg:py-28 border-t border-white/[0.08]" aria-label="Why choose Pacific Crest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-[family-name:var(--font-mono)] text-copper uppercase tracking-widest">
                WHY PACIFIC CREST
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-display)] font-extrabold text-3xl md:text-4xl tracking-[-0.03em] leading-tight gradient-text">
                Engineered Precision.<br />Unmatched Warranty Protection.
              </h2>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                We don't just install roofs — we engineer complete weather protection systems designed for Southern Oregon's unique climate challenges, from heavy winter rains to wildfire season.
              </p>
              
              <div className="mt-8 space-y-4">
                {[
                  { icon: Award, title: 'GAF Master Elite® Certified', desc: 'Top 2% of roofers nationwide. Exclusive access to premium warranty programs.' },
                  { icon: Shield, title: '50-Year Non-Prorated Warranty', desc: 'Full coverage that never decreases in value. Transferable to new homeowners.' },
                  { icon: Zap, title: '2-Hour Emergency Response', desc: '24/7 rapid deployment for storm damage, leaks, and emergency tarping.' },
                  { icon: Clock, title: 'On-Time, On-Budget Guarantee', desc: 'Written project timelines with financial penalties if we miss our dates.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-copper/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-copper" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-200">{item.title}</h3>
                      <p className="text-xs text-zinc-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Card */}
            <div className="glass-card rounded-2xl p-8 space-y-6">
              <h3 className="font-[family-name:var(--font-display)] font-bold text-lg text-zinc-100">
                By The Numbers
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '1,400+', label: 'Roofs Installed' },
                  { value: '16+', label: 'Years in Business' },
                  { value: '4.9★', label: 'Average Rating' },
                  { value: '347', label: 'Google Reviews' },
                  { value: '98%', label: 'On-Time Completion' },
                  { value: '0', label: 'Unresolved Complaints' },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                    <div className="font-[family-name:var(--font-display)] font-bold text-xl copper-gradient-text">{item.value}</div>
                    <div className="text-xs text-zinc-500 mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-white/[0.08]">
                <div className="flex flex-wrap gap-2">
                  {['GAF Master Elite', 'CertainTeed SELECT', 'Malarkey Emerald Pro'].map((cert) => (
                    <span key={cert} className="px-2 py-1 rounded text-[10px] font-[family-name:var(--font-mono)] text-zinc-500 border border-zinc-800 bg-zinc-900/50">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 border-t border-white/[0.08]" aria-label="Our process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-[family-name:var(--font-mono)] text-copper uppercase tracking-widest">
              OUR PROCESS
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-display)] font-extrabold text-3xl md:text-4xl tracking-[-0.03em] leading-tight gradient-text">
              From Estimate to Completion
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Free Inspection', desc: 'Comprehensive roof assessment with infrared moisture scanning and detailed documentation.' },
              { step: '02', title: 'Custom Proposal', desc: 'Transparent pricing with material specifications, timeline, and warranty documentation.' },
              { step: '03', title: 'Precision Install', desc: 'Factory-trained crews with daily cleanup and real-time project updates.' },
              { step: '04', title: 'Final Walkthrough', desc: 'Complete inspection, warranty registration, and 10-year workmanship guarantee activation.' },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="glass-card rounded-xl p-6 h-full">
                  <span className="text-3xl font-[family-name:var(--font-display)] font-extrabold copper-gradient-text opacity-50">
                    {item.step}
                  </span>
                  <h3 className="mt-3 font-semibold text-zinc-200">{item.title}</h3>
                  <p className="mt-2 text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-zinc-800" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 lg:py-28 border-t border-white/[0.08]" aria-label="Customer reviews">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-[family-name:var(--font-mono)] text-copper uppercase tracking-widest">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-display)] font-extrabold text-3xl md:text-4xl tracking-[-0.03em] leading-tight gradient-text">
              Trusted by 1,400+ Southern Oregon Homeowners
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Michael R.', location: 'Medford', text: 'Pacific Crest replaced our entire roof in 3 days. The crew was professional, cleanup was impeccable, and the 50-year warranty gives us total peace of mind. Best roofing experience we\'ve ever had.', rating: 5 },
              { name: 'Sarah & Tom K.', location: 'Ashland', text: 'We went with the synthetic slate conversion and the results are stunning. Our neighbors can\'t tell it\'s not real cedar. The fire rating was crucial for our wildland-urban interface location.', rating: 5 },
              { name: 'David L.', location: 'Grants Pass', text: 'After storm damage took out part of our roof, Pacific Crest had a tarp on within 90 minutes. They handled the entire insurance claim and had permanent repairs done in under a week. Lifesavers.', rating: 5 },
            ].map((review, i) => (
              <div key={i} className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-copper text-copper" />
                  ))}
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed italic">"{review.text}"</p>
                <div className="mt-4 pt-4 border-t border-white/[0.08]">
                  <span className="text-sm font-semibold text-zinc-200">{review.name}</span>
                  <span className="text-xs text-zinc-500 block">{review.location}, OR</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 border-t border-white/[0.08]" aria-label="Frequently asked questions">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-[family-name:var(--font-mono)] text-copper uppercase tracking-widest">FAQ</span>
            <h2 className="mt-3 font-[family-name:var(--font-display)] font-extrabold text-3xl md:text-4xl tracking-[-0.03em] leading-tight gradient-text">
              Common Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { q: 'How much does a new roof cost in Southern Oregon?', a: 'Architectural shingle roof replacement in the Rogue Valley typically ranges from $12,000 to $28,000 depending on roof size, pitch, and material selection. Standing seam metal roofing ranges from $18,000 to $45,000. We offer free detailed estimates with transparent pricing — no hidden fees.' },
              { q: 'Do you offer emergency roof repair in Medford and Grants Pass?', a: 'Yes, Pacific Crest provides 24/7 emergency roof tarping and storm damage mitigation throughout Jackson and Josephine Counties. Our rapid response team can deploy within 2 hours of your call, any time of day or night.' },
              { q: 'What warranties do you offer on roofing installations?', a: 'We offer 50-year non-prorated manufacturer warranties on architectural shingles (GAF, CertainTeed, Malarkey), 40-year warranties on standing seam metal systems, and our own 10-year workmanship guarantee on all installations. All warranties are fully transferable.' },
              { q: 'Are you licensed and insured in Oregon?', a: 'Yes, Pacific Crest Architectural Roofing is fully licensed (Oregon CCB #248910), bonded, and insured with $2M general liability and workers\' compensation coverage. We hold GAF Master Elite, CertainTeed SELECT ShingleMaster, and Malarkey Emerald Pro certifications.' },
              { q: 'How long does a typical roof replacement take?', a: 'Most residential architectural shingle replacements are completed in 2-4 days. Standing seam metal installations typically take 5-10 days depending on complexity. Commercial membrane systems vary by project size. We provide exact timelines in our written proposals.' },
            ].map((faq, i) => (
              <details key={i} className="glass-card rounded-xl group">
                <summary className="p-5 cursor-pointer flex justify-between items-center text-sm font-semibold text-zinc-200 list-none">
                  {faq.q}
                  <span className="text-copper text-lg ml-4 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-zinc-400 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="locations" className="py-20 lg:py-28 border-t border-white/[0.08]" aria-label="Service areas in Southern Oregon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-[family-name:var(--font-mono)] text-copper uppercase tracking-widest">
              SERVICE AREA
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-display)] font-extrabold text-3xl md:text-4xl tracking-[-0.03em] leading-tight gradient-text">
              Serving the Greater Rogue Valley
            </h2>
            <p className="mt-4 text-zinc-400">
              Licensed and insured roofing services throughout Jackson and Josephine Counties, covering a 40-mile radius from our Medford headquarters.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <a
                key={loc.name}
                href={`/service-areas/${loc.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="glass-card rounded-xl p-4 text-center hover:border-copper/30 transition-all group"
              >
                <h3 className="text-sm font-semibold text-zinc-200 group-hover:text-copper transition-colors">{loc.name}</h3>
                <p className="text-xs text-zinc-600 mt-1">{loc.county}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
