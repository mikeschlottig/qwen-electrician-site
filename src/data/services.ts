export interface Service {
  id: string;
  slug: string;
  h1: string;
  shortTitle: string;
  description: string;
  scope: string[];
  icon: string;
  warranty: string;
  locations: string[];
  features: string[];
}

export const services: Service[] = [
  {
    id: 'residential-shingles',
    slug: 'residential-architectural-shingle-replacement',
    h1: 'The Highest-Rated Architectural Shingle Roof Replacement in Southern Oregon',
    shortTitle: 'Residential Architectural Shingle Replacement',
    description: 'Premium architectural shingle installations with Class 4 impact resistance, complete tear-offs, decking inspection, ice & water shield protection, ridge vent optimization, and industry-leading 50-year non-prorated warranties.',
    scope: [
      'Class 4 impact resistance rated shingles',
      'Complete tear-off and disposal',
      'Full decking inspection and replacement',
      'Ice & water shield at valleys and eaves',
      'Ridge vent optimization for attic ventilation',
      '50-year non-prorated manufacturer warranty',
      'GAF Master Elite / CertainTeed SELECT certified'
    ],
    icon: 'home',
    warranty: '50-Year Non-Prorated',
    locations: ['Medford', 'Central Point', 'Phoenix', 'Talent', 'Ashland', 'Grants Pass', 'Rogue River'],
    features: ['Wind warranty up to 130 MPH', 'Algae-resistant granules', 'Energy Star rated', 'Transferable warranty']
  },
  {
    id: 'commercial-metal',
    slug: 'commercial-standing-seam-metal-roofing',
    h1: 'Precision Engineered Standing Seam Metal Roofing Across the Rogue Valley',
    shortTitle: 'Commercial Standing Seam Metal Roofing',
    description: '24-gauge concealed fastener standing seam systems with custom on-site roll-forming, integrated snow retention, and Class A fire rating for wildfire ember defense across Southern Oregon.',
    scope: [
      '24-gauge concealed fastener panels',
      'Custom on-site roll-forming for perfect fit',
      'Integrated snow retention systems',
      'Class A fire rating — wildfire ember defense',
      'Thermal movement accommodation clips',
      'Kynar 500®/Hylar 5000® PVDF coatings',
      '40-year finish warranty'
    ],
    icon: 'building',
    warranty: '40-Year Finish Warranty',
    locations: ['Medford', 'Central Point', 'Phoenix', 'Talent', 'Ashland', 'Grants Pass', 'Jacksonville'],
    features: ['150 MPH wind uplift rated', 'Cool roof eligible', '100% recyclable material', 'Minimal maintenance']
  },
  {
    id: 'flat-membrane',
    slug: 'flat-low-slope-commercial-membrane-systems',
    h1: 'Industrial TPO, PVC, and EPDM Flat Roof Installations in Medford and Jackson County',
    shortTitle: 'Flat & Low-Slope Commercial Membrane Systems',
    description: 'Heat-welded TPO, PVC, and EPDM membrane systems with commercial drainage slope retrofits, parapet capping, and energy-efficient cool roof reflectivity for flat and low-slope commercial buildings.',
    scope: [
      'Heat-welded seam technology',
      'TPO, PVC, and EPDM membrane options',
      'Commercial drainage slope retrofits',
      'Parapet wall capping and flashing',
      'Energy-efficient cool roof reflectivity',
      'Fully adhered or mechanically attached',
      '20-30 year system warranties'
    ],
    icon: 'warehouse',
    warranty: '30-Year System Warranty',
    locations: ['Medford', 'Central Point', 'White City', 'Grants Pass', 'Jackson County'],
    features: ['Up to 85% solar reflectance', 'Puncture resistant', 'Chemical resistant', 'Seamless waterproofing']
  },
  {
    id: 'emergency-repair',
    slug: 'emergency-storm-damage-leak-mitigation',
    h1: 'Immediate 24/7 Emergency Roof Tarping and Storm Repair in Grants Pass & Josephine County',
    shortTitle: '24/7 Emergency Storm Damage & Leak Mitigation',
    description: 'Rapid deployment emergency roof services including tarping, wind and tree impact response, direct insurance carrier claim documentation, and professional moisture mapping throughout Jackson and Josephine Counties.',
    scope: [
      '2-hour rapid response deployment',
      'Emergency tarping and temporary sealing',
      'Wind and tree impact structural response',
      'Direct insurance carrier documentation',
      'Professional moisture mapping & infrared',
      'Temporary weather protection systems',
      'Priority scheduling for permanent repairs'
    ],
    icon: 'alert',
    warranty: 'Emergency Service Guarantee',
    locations: ['Grants Pass', 'Rogue River', 'Medford', 'Ashland', 'Josephine County', 'Jackson County'],
    features: ['24/7 dispatch available', 'Insurance claim assistance', 'Infrared moisture detection', 'Same-day tarping']
  },
  {
    id: 'cedar-synthetic',
    slug: 'architectural-cedar-shake-synthetic-slate-conversions',
    h1: 'Luxury Synthetic Slate and Composite Shake Roof Conversions in Ashland & Applegate',
    shortTitle: 'Architectural Cedar Shake & Synthetic Slate Conversions',
    description: 'Premium DaVinci and Brava synthetic composite roof systems delivering authentic cedar and slate aesthetics with lightweight structural retrofit capability and zero wildfire risk.',
    scope: [
      'DaVinci Roofscapes synthetic slate',
      'Brava composite shake systems',
      'Lightweight structural retrofit engineering',
      'Authentic cedar aesthetic replication',
      'Class A fire rating — zero wildfire risk',
      'Color-fast UV stable pigments',
      '50-year limited warranty'
    ],
    icon: 'gem',
    warranty: '50-Year Limited Warranty',
    locations: ['Ashland', 'Applegate', 'Jacksonville', 'Medford', 'Talent', 'Phoenix'],
    features: ['Class A fire rated', 'Impact resistant', 'Fade resistant', 'Lightweight vs natural slate']
  },
  {
    id: 'gutters-fascia',
    slug: 'engineered-seamless-gutters-fascia-integration',
    h1: 'Custom 6-Inch Seamless Gutter and Leaf Protection Engineering in Southern Oregon',
    shortTitle: 'Engineered Seamless Gutters & Fascia Integration',
    description: 'Heavy-gauge continuous aluminum seamless gutters with internal hidden hangers, pine needle and oak leaf micro-mesh filtration, and precision drainage line routing for optimal water management.',
    scope: [
      'Heavy-gauge continuous aluminum',
      '6-inch oversized capacity',
      'Internal hidden hanger system',
      'Pine needle/oak leaf micro-mesh filtration',
      'Precision drainage line routing',
      'Fascia integration and capping',
      'Color-matched to roofing system'
    ],
    icon: 'droplets',
    warranty: '20-Year Gutter Warranty',
    locations: ['Medford', 'Central Point', 'Phoenix', 'Talent', 'Ashland', 'Grants Pass', 'Rogue River', 'Jacksonville'],
    features: ['Handles 12" per hour rainfall', 'Corrosion resistant', 'Custom color matched', 'Leaf protection included']
  }
];

