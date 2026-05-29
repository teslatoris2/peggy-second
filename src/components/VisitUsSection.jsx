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
      <div className="grid gap-6 md:grid-cols-2 items-center">
        <div className="flex items-center">
          <div className="w-full text-center md:text-left">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-primary sm:tracking-[0.28em]">VISIT US</p>
            <h2 className="opening-script text-4xl md:text-6xl">Opening Hours</h2>

            <Link to="/contact" className="mt-6 inline-flex items-center rounded border border-black px-5 py-2 text-deep-black font-semibold">BOOK YOUR CONSULTATION</Link>
          </div>
        </div>

        <div className="pl-8 border-l border-gray-300">
          <div className="working-hours">
            <ul className="elementor-icon-list-items space-y-6">
              {hours.map(([day, time]) => (
                <li className="elementor-icon-list-item" key={day}>
                  <span className={`elementor-icon-list-text ${day.toLowerCase().includes('friday') ? 'font-semibold text-deep-black' : 'text-muted-text'}`}>
                    {day.toUpperCase()}- {time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisitUsSection
