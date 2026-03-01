export default Page;

function Page() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl prose-container">
        <h1>Terms of Use</h1>
        <p
          className="text-sm mb-8"
          style={{ color: "var(--color-text-light)" }}
        >
          Last updated: March 2026
        </p>

        <div
          className="space-y-6 text-sm leading-relaxed"
          style={{ color: "var(--color-text-muted)" }}
        >
          <h2>1. Copyright</h2>
          <p>
            All artwork, images, text, and other content on this website are ©
            Svetlana Lanse unless otherwise stated. All rights are reserved. No
            artwork or images may be reproduced, distributed, or used without
            prior written permission from the artist.
          </p>

          <h2>2. Use of This Website</h2>
          <p>
            This website is provided for personal, non-commercial browsing only.
            You may not:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Copy, reproduce, or redistribute any artwork images</li>
            <li>Use any content for commercial purposes without permission</li>
            <li>Modify, adapt, or create derivative works from the content</li>
            <li>Use automated tools to scrape or download content</li>
          </ul>

          <h2>3. Purchasing Artwork</h2>
          <p>
            Purchases made through this website are subject to the following:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Prices are displayed in GBP (£) unless otherwise noted</li>
            <li>
              Purchasing an artwork does not transfer copyright — the artist
              retains all intellectual property rights
            </li>
            <li>
              Refund and returns are handled in accordance with the Consumer
              Rights Act 2015
            </li>
          </ul>

          <h2>4. External Links</h2>
          <p>
            This website may contain links to third-party websites. We are not
            responsible for the content or privacy practices of external sites.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            This website and its content are provided "as is". While we make
            every effort to keep the information accurate and up to date, we
            make no warranties about completeness, reliability, or suitability.
          </p>

          <h2>6. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the
            laws of England and Wales.
          </p>

          <h2>7. Business Information</h2>
          <p>
            In accordance with The Electronic Commerce (EC Directive)
            Regulations 2002:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Name:</strong> Svetlana Lanse
            </li>
            <li>
              <strong>Email:</strong> Available via{" "}
              <a href="/contact">contact form</a>
            </li>
            <li>
              <strong>Location:</strong> United Kingdom
            </li>
          </ul>

          <h2>8. Contact</h2>
          <p>
            If you have questions about these terms, please{" "}
            <a href="/contact">contact us</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
