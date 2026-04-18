export default Page;

function Page() {
  return (
    <>
      {/* Intro */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h1 className="text-center mb-8">About the Artist</h1>
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
          <p
            className="mt-4 text-base leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            She now lives and works in London, UK.
          </p>
        </div>
      </section>

      {/* Education */}
      <section
        className="py-12"
        style={{ backgroundColor: "var(--color-surface-muted)" }}
      >
        <div className="container max-w-3xl">
          <h2 className="mb-6">Education</h2>
          <ul
            className="space-y-3 text-base"
            style={{ color: "var(--color-text-muted)" }}
          >
            <li>
              <strong style={{ color: "var(--color-text)" }}>
                Master's degree in miniature and decorative painting
              </strong>
              <br />
              Higher School of Folk Arts (Academy). Saint Petersburg, Russia.
              2009–2014.
            </li>
            <li>
              <strong style={{ color: "var(--color-text)" }}>
                Bachelor's degree in decorative painting
              </strong>
              <br />
              Higher School of Folk Arts (College). Saint Petersburg, Russia.
              2005–2009.
            </li>
          </ul>
        </div>
      </section>

      {/* Professional Memberships */}
      <section className="py-12">
        <div className="container max-w-3xl">
          <h2 className="mb-6">Professional Memberships</h2>
          <ul
            className="space-y-2 text-base"
            style={{ color: "var(--color-text-muted)" }}
          >
            <li>Fellow member — Society of Botanical Artists, UK</li>
            <li>
              Painting member — Chelsea Physic Garden Florilegium Society, UK
            </li>
          </ul>
        </div>
      </section>

      {/* Collections */}
      <section
        className="py-12"
        style={{ backgroundColor: "var(--color-surface-muted)" }}
      >
        <div className="container max-w-3xl">
          <h2 className="mb-6">Collections</h2>
          <ul
            className="space-y-2 text-base"
            style={{ color: "var(--color-text-muted)" }}
          >
            <li>The Shirley Sherwood Collection, London</li>
            <li>Hunt Institute of Botanical Documentation</li>
          </ul>
        </div>
      </section>

      {/* Honours & Awards */}
      <section className="py-12">
        <div className="container max-w-3xl">
          <h2 className="mb-6">Honours &amp; Awards</h2>
          <ul
            className="space-y-3 text-base"
            style={{ color: "var(--color-text-muted)" }}
          >
            <li>
              <strong style={{ color: "var(--color-text)" }}>
                Exhibiting Excellence for Contemporary Botanical Artwork
              </strong>{" "}
              — Plantae, SBA Online Exhibition, 2024
            </li>
            <li>
              <strong style={{ color: "var(--color-text)" }}>
                People's Choice Award
              </strong>{" "}
              — Annual Exhibition, St. Petersburg Botanical Garden, 2021
            </li>
            <li>
              <strong style={{ color: "var(--color-text)" }}>
                Eleanor Wunderlich Award
              </strong>{" "}
              — 22nd Annual International Exhibition, ASBA, 2019
            </li>
            <li>
              <strong style={{ color: "var(--color-text)" }}>
                RHS Gold Medal
              </strong>{" "}
              — Group Show of Russian Botanical Artists, 2019
            </li>
            <li>
              <strong style={{ color: "var(--color-text)" }}>
                Award for Perfect Technique
              </strong>{" "}
              — Annual Exhibition, St. Petersburg Botanical Garden, 2018
            </li>
            <li>
              <strong style={{ color: "var(--color-text)" }}>
                Award for Elegant Composition
              </strong>{" "}
              — "Colors of the Tropics", SABA, 2018
            </li>
            <li>
              <strong style={{ color: "var(--color-text)" }}>
                Highly Commended, Joyce Cummings Award
              </strong>{" "}
              — 2017
            </li>
          </ul>
        </div>
      </section>

      {/* Selected Exhibitions */}
      <section
        className="py-12"
        style={{ backgroundColor: "var(--color-surface-muted)" }}
      >
        <div className="container max-w-3xl">
          <h2 className="mb-6">Selected Exhibitions</h2>
          <div
            className="space-y-6 text-base"
            style={{ color: "var(--color-text-muted)" }}
          >
            <div>
              <h3
                className="text-lg font-normal mb-2"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--color-text)",
                }}
              >
                2025
              </h3>
              <ul className="space-y-1">
                <li>Plantae — Society of Botanical Artists (UK)</li>
                <li>Annual Exhibition — Royal Miniature Society, UK</li>
              </ul>
            </div>
            <div>
              <h3
                className="text-lg font-normal mb-2"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--color-text)",
                }}
              >
                2024
              </h3>
              <ul className="space-y-1">
                <li>
                  17th International Exhibition of Botanical Art &amp;
                  Illustration — Hunt Institute of Botanical Documentation,
                  Pittsburgh, USA
                </li>
                <li>
                  27th Annual International Exhibition — American Society of
                  Botanical Artists, New York, USA
                </li>
                <li>
                  Plantae — Society of Botanical Artists (UK), Online Exhibition
                </li>
              </ul>
            </div>
            <div>
              <h3
                className="text-lg font-normal mb-2"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--color-text)",
                }}
              >
                2023
              </h3>
              <ul className="space-y-1">
                <li>
                  Ukrainian Botanical Art Exhibition — SUBA, Online Exhibition
                </li>
                <li>
                  8th Annual Exhibition of Botanical Art — St. Petersburg
                  Botanical Garden, Russia
                </li>
              </ul>
            </div>
            <div>
              <h3
                className="text-lg font-normal mb-2"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--color-text)",
                }}
              >
                2022
              </h3>
              <ul className="space-y-1">
                <li>
                  7th Annual Exhibition of Botanical Art — St. Petersburg
                  Botanical Garden, Russia
                </li>
                <li>
                  5th Festival of Watercolour Artists — Tbilisi, Republic of
                  Georgia
                </li>
              </ul>
            </div>
            <div>
              <h3
                className="text-lg font-normal mb-2"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--color-text)",
                }}
              >
                2021
              </h3>
              <ul className="space-y-1">
                <li>
                  "Exploring Botany" — Manggha Museum of Japanese Art and
                  Technology, Krakow, Poland
                </li>
                <li>"Black and White" — SABA, New Manege, Moscow, Russia</li>
                <li>
                  24th Annual International Exhibition — ASBA, Marin Art &amp;
                  Garden Center, Ross, CA, USA
                </li>
                <li>
                  Botanical Art Exhibition — SUBA, National Science and Nature
                  Museum, Kyiv, Ukraine
                </li>
              </ul>
            </div>
            <div>
              <h3
                className="text-lg font-normal mb-2"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--color-text)",
                }}
              >
                2020
              </h3>
              <ul className="space-y-1">
                <li>
                  208th Exhibition — Royal Institute of Painters in
                  Watercolours, Mall Galleries, London
                </li>
                <li>
                  "Botanical Diversity" — KreativRaum Gallery, Vienna, Austria
                </li>
              </ul>
            </div>
            <div>
              <h3
                className="text-lg font-normal mb-2"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--color-text)",
                }}
              >
                2019
              </h3>
              <ul className="space-y-1">
                <li>Plantae — SBA Exhibition, Mall Galleries, London</li>
                <li>
                  RHS Botanical Art and Photography Show — Group Show of Russian
                  Botanical Artists, London
                </li>
                <li>
                  22nd Annual International Exhibition — ASBA, Marin Art &amp;
                  Garden Center, Ross, CA, USA
                </li>
              </ul>
            </div>
            <div>
              <h3
                className="text-lg font-normal mb-2"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--color-text)",
                }}
              >
                2018
              </h3>
              <ul className="space-y-1">
                <li>
                  International Botanical Art Exhibition — KBAS, Seoul, South
                  Korea
                </li>
                <li>
                  "Flora Russia" — Botanical Art Worldwide Exhibition, Saint
                  Petersburg, Russia
                </li>
                <li>
                  "Primroses" — SABA, The State Darwin Museum, Moscow, Russia
                </li>
              </ul>
            </div>
            <div>
              <h3
                className="text-lg font-normal mb-2"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--color-text)",
                }}
              >
                2016–2017
              </h3>
              <ul className="space-y-1">
                <li>
                  "Changing Seasons" — SBA Exhibition, Methodist Central Hall,
                  Westminster, London
                </li>
                <li>
                  1st–2nd Annual Exhibitions of Botanical Art — St. Petersburg
                  Botanical Garden, Russia
                </li>
                <li>
                  1st Annual Botanical Art Exhibition — SABA, Moscow, Russia
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Jury Service */}
      <section className="py-12">
        <div className="container max-w-3xl">
          <h2 className="mb-6">Art Jury Service</h2>
          <ul
            className="space-y-2 text-base"
            style={{ color: "var(--color-text-muted)" }}
          >
            <li>"Human and Plants" — SABA, 2024</li>
            <li>
              Young Botanical Artist Competition — in collaboration with Royal
              Botanic Gardens, Kew, by Shirley Sherwood Gallery, 2023
            </li>
            <li>
              Botanical Art Exhibition — Society of Ukrainian Botanical Artists,
              2021
            </li>
            <li>"Flora Russia" — Botanical Art Worldwide Exhibition, 2018</li>
          </ul>
        </div>
      </section>

      {/* Teaching */}
      <section
        className="py-12"
        style={{ backgroundColor: "var(--color-surface-muted)" }}
      >
        <div className="container max-w-3xl">
          <h2 className="mb-6">Teaching</h2>
          <ul
            className="space-y-2 text-base"
            style={{ color: "var(--color-text-muted)" }}
          >
            <li>
              Watercolour for Botanical Art — Online courses (Lectoroom),
              2016–present
            </li>
            <li>Workshop facilitation — Russia, Austria, France (2016–2021)</li>
            <li>
              Plein air workshop — Teplice Botanical Garden, Czech Republic,
              2018
            </li>
          </ul>
        </div>
      </section>

      {/* Bibliography */}
      <section className="py-12">
        <div className="container max-w-3xl">
          <h2 className="mb-6">Bibliography</h2>
          <ul
            className="space-y-3 text-base"
            style={{ color: "var(--color-text-muted)" }}
          >
            <li>
              Alyoshina A. (2021). <em>Contemporary Botanical Art</em>. Moscow:
              Bombora.
            </li>
            <li>
              Sin S. (2020). <em>World Class Botanical Art</em>. South Korea:
              KBAS.
            </li>
            <li>
              Vasilyeva A. (2018).{" "}
              <em>My First Herbarium: Flowers and Herbs</em>. Moscow: Mann,
              Ivanov and Ferber. Illustrated by Svetlana Lanse.
            </li>
            <li>
              Vasilyeva A. (2017).{" "}
              <em>My First Herbarium: Leaves of the Trees</em>. Moscow: Mann,
              Ivanov and Ferber. Illustrated by Svetlana Lanse.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
