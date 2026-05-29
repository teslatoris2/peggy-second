import { Link } from 'react-router-dom'

const hours = [
  ['Tuesday-Wednesday', '10am-6pm'],
  ['Thursday', '10am-8pm'],
  ['Friday', '10am-6pm'],
  ['Saturday', '9am-4pm'],
  ['Sunday & Monday', 'CLOSED'],
]

function VisitUsSection() {
  return (
    <section id="visit-us" className="mx-auto max-w-7xl px-6 py-12 bg-[#F7E6E2]">
      <div className="grid gap-6 md:grid-cols-2 items-stretch">
        <div className="flex items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-primary sm:tracking-[0.28em]">VISIT US</p>
            <h2 className="opening-script text-4xl md:text-6xl">Opening Hours</h2>

            <Link to="/contact" className="mt-6 inline-flex items-center rounded border border-black px-5 py-2 text-deep-black font-semibold">BOOK YOUR CONSULTATION</Link>
          </div>
        </div>

        <div className="pl-8 border-l border-gray-300">
          <div className="mt-6 w-full">
            <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-8">
              <div className="md:flex-1 bg-white border border-gray-200 rounded-[28px] p-8 shadow-[0_8px_24px_rgba(0,0,0,0.06)] min-h-[320px] md:min-h-[420px] flex flex-col justify-center">
                <dl className="space-y-4">
                  {hours.map(([day, time]) => (
                    <div className="flex items-center justify-between" key={day}>
                      <dt className="text-[15px] md:text-[18px] uppercase tracking-wide text-muted-text">{day}</dt>
                      <dd className={`text-[15px] md:text-[18px] font-semibold ${day.toLowerCase().includes('friday') ? 'text-deep-black' : 'text-muted-text'}`}>{time}</dd>
                    </div>
                  ))}
                </dl>

                <Link to="/contact" className="mt-6 inline-flex items-center rounded bg-primary px-5 py-3 text-deep-black font-semibold">Book Your Consultation</Link>
              </div>

              <div className="hidden md:block w-px bg-gray-200" aria-hidden="true" />

              <div className="md:flex-1 rounded-[28px] overflow-hidden bg-white">
                <iframe
                  title="Map to salon"
                  src="https://www.google.com/maps?q=200%20Windflower%20Gate%20Unit%20%236%2C%20Vaughan%2C%20L4L%209L3&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="h-full w-full min-h-[320px] md:min-h-[420px] rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisitUsSection
