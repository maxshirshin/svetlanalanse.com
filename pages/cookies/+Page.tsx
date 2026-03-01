export default Page;

function Page() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl prose-container">
        <h1>Cookie Policy</h1>
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
          <h2>1. What Are Cookies</h2>
          <p>
            Cookies are small text files stored on your device when you visit a
            website. They help us understand how you use our site and improve
            your experience.
          </p>

          <h2>2. Cookies We Use</h2>

          <h3>Strictly Necessary Cookies</h3>
          <p>
            These are essential for the website to function and cannot be
            switched off. They are usually only set in response to actions you
            take, such as setting your privacy preferences.
          </p>

          <h3>Analytics Cookies</h3>
          <p>
            With your consent, we use analytics cookies to understand how
            visitors interact with the website. These cookies collect
            information anonymously. We will only set these after you provide
            consent via the cookie banner.
          </p>

          <h3>Third-Party Cookies</h3>
          <p>
            Embedded content from third-party services (such as video players)
            may set their own cookies. We require consent before loading such
            content. See our <a href="/privacy">Privacy Policy</a> for details
            on third-party services.
          </p>

          <h2>3. Managing Your Consent</h2>
          <p>
            When you first visit our site, a cookie consent banner will appear.
            You can:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Accept all cookies</li>
            <li>Accept only strictly necessary cookies</li>
            <li>Customise your preferences</li>
          </ul>
          <p>
            You can change your cookie preferences at any time by clearing your
            browser cookies and revisiting the site.
          </p>

          <h2>4. Your Rights Under PECR</h2>
          <p>
            Under the Privacy and Electronic Communications Regulations (PECR),
            we are required to obtain your consent before setting non-essential
            cookies. We comply with this by using an opt-in cookie consent
            mechanism.
          </p>

          <h2>5. Contact</h2>
          <p>
            If you have questions about our use of cookies, please{" "}
            <a href="/contact">contact us</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
