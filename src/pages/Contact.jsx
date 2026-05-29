function Contact() {
  return (
    <section className="page">
      <h1 className="text-3xl font-heading">Contact</h1>
      <p className="mt-2 text-muted-text">Ready for your next appointment? Send a message or call the salon.</p>

      <form className="mt-6 grid max-w-xl gap-3">
        <input aria-label="Name" placeholder="Name" className="w-full rounded border px-3 py-2" />
        <input aria-label="Email" placeholder="Email" type="email" className="w-full rounded border px-3 py-2" />
        <textarea aria-label="Message" placeholder="Message" rows="5" className="w-full rounded border px-3 py-2" />
        <button className="inline-flex items-center rounded bg-primary px-4 py-2 text-deep-black font-semibold" type="submit">Send Message</button>
      </form>
    </section>
  )
}

export default Contact
