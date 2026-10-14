import { motion } from 'framer-motion';
import { ArrowRight, Shield, Star, Award } from 'lucide-react';

interface HeroProps {
  onOpenEstimate: () => void;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' }
  })
};

export default function Hero({ onOpenEstimate }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" aria-label="Hero section">
      {/* Background Effects */}
      <div className="absolute inset-0 topo-overlay" />
      <div className="ambient-glow top-[-200px] right-[-100px]" />
      <div className="ambient-glow bottom-[-200px] left-[-100px] opacity-50" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-transparent to-zinc-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div className="space-y-8" initial="hidden" animate="visible">
            {/* Badge */}
            <motion.div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5" custom={0} variants={fadeInUp}>
              <Shield className="w-3.5 h-3.5 text-copper" />
              <span className="text-xs font-[family-name:var(--font-mono)] text-zinc-400 tracking-wide">
                CCB #248910 • LICENSED • BONDED • INSURED
              </span>
            </motion.div>

            {/* H1 */}
            <h1 className="font-[family-name:var(--font-display)] font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-[-0.03em] leading-tight">
              <span className="gradient-text">Southern Oregon's</span>
              <br />
              <span className="copper-gradient-text">Premier Architectural</span>
              <br />
              <span className="gradient-text">Roofing Contractor</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
              Precision-engineered roofing systems for residential and commercial properties across the Rogue Valley. 
              GAF Master Elite® certified with 50-year non-prorated warranties.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={onOpenEstimate}
                className="btn-copper px-6 py-3.5 rounded-xl text-sm font-bold text-zinc-950 flex items-center gap-2"
              >
                Get Your Free Estimate
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:+15417727663"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold text-zinc-300 border border-zinc-700 hover:border-zinc-500 hover:text-zinc-100 transition-all duration-150 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-emergency emergency-pulse" />
                (541) 772-7663
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-copper text-copper" />
                ))}
                <span className="ml-2 text-sm text-zinc-400">4.9/5 (347 reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-copper" />
                <span className="text-xs font-[family-name:var(--font-mono)] text-zinc-500">GAF MASTER ELITE®</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Quick Estimate Card */}
          <div className="hidden lg:block">
            <div className="glass-card rounded-2xl p-8 space-y-6 relative">
              <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-copper/20 border border-copper/30">
                <span className="text-xs font-[family-name:var(--font-mono)] text-copper font-medium">QUICK ESTIMATE</span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-[family-name:var(--font-mono)] text-zinc-500 uppercase tracking-wider">Roof Type</label>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {['Architectural Shingle', 'Standing Seam Metal', 'Flat/TPO Membrane', 'Synthetic Slate'].map((type) => (
                      <button
                        key={type}
                        onClick={onOpenEstimate}
                        className="text-xs text-zinc-400 border border-zinc-800 hover:border-copper/50 hover:text-copper rounded-lg px-3 py-2.5 transition-all text-left"
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-[family-name:var(--font-mono)] text-zinc-500 uppercase tracking-wider">Approximate Size</label>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {['< 1,500 sqft', '1,500-2,500', '2,500+ sqft'].map((size) => (
                      <button
                        key={size}
                        onClick={onOpenEstimate}
                        className="text-xs text-zinc-400 border border-zinc-800 hover:border-copper/50 hover:text-copper rounded-lg px-2 py-2.5 transition-all text-center"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenEstimate}
                  className="w-full btn-copper py-3 rounded-xl text-sm font-bold text-zinc-950 flex items-center justify-center gap-2"
                >
                  Start Your Estimate
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-center text-xs text-zinc-600">
                  No obligation • Response within 2 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
