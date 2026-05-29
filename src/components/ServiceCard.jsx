function ServiceCard({ title, description, features }) {
  return (
    <article className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-3xl font-semibold mb-4">{title}</h3>
      <p className="text-sm text-muted-text leading-7">{description}</p>
      {features?.length ? (
        <ul className="mt-5 space-y-3 text-sm text-muted-text">
          {features.map((feature) => (
            <li key={feature} className="flex gap-3">
              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  )
}

export default ServiceCard
