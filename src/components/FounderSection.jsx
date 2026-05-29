import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = ['18+ Years Experience', 'Licensed (Canada)', 'Master Colorist']

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
    },
  },
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: 'easeOut' },
  },
}

function FounderSection() {
  const { ref, inView } = useInView({
    threshold: 0.24,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid gap-8 md:grid-cols-2">
        <motion.div animate={inView ? 'visible' : 'hidden'} initial="hidden" variants={fadeUpVariants}>
          <img src="/images/salon/peggy-portrait.png" alt="Salon founder portrait" className="rounded-lg object-cover" />
        </motion.div>

        <motion.div animate={inView ? 'visible' : 'hidden'} initial="hidden" variants={containerVariants}>
          <motion.p className="text-sm uppercase tracking-wide text-primary" variants={fadeUpVariants} style={{ fontSize: 'var(--faq-answer-size)' }}>
            Face Behind the Brand
          </motion.p>

          <motion.h2 className="mt-2 text-3xl md:text-4xl font-heading" variants={fadeUpVariants} style={{ fontSize: 'var(--faq-question-size)' }}>
            Peggy Zokaie — Master Colorist & Blonde Specialist
          </motion.h2>

          <motion.p className="mt-4 text-sm text-muted-text" variants={fadeUpVariants} style={{ fontSize: 'var(--faq-answer-size)' }}>
            Peggy Zokaie brings over 18 years of global experience and a refined eye for colour, balance, and natural-looking extensions. Licensed in Canada, Peggy combines technical mastery with a calm, guest-first approach — delivering bespoke colour, seamless extensions, and polished results that suit your lifestyle.
          </motion.p>

          <motion.div className="mt-6 grid grid-cols-3 gap-4" variants={fadeUpVariants}>
            {stats.map((stat) => (
              <div key={stat} className="text-center">
                <strong className="block text-xl" style={{ fontSize: 'var(--faq-question-size)' }}>{stat}</strong>
              </div>
            ))}
          </motion.div>

          <motion.ul className="mt-6 list-inside grid gap-2" variants={containerVariants}>
            <li className="text-sm" style={{ fontSize: 'var(--faq-answer-size)' }}>Hygiene-first professional care</li>
            <li className="text-sm" style={{ fontSize: 'var(--faq-answer-size)' }}>Premium salon products</li>
            <li className="text-sm" style={{ fontSize: 'var(--faq-answer-size)' }}>Personalized consultations</li>
          </motion.ul>

          <motion.div className="mt-6 flex gap-3" variants={fadeUpVariants}>
            <Link to="/contact" className="inline-flex items-center rounded bg-primary px-4 py-2 text-deep-black font-semibold">Book Now</Link>
            <Link to="/services" className="inline-flex items-center rounded border border-white/30 px-4 py-2">Services</Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FounderSection
