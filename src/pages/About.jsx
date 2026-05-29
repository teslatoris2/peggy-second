import ExtensionsFeature from '../components/ExtensionsFeature'

function About() {
  return (
    <section className="page">
      <h1 className="text-3xl font-heading">About Peggy Beauty</h1>

      <div className="mt-4 max-w-3xl">
        <p className="text-lg font-semibold">Meet Peggy Zokaie — Master Colorist and Blonde Specialist at Peggy Beauty.</p>

        <p className="mt-4">With over 18 years of professional experience and licensed in Canada, Peggy brings advanced expertise and an unwavering commitment to excellence.</p>

        <p className="mt-4">Our philosophy is simple: luxury should feel personal and refined. We combine hygiene-first standards with premium professional products and a calm, elegant environment so you leave feeling confident and beautifully refreshed.</p>

        <p className="mt-4">Every service is performed with meticulous attention to detail, precision, and the highest standards of cleanliness and care.</p>
      </div>

      <ExtensionsFeature />
    </section>
  )
}

export default About
