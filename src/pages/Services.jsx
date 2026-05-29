import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'

const services = [
  {
    title: 'Signature Hair Extensions',
    description:
      'Custom tape-in, keratin bond, and weft extensions designed to blend seamlessly with your natural hair.',
    features: [
      'Personalized consultation and color match',
      'Invisible placement for natural movement',
      'Maintenance, styling, and aftercare guidance',
    ],
  },
  {
    title: 'Balayage & Blonde Services',
    description:
      'Soft, dimensional balayage and bright blonde services crafted for effortless grow-out and healthy-looking dimension.',
    features: [
      'Hand-painted balayage and root smudge',
      'Blonde toning, glossing, and refresh',
      'Custom colour plans for low-maintenance wear',
    ],
  },
  {
    title: 'Full Colour & Correction',
    description:
      'Precision colour, retouch, and correction services that restore balance while protecting hair integrity.',
    features: [
      'Root touch-ups and all-over colour',
      'Correction for fading, brassiness, and uneven tone',
      'Healthy hair care with bond-building treatments',
    ],
  },
  {
    title: 'Haircut & Styling',
    description:
      'Luxury haircut, blowout, and styling services tailored to your texture, lifestyle, and event needs.',
    features: [
      'Consultation-based precision cuts',
      'Shaping, layering, and long-hair maintenance',
      'Special occasion styling and finishing',
    ],
  },
  {
    title: 'Repair & Treatment Rituals',
    description:
      'Restorative hair treatments designed to strengthen, hydrate, and add shine from root to tip.',
    features: [
      'Deep conditioning and bond repair',
      'Scalp care and hydration therapies',
      'Luxury treatment packages for healthier texture',
    ],
  },
  {
    title: 'Bridal & Event Beauty',
    description:
      'Effortless bridal styling, trial sessions, and polished event looks for your most meaningful moments.',
    features: [
      'Consultation and trial styling',
      'On-site bridal hair support',
      'Long-lasting finish for wedding day and events',
    ],
  },
]

const brandLogos = [
  { src: '/images/logo.png', alt: 'Peggy Beauty' },
  { src: '/images/brands/oribe.jpg', alt: 'ORIBE' },
  { src: '/images/brands/loreal.jpg', alt: 'L\'Oreal' },
  { src: '/images/brands/bellami.jpg', alt: 'Bellami' },
  { src: '/images/brands/haircare.jpg', alt: 'Luxury Hair Care' },
]

function Services() {
  return (
    <section className="page">
      <div className="max-w-4xl">
        <p className="text-sm uppercase tracking-wide text-primary">Salon Services</p>
        <h1 className="mt-4 text-4xl font-heading">Peggy Beauty Service Menu</h1>
        <p className="mt-4 text-muted-text">
          Discover premium hair extension, colour, and styling services crafted for modern clients who want luminous results and effortless maintenance.
        </p>
      </div>

      <div className="mt-10 overflow-hidden rounded-3xl border border-gray-200 bg-white/80 p-6 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <p className="text-sm uppercase tracking-wide text-primary">Trusted partners</p>
            <p className="mt-2 text-muted-text max-w-2xl">
              We work with premium brands and salon partners to deliver safer, more consistent hair extensions, colour, and finish services.
            </p>
          </div>
          <Link to="/contact" className="inline-flex items-center justify-center rounded bg-primary px-4 py-2 text-sm font-semibold text-deep-black">
            Book a consultation
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-5">
          {brandLogos.map((brand) => (
            <div key={brand.alt} className="flex items-center justify-center rounded-xl bg-white p-3 shadow-sm">
              <img src={brand.src} alt={brand.alt} className="max-h-12 md:max-h-16 object-contain" loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 page-grid">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  )
}

export default Services
