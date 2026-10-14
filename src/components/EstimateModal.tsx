import { useState } from 'react';
import { X, ArrowRight, ArrowLeft, Check, Home, Building, Warehouse, AlertTriangle, Gem, Droplets } from 'lucide-react';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const roofTypes = [
  { id: 'shingle', label: 'Architectural Shingle', icon: Home, desc: 'Residential replacement' },
  { id: 'metal', label: 'Standing Seam Metal', icon: Building, desc: 'Commercial & residential' },
  { id: 'flat', label: 'Flat / TPO Membrane', icon: Warehouse, desc: 'Commercial flat roof' },
  { id: 'emergency', label: 'Emergency Repair', icon: AlertTriangle, desc: 'Storm damage & leaks' },
  { id: 'synthetic', label: 'Synthetic Slate/Shake', icon: Gem, desc: 'Luxury conversion' },
  { id: 'gutters', label: 'Seamless Gutters', icon: Droplets, desc: 'Gutter installation' },
];

const pitches = [
  { id: 'low', label: 'Low Slope', desc: 'Flat to 3/12 pitch' },
  { id: 'medium', label: 'Standard Pitch', desc: '4/12 to 6/12 pitch' },
  { id: 'steep', label: 'Steep Pitch', desc: '7/12 to 12/12 pitch' },
];

const stories = [
  { id: '1', label: '1 Story' },
  { id: '2', label: '2 Story' },
  { id: '3', label: '3+ Story' },
];

const sizes = [
  { id: 'small', label: 'Under 1,500 sqft', range: '< 1,500' },
  { id: 'medium', label: '1,500 - 2,500 sqft', range: '1,500 - 2,500' },
  { id: 'large', label: '2,500 - 4,000 sqft', range: '2,500 - 4,000' },
  { id: 'xlarge', label: '4,000+ sqft', range: '4,000+' },
];

