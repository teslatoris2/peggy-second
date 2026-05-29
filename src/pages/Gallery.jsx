function Gallery() {
  return (
    <section className="page">
      <h1 className="text-3xl font-heading">Gallery</h1>
      <p className="mt-2 text-muted-text">Showcase salon work, transformations, nail designs, and client looks here.</p>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-fr">
        {[
          '/images/gallery/photos/img_3176.jpg',
          '/images/gallery/photos/img_3178.jpg',
          '/images/gallery/photos/img_3272.png',
          '/images/gallery/photos/img_3546.png',
          '/images/gallery/photos/img_3750.png',
          '/images/gallery/photos/img_3848.png',
        ].map((src, i) => (
          <figure key={src} className={`rounded-lg overflow-hidden group bg-white shadow-sm ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
            <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Gallery
