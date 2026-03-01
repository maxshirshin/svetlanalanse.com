export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t py-12 mt-16"
      style={{
        borderColor: "var(--color-border-light)",
        backgroundColor: "var(--color-surface-muted)",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3
              className="text-lg tracking-[0.2em] uppercase mb-3"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--color-primary-dark)",
              }}
            >
              Svetlana Lanse
            </h3>
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              Botanical artist working in watercolour and oil.
              <br />
              Internationally exhibited artist and tutor.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-wide mb-3"
              style={{ color: "var(--color-text)" }}
            >
              Quick Links
            </h4>
            <ul
              className="space-y-2 text-sm"
              style={{ color: "var(--color-text-muted)" }}
            >
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/shop">Shop</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-wide mb-3"
              style={{ color: "var(--color-text)" }}
            >
              Connect
            </h4>
            <ul
              className="space-y-2 text-sm"
              style={{ color: "var(--color-text-muted)" }}
            >
              <li>
                <a
                  href="https://www.instagram.com/svetlana_lanse"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/svetlanawatercolor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
            <div
              className="mt-4 space-x-4 text-xs"
              style={{ color: "var(--color-text-light)" }}
            >
              <a href="/privacy">Privacy Policy</a>
              <a href="/cookies">Cookie Policy</a>
              <a href="/terms">Terms</a>
            </div>
          </div>
        </div>

        <div
          className="mt-10 pt-6 border-t text-center text-xs"
          style={{
            borderColor: "var(--color-border)",
            color: "var(--color-text-light)",
          }}
        >
          © {currentYear} Svetlana Lanse. All rights reserved. All artwork
          images are copyrighted.
        </div>
      </div>
    </footer>
  );
}
