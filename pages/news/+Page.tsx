export default Page;

function Page() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <h1 className="text-center mb-4">News</h1>
        <p
          className="text-center mb-12"
          style={{ color: "var(--color-text-muted)" }}
        >
          Recent exhibitions, events, and announcements.
        </p>

        <div className="space-y-8">
          {[
            {
              date: "February 2026",
              title: "Upcoming Exhibition: RHS Botanical Art Show",
              description:
                "Svetlana will be exhibiting new watercolour works at the Royal Horticultural Society Botanical Art Show in London this spring.",
            },
            {
              date: "January 2026",
              title: "New Workshop Series Announced",
              description:
                "A new series of online botanical painting workshops will begin in March 2026. Suitable for intermediate and advanced students.",
            },
            {
              date: "November 2025",
              title: "Award at International Botanical Art Exhibition",
              description:
                'Svetlana\'s piece "Breath of Fire" received recognition at the International Botanical Art Exhibition.',
            },
          ].map((item) => (
            <article
              key={item.title}
              className="border-b pb-8"
              style={{ borderColor: "var(--color-border-light)" }}
            >
              <time
                className="text-xs uppercase tracking-wide"
                style={{ color: "var(--color-text-light)" }}
              >
                {item.date}
              </time>
              <h2
                className="text-xl mt-2 mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {item.title}
              </h2>
              <p
                className="text-sm"
                style={{ color: "var(--color-text-muted)" }}
              >
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
