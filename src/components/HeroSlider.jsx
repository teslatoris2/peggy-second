import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
const slides = [
  { image: '/images/slider/1.png', alt: 'Luxury blonde hair transformation', position: 'center 35%' },
  { image: '/images/slider/2.png', alt: 'Dimensional hair color and salon styling', position: 'center 50%' },
  { image: '/images/slider/3.png', alt: 'Premium hair extensions result', position: 'center 65%' },
  { image: '/images/slider/4.png', alt: 'Salon styling and finish', position: 'center 50%' },
]

const brandLogos = [
  { src: '/images/brands/oribe.jpg', alt: 'ORIBE' },
  { src: '/images/brands/loreal.jpg', alt: "L'Oreal" },
  { src: '/images/brands/bellami.jpg', alt: 'Bellami' },
  { src: '/images/brands/haircare.jpg', alt: 'Haircare' },
  { src: '/images/brands/salon-logo.jpg', alt: 'Peggy Salon' },
]

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length)
    }, 5200)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <>
      <section className="relative h-[72vh] md:h-screen w-full overflow-hidden" aria-label="Peggy Beauty hero">
        <div className="absolute inset-0">
          <AnimatePresence mode="sync">
            <motion.img
              key={activeSlide}
              animate={{ opacity: 1, scale: 1.08 }}
              alt={slides[activeSlide].alt}
              className="h-full w-full object-cover"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0, scale: 1 }}
              src={slides[activeSlide].image}
              style={{ objectPosition: slides[activeSlide].position }}
              transition={{ duration: 1.4, ease: 'easeOut' }}
            />
          </AnimatePresence>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30" />

        <img src="/images/hero-accent.svg" alt="" aria-hidden="true" className="absolute bottom-0 left-0 w-full pointer-events-none" />

        <motion.div animate="visible" className="relative z-10 mx-auto h-full max-w-6xl px-6 text-white" initial="hidden" variants={contentVariants}>
          <div className="h-full flex items-center">
            <motion.div className="w-full md:w-1/2" variants={itemVariants}>
              <motion.p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-primary sm:tracking-[0.28em]" variants={itemVariants}>Premium Hair Experience</motion.p>

              <motion.h1 className="text-4xl sm:text-5xl md:text-7xl font-heading leading-tight text-white" variants={itemVariants}>Hair Extensions & Hair Color Specialists</motion.h1>

              <motion.p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-offwhite-cream/90 md:text-lg" variants={itemVariants}>
                We specialize in premium hair extensions and expert hair coloring, creating natural-looking, high-end transformations tailored to you.
              </motion.p>

              <motion.div className="mt-8 flex gap-6" variants={itemVariants}>
                <Link className="rounded-md bg-primary px-8 py-4 text-xl font-semibold text-deep-black shadow-sm" to="/contact">Book Now</Link>
                <Link className="rounded-md border border-white/30 px-8 py-4 text-xl" to="/services">Services</Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.a animate={{ y: [0, 10, 0] }} aria-label="Scroll to featured services" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white" href="#featured-services" transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown size={28} aria-hidden="true" />
        </motion.a>
      </section>

      <section className="bg-[#F7E6E2] py-20" aria-label="Brand partners">
        <div className="mx-auto max-w-7xl px-6">
          <Swiper
            slidesPerView={2}
            spaceBetween={28}
            loop
            autoplay={{ delay: 2200, disableOnInteraction: false }}
            breakpoints={{ 640: { slidesPerView: 3 }, 1024: { slidesPerView: 5 } }}
            modules={[Autoplay]}
          >
            {brandLogos.map((brand) => (
              <SwiperSlide key={brand.alt} className="flex items-center justify-center py-6">
                <div className="bg-white p-9 rounded-xl shadow-sm max-w-[260px] mx-auto">
                  <img src={brand.src} alt={brand.alt} loading="lazy" className="mx-auto max-h-24 md:max-h-36 w-auto object-contain" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default HeroSlider