export default function EstimateModal({ isOpen, onClose }: EstimateModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    roofType: '',
    pitch: '',
    stories: '',
    size: '',
    address: '',
    city: '',
    name: '',
    phone: '',
    email: '',
    timeline: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const reset = () => {
    setStep(1);
    setSubmitted(false);
    setFormData({ roofType: '', pitch: '', stories: '', size: '', address: '', city: '', name: '', phone: '', email: '', timeline: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Free roof estimate">
      <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative glass-card rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/[0.08]">
          <div>
            <h2 className="font-[family-name:var(--font-display)] font-bold text-xl text-zinc-100">
              {submitted ? 'Estimate Requested!' : 'Free Roof Estimate'}
            </h2>
            {!submitted && (
              <p className="text-xs font-[family-name:var(--font-mono)] text-zinc-500 mt-1">
                Step {step} of 4
              </p>
            )}
          </div>
          <button onClick={reset} className="p-2 text-zinc-500 hover:text-zinc-300 transition-colors" aria-label="Close estimate form">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        {!submitted && (
          <div className="px-6 pt-4">
            <div className="flex gap-1">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`h-1 flex-1 rounded-full transition-colors ${
                    s <= step ? 'bg-copper' : 'bg-zinc-800'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-copper/20 flex items-center justify-center">
                <Check className="w-8 h-8 text-copper" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-xl text-zinc-100">
                Thank You!
              </h3>
              <p className="text-zinc-400 text-sm">
                Your estimate request has been received. A Pacific Crest specialist will contact you within 2 hours during business hours.
              </p>
              <p className="text-xs font-[family-name:var(--font-mono)] text-zinc-600">
                For immediate emergency service, call (541) 772-7663
              </p>
              <button onClick={reset} className="btn-copper px-6 py-2.5 rounded-lg text-sm font-semibold text-zinc-950 mt-4">
                Close
              </button>
            </div>
          ) : (
            <>
              {/* Step 1: Roof Type */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">Select Roof Type</h3>
                    <p className="text-xs text-zinc-500 mt-1">What type of roofing service do you need?</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {roofTypes.map((type) => {
                      const Icon = type.icon;
                      return (
                        <button
                          key={type.id}
                          onClick={() => updateField('roofType', type.id)}
                          className={`p-4 rounded-xl border text-left transition-all ${
                            formData.roofType === type.id
                              ? 'border-copper bg-copper/10 text-copper'
                              : 'border-zinc-800 hover:border-zinc-600 text-zinc-400'
                          }`}
                        >
                          <Icon className="w-5 h-5 mb-2" />
                          <span className="text-xs font-semibold block">{type.label}</span>
                          <span className="text-[10px] text-zinc-500 block mt-0.5">{type.desc}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 2: Pitch & Stories */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">Roof Pitch</h3>
                    <p className="text-xs text-zinc-500 mt-1">Approximate roof steepness</p>
                    <div className="mt-3 space-y-2">
                      {pitches.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => updateField('pitch', p.id)}
                          className={`w-full p-3 rounded-lg border text-left transition-all flex justify-between items-center ${
                            formData.pitch === p.id
                              ? 'border-copper bg-copper/10 text-copper'
                              : 'border-zinc-800 hover:border-zinc-600 text-zinc-400'
                          }`}
                        >
                          <span className="text-sm font-medium">{p.label}</span>
                          <span className="text-xs font-[family-name:var(--font-mono)] text-zinc-500">{p.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">Stories</h3>
                    <div className="mt-3 flex gap-2">
                      {stories.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => updateField('stories', s.id)}
                          className={`flex-1 p-3 rounded-lg border text-center text-sm transition-all ${
                            formData.stories === s.id
                              ? 'border-copper bg-copper/10 text-copper'
                              : 'border-zinc-800 hover:border-zinc-600 text-zinc-400'
                          }`}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Size & Address */}
              {step === 3 && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">Approximate Roof Size</h3>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {sizes.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => updateField('size', s.id)}
                          className={`p-3 rounded-lg border text-center text-xs transition-all ${
                            formData.size === s.id
                              ? 'border-copper bg-copper/10 text-copper'
                              : 'border-zinc-800 hover:border-zinc-600 text-zinc-400'
                          }`}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-[family-name:var(--font-mono)] text-zinc-500 uppercase tracking-wider">Property Address</label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => updateField('address', e.target.value)}
                      placeholder="123 Main St"
                      className="mt-2 w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-600 focus:border-copper focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-[family-name:var(--font-mono)] text-zinc-500 uppercase tracking-wider">City</label>
                    <select
                      value={formData.city}
                      onChange={(e) => updateField('city', e.target.value)}
                      className="mt-2 w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 focus:border-copper focus:outline-none transition-colors"
                    >
                      <option value="">Select city...</option>
                      <option value="medford">Medford</option>
                      <option value="grants-pass">Grants Pass</option>
                      <option value="ashland">Ashland</option>
                      <option value="central-point">Central Point</option>
                      <option value="jacksonville">Jacksonville</option>
                      <option value="phoenix">Phoenix</option>
                      <option value="talent">Talent</option>
                      <option value="rogue-river">Rogue River</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 4: Contact Info */}
              {step === 4 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">Contact Information</h3>
                    <p className="text-xs text-zinc-500 mt-1">We'll send your estimate within 24 hours</p>
                  </div>
                  <div>
                    <label className="text-xs font-[family-name:var(--font-mono)] text-zinc-500 uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      placeholder="John Smith"
                      className="mt-2 w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-600 focus:border-copper focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-[family-name:var(--font-mono)] text-zinc-500 uppercase tracking-wider">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      placeholder="(541) 555-0123"
                      className="mt-2 w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-600 focus:border-copper focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-[family-name:var(--font-mono)] text-zinc-500 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      placeholder="john@example.com"
                      className="mt-2 w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-600 focus:border-copper focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-[family-name:var(--font-mono)] text-zinc-500 uppercase tracking-wider">Project Timeline</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => updateField('timeline', e.target.value)}
                      className="mt-2 w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 focus:border-copper focus:outline-none transition-colors"
                    >
                      <option value="">Select timeline...</option>
                      <option value="emergency">Emergency - Need ASAP</option>
                      <option value="2weeks">Within 2 weeks</option>
                      <option value="1month">Within 1 month</option>
                      <option value="3months">Within 3 months</option>
                      <option value="planning">Just planning</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-4 border-t border-white/[0.08]">
                {step > 1 ? (
                  <button
                    onClick={prevStep}
                    className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                ) : (
                  <div />
                )}
                {step < 4 ? (
                  <button
                    onClick={nextStep}
                    className="btn-copper px-5 py-2.5 rounded-lg text-sm font-semibold text-zinc-950 flex items-center gap-2"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="btn-copper px-5 py-2.5 rounded-lg text-sm font-semibold text-zinc-950 flex items-center gap-2"
                  >
                    Submit Estimate Request
                    <Check className="w-4 h-4" />
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
