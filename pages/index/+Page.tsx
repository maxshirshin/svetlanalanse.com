export default Page;

function Page() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center text-center py-24 md:py-36"
        style={{ backgroundColor: "var(--color-primary-dark)" }}
      >
        <div className="container relative z-10">
          <h1
            className="text-4xl md:text-6xl tracking-[0.15em] uppercase mb-4"
            style={{ fontFamily: "var(--font-heading)", color: "#ffffff" }}
          >
            Svetlana Lanse
          </h1>
          <p
            className="text-lg md:text-xl tracking-wide"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Botanical Art &middot; Watercolour &amp; Oil
          </p>
          <p
            className="mt-6 max-w-2xl mx-auto text-sm leading-relaxed"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Internationally exhibited artist, tutor, and juror — capturing the
            beauty of the natural world through meticulous botanical
            illustration.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/gallery"
              className="inline-block px-8 py-3 text-sm uppercase tracking-widest border transition-colors"
              style={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)" }}
            >
              View Gallery
            </a>
            <a
              href="/contact"
              className="inline-block px-8 py-3 text-sm uppercase tracking-widest transition-colors"
              style={{ backgroundColor: "var(--color-accent)", color: "#fff" }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Excerpt */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl text-center">
          <h2 className="mb-6">About the Artist</h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            Svetlana Lanse is a professional artist with a Master's degree in
            miniature painting. She became proficient in botanical art by
            studying the work of Pierre Joseph Redouté and Maria Sibylla Merian
            and painting from real specimens in botanical gardens. By
            reproducing works of Dutch masters from the Golden Age of still
            life, she perfected her technique of realistic oil painting and
            elegant composition.
          </p>
          <p
            className="mt-4 text-base leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            Svetlana is a botanical art tutor and an internationally exhibited
            artist. She has served as a juror in several internationally
            renowned art competitions. Her work is included in the Dr. Shirley
            Sherwood Collection of Contemporary Botanical Art.
          </p>
        </div>
      </section>

      {/* Featured Works */}
      <section
        className="py-16"
        style={{ backgroundColor: "var(--color-surface-muted)" }}
      >
        <div className="container">
          <h2 className="text-center mb-12">Selected Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Breath of Fire", medium: "Watercolour on paper" },
              { title: "Fall to Pieces", medium: "Oil on panel" },
              { title: "The Secret", medium: "Watercolour on vellum" },
              { title: "You Are in My Heart", medium: "Watercolour on paper" },
              { title: "Physalis", medium: "Watercolour on paper" },
              { title: "Beautiful Age", medium: "Oil on panel" },
            ].map((work) => (
              <div key={work.title} className="group cursor-pointer">
                <div
                  className="aspect-[3/4] mb-3 flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-border-light)" }}
                >
                  <span
                    className="text-sm"
                    style={{ color: "var(--color-text-light)" }}
                  >
                    {/* Placeholder for artwork image */}
                    Image placeholder
                  </span>
                </div>
                <h3
                  className="text-base font-normal"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {work.title}
                </h3>
                <p
                  className="text-xs"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {work.medium}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="/gallery"
              className="inline-block px-8 py-3 text-sm uppercase tracking-widest border transition-colors"
              style={{
                color: "var(--color-primary)",
                borderColor: "var(--color-border)",
              }}
            >
              View Full Gallery
            </a>
          </div>
        </div>
      </section>

      {/* Recent News Teaser */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl text-center">
          <h2 className="mb-6">Latest News</h2>
          <p style={{ color: "var(--color-text-muted)" }}>
            Stay up to date with exhibitions, workshops, and new artwork
            releases.
          </p>
          <a
            href="/news"
            className="inline-block mt-6 text-sm uppercase tracking-widest"
            style={{ color: "var(--color-accent)" }}
          >
            View All News →
          </a>
        </div>
      </section>
    </>
  );
}
