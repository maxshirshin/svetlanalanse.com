export default Page;

import { galleries } from "@/data/galleries";
import { HeroSlider } from "@/components/HeroSlider";

function Page() {
  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* My Galleries */}
      <section
        className="py-16"
        style={{ backgroundColor: "var(--color-surface-muted)" }}
      >
        <div className="container">
          <h2 className="text-center mb-12">My Galleries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleries.slice(0, 3).map((gallery) => (
              <a
                key={gallery.slug}
                href={`/gallery/${gallery.slug}`}
                className="group block"
              >
                <div
                  className="aspect-[4/3] mb-4 flex items-center justify-center transition-shadow group-hover:shadow-lg"
                  style={{ backgroundColor: "var(--color-border-light)" }}
                >
                  <span
                    className="text-sm"
                    style={{ color: "var(--color-text-light)" }}
                  >
                    Cover image placeholder
                  </span>
                </div>
                <h3
                  className="text-xl mb-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {gallery.title}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {gallery.description}
                </p>
              </a>
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
              View All Galleries
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