export const locations = [
  { name: 'Medford', county: 'Jackson County', description: 'Headquarters and primary service area' },
  { name: 'Grants Pass', county: 'Josephine County', description: 'Full-service roofing for Southern Oregon' },
  { name: 'Ashland', county: 'Jackson County', description: 'Luxury and specialty roofing services' },
  { name: 'Central Point', county: 'Jackson County', description: 'Residential and commercial roofing' },
  { name: 'Jacksonville', county: 'Jackson County', description: 'Historic district roofing expertise' },
  { name: 'Phoenix', county: 'Jackson County', description: 'Complete roofing solutions' },
  { name: 'Talent', county: 'Jackson County', description: 'Full-service roofing contractor' },
  { name: 'Rogue River', county: 'Josephine County', description: 'Emergency and storm repair services' }
];

export const certifications = [
  'GAF Master Elite®',
  'CertainTeed SELECT ShingleMaster™',
  'Malarkey Emerald Pro™',
  'Oregon CCB #248910'
];

export const stats = [
  { value: '1,400+', label: 'Oregon Roofs Installed' },
  { value: '130 MPH', label: 'Wind Warranty Rating' },
  { value: 'Class A', label: 'Fire Rated Systems' },
  { value: '4.9★', label: 'Google Rating (347 Reviews)' }
];
