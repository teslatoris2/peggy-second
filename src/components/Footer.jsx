function Footer() {
  return (
    <footer className="bg-deep-black text-offwhite-cream">
      <div className="h-4 border-y border-primary/35" style={{ backgroundImage: "repeating-linear-gradient(135deg, rgba(201,169,110,.95) 0 1px, transparent 1px 14px)" }} />

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center border border-primary text-2xl font-heading text-primary">P</span>
            <div>
              <div className="font-heading text-2xl">Peggy Beauty</div>
              <div className="text-sm text-offwhite-cream/70">Hair • Nails • Skin • Makeup</div>
            </div>
          </div>

          <div className="mt-8 grid w-full gap-6 md:grid-cols-3">
            <a href="mailto:info@peggybeauty.local" className="flex items-center justify-center gap-3 text-sm text-offwhite-cream/75">info@peggybeauty.local</a>
            <a href="tel:905-265-7444" className="flex items-center justify-center gap-3 text-sm text-offwhite-cream/75">905-265-7444</a>
            <a href="/contact" className="flex items-center justify-center gap-3 text-sm text-offwhite-cream/75">Book Appointment</a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary/20 px-6 py-5 text-center text-sm text-offwhite-cream/55">© 2026 Peggy Beauty</div>
    </footer>
  )
}

export default Footer
