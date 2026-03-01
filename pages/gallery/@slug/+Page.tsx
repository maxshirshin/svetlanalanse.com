export default Page;

import { usePageContext } from "vike-react/usePageContext";

const galleryData: Record<
  string,
  {
    title: string;
    description: string;
    works: { title: string; medium: string }[];
  }
> = {
  "botanical-watercolour": {
    title: "Botanical Watercolour",
    description:
      "Detailed botanical studies in watercolour on paper and vellum.",
    works: [
      { title: "Breath of Fire", medium: "Watercolour on paper" },
      { title: "The Secret", medium: "Watercolour on vellum" },
      { title: "You Are in My Heart", medium: "Watercolour on paper" },
      { title: "Physalis", medium: "Watercolour on paper" },
      { title: "Tenderness", medium: "Watercolour on paper" },
      { title: "Pleasure", medium: "Watercolour on paper" },
    ],
  },
  "oil-paintings": {
    title: "Oil Paintings",
    description:
      "Still life and botanical compositions in oil, inspired by the Dutch Golden Age masters.",
    works: [
      { title: "Fall to Pieces", medium: "Oil on panel" },
      { title: "Beautiful Age", medium: "Oil on panel" },
      { title: "Autumn", medium: "Oil on canvas" },
    ],
  },
  miniatures: {
    title: "Miniature Paintings",
    description: "Intricate miniature works showcasing precision and delicacy.",
    works: [
      { title: "Miniature Study I", medium: "Watercolour on vellum" },
      { title: "Miniature Study II", medium: "Watercolour on vellum" },
    ],
  },
};

function Page() {
  const { routeParams } = usePageContext();
  const slug = routeParams?.slug ?? "";
  const gallery = galleryData[slug];

  if (!gallery) {
    return (
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h1 className="mb-4">Gallery Not Found</h1>
          <p style={{ color: "var(--color-text-muted)" }}>
            This gallery does not exist.{" "}
            <a href="/gallery" style={{ color: "var(--color-accent)" }}>
              Browse all galleries →
            </a>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <nav
          className="mb-8 text-sm"
          style={{ color: "var(--color-text-muted)" }}
        >
          <a href="/gallery">Gallery</a>
          <span className="mx-2">/</span>
          <span style={{ color: "var(--color-text)" }}>{gallery.title}</span>
        </nav>

        <h1 className="mb-2">{gallery.title}</h1>
        <p
          className="mb-12 max-w-2xl"
          style={{ color: "var(--color-text-muted)" }}
        >
          {gallery.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.works.map((work) => (
            <div key={work.title}>
              <div
                className="aspect-[3/4] mb-3 flex items-center justify-center"
                style={{ backgroundColor: "var(--color-border-light)" }}
              >
                <span
                  className="text-sm"
                  style={{ color: "var(--color-text-light)" }}
                >
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
      </div>
    </section>
  );
}
