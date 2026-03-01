export default Page;

function Page() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-2xl">
        <h1 className="text-center mb-4">Contact</h1>
        <p
          className="text-center mb-12"
          style={{ color: "var(--color-text-muted)" }}
        >
          For commissions, workshop enquiries, or general questions, please get
          in touch using the form below or via social media.
        </p>

        {/* Netlify Forms — the form is detected at build time by the data-netlify attribute */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="space-y-6"
        >
          {/* Hidden fields for Netlify */}
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don't fill this out: <input name="bot-field" />
            </label>
          </p>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2"
              style={{ color: "var(--color-text)" }}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 border text-sm focus:outline-none focus:ring-2"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-surface)",
                borderRadius: "2px",
              }}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2"
              style={{ color: "var(--color-text)" }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border text-sm focus:outline-none focus:ring-2"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-surface)",
                borderRadius: "2px",
              }}
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium mb-2"
              style={{ color: "var(--color-text)" }}
            >
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              className="w-full px-4 py-3 border text-sm focus:outline-none focus:ring-2"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-surface)",
                borderRadius: "2px",
              }}
            >
              <option value="general">General Enquiry</option>
              <option value="commission">Commission</option>
              <option value="workshop">Workshop / Tuition</option>
              <option value="purchase">Purchase Enquiry</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2"
              style={{ color: "var(--color-text)" }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="w-full px-4 py-3 border text-sm focus:outline-none focus:ring-2 resize-vertical"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-surface)",
                borderRadius: "2px",
              }}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 text-sm uppercase tracking-widest transition-colors cursor-pointer"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "#ffffff",
              border: "none",
            }}
          >
            Send Message
          </button>
        </form>

        <div
          className="mt-12 text-center text-sm"
          style={{ color: "var(--color-text-muted)" }}
        >
          <p>You can also reach Svetlana via:</p>
          <div className="mt-3 space-x-6">
            <a
              href="https://www.instagram.com/svetlana_lanse"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/svetlanawatercolor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
