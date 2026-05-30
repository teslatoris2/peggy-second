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
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <motion.div animate={inView ? 'visible' : 'hidden'} initial="hidden" variants={fadeUpVariants} className="h-full">
          <div className="rounded-lg overflow-hidden ring-1 ring-gray-100 shadow-md">
            <img src="/images/salon/peggy-portrait.png" alt="Salon founder portrait" className="rounded-lg object-cover w-full h-[420px] md:h-[560px] object-top" />
          </div>
        </motion.div>

        <motion.div animate={inView ? 'visible' : 'hidden'} initial="hidden" variants={containerVariants}>
          <div className="bg-[#F7F3F0] border border-[#E9E3DE] rounded-lg p-6 md:p-10 shadow-lg">
            <motion.p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#7A5B22]" variants={fadeUpVariants} style={{ fontSize: 'var(--faq-answer-size)' }}>
              Face Behind the Brand
            </motion.p>

            <motion.h2 className="font-heading text-4xl leading-tight text-deep-black sm:text-5xl" variants={fadeUpVariants} style={{ fontSize: 'var(--faq-question-size)' }}>
              Peggy Zokaie — <span className="text-[#C7936B]">Master Colorist &amp; Blonde Specialist</span>
            </motion.h2>

            <motion.p className="mt-6 leading-8 text-muted-text" variants={fadeUpVariants} style={{ fontSize: 'var(--faq-answer-size)' }}>
              Peggy Zokaie brings over 18 years of global experience and a refined eye for colour, balance, and natural-looking extensions. Licensed in Canada, Peggy combines technical mastery with a calm, guest-first approach — delivering bespoke colour, seamless extensions, and polished results that suit your lifestyle.
            </motion.p>

            <motion.div className="mt-8 grid gap-3 text-lg font-heading text-deep-black" variants={fadeUpVariants}>
              {stats.map((stat) => (
                <div key={stat} className="text-center">
                  <strong className="block">{stat}</strong>
                </div>
              ))}
            </motion.div>

            <motion.ul className="mt-6 list-inside grid gap-3 text-sm text-muted-text" variants={containerVariants}>
              <li style={{ fontSize: 'var(--faq-answer-size)' }}>Hygiene-first professional care</li>
              <li style={{ fontSize: 'var(--faq-answer-size)' }}>Premium salon products</li>
              <li style={{ fontSize: 'var(--faq-answer-size)' }}>Personalized consultations</li>
            </motion.ul>

            <motion.div className="mt-6 flex gap-3" variants={fadeUpVariants}>
              <Link to="/contact" className="inline-flex items-center rounded bg-primary px-4 py-2 text-deep-black font-semibold">Book Now</Link>
              <Link to="/services" className="inline-flex items-center rounded border border-white/30 px-4 py-2">Services</Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FounderSection
