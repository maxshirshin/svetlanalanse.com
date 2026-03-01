export default Page;

function Page() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl prose-container">
        <h1>Privacy Policy</h1>
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
          <h2>1. Who We Are</h2>
          <p>
            This website is operated by Svetlana Lanse ("we", "us", "our"), a
            sole trader based in the United Kingdom. For data protection
            enquiries, please contact us via the{" "}
            <a href="/contact">contact page</a>.
          </p>

          <h2>2. What Data We Collect</h2>
          <p>We may collect the following personal data:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Contact form submissions:</strong> name, email address,
              and message content
            </li>
            <li>
              <strong>Analytics data:</strong> anonymised usage data (pages
              visited, time on site, browser type) via cookies — see our{" "}
              <a href="/cookies">Cookie Policy</a>
            </li>
            <li>
              <strong>Email newsletter:</strong> email address (if you
              subscribe)
            </li>
          </ul>

          <h2>3. Why We Collect It (Legal Basis)</h2>
          <p>Under UK GDPR, we process your data on the following bases:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Consent:</strong> for analytics cookies and newsletter
              subscriptions
            </li>
            <li>
              <strong>Legitimate interest:</strong> for responding to contact
              form enquiries
            </li>
            <li>
              <strong>Contractual necessity:</strong> if you purchase artwork or
              enrol in a workshop
            </li>
          </ul>

          <h2>4. How Long We Keep It</h2>
          <p>
            Contact form submissions are retained for up to 2 years. Analytics
            data is retained for 26 months. Newsletter subscription data is kept
            until you unsubscribe.
          </p>

          <h2>5. Your Rights</h2>
          <p>Under UK GDPR, you have the right to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access your personal data</li>
            <li>Rectify inaccurate data</li>
            <li>Request erasure ("right to be forgotten")</li>
            <li>Restrict or object to processing</li>
            <li>Data portability</li>
            <li>
              Lodge a complaint with the ICO (Information Commissioner's Office)
            </li>
          </ul>

          <h2>6. Third-Party Services</h2>
          <p>
            We may share data with the following third-party services, each with
            their own privacy policies:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Netlify (website hosting and form handling)</li>
            <li>Cloudinary (image delivery)</li>
            <li>Mux (video streaming)</li>
          </ul>

          <h2>7. Contact</h2>
          <p>
            For any data protection requests, please use the{" "}
            <a href="/contact">contact form</a> or write to us at our registered
            address (available on request).
          </p>
        </div>
      </div>
    </section>
  );
}
