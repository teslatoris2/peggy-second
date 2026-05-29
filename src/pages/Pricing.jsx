import BookingButton from '../components/BookingButton'

const prices = [
  ['Blowout', '$45+'],
  ['Haircut', '$55+'],
  ['Gel Manicure', '$40+'],
  ['Signature Facial', '$85+'],
]

function Pricing() {
  return (
    <section className="page">
      <h1 className="text-3xl font-heading">Pricing</h1>
      <p className="mt-2 text-muted-text">Starting prices are listed below. Final pricing depends on service details.</p>
      <div className="mt-6 page-grid">
        {prices.map(([name, price]) => (
          <article key={name} className="rounded-lg border bg-white p-4">
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-muted-text">{price}</p>
          </article>
        ))}
      </div>
      <div className="mt-6"><BookingButton /></div>
    </section>
  )
}

export default Pricing
