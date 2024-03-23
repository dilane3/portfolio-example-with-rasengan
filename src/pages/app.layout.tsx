import {
  LayoutComponent,
  Link,
  LoaderOptions,
  Outlet,
  defineRouteLayout,
  useLocation,
  type Metadata
} from "rasengan";
import "@/pages/layout.css";

const metadata: Array<Metadata> = [
  {
    rel: "icon",
    href: "/rasengan.png",
    sizes: "32x32"
  },
  {
    property: "og:title",
    content: "Home Title",
  },
  {
    property: "og:description",
    content: "Home page desc.",
  },
  {
    property: "og:type",
    content: "website",
  },
  {
    property: "og:url",
    content: "https://portfolio-dev-dilane3.vercel.app/",
  },
  {
    property: "og:image",
    content: "https://portfolio-dev-dilane3.vercel.app/og.jpg",
  },
  {
    property: "og:image:width",
    content: "1200",
  },
  {
    property: "og:image:height",
    content: "630",
  },
  {
    property: "twitter:card",
    content: "summary_large_image",
  },
  {
    property: "twitter:url",
    content: "https://portfolio-dev-dilane3.vercel.app/",
  },
  {
    property: "twitter:image",
    content: "https://portfolio-dev-dilane3.vercel.app/og.jpg",
  },
  {
    property: "twitter:image:width",
    content: "1200",
  },
  {
    property: "twitter:image:height",
    content: "630",
  },
];

class AppLayout extends LayoutComponent {
  render({ name }: any) {
    // Get the current route
    const location = useLocation();

    const path = location.pathname;

    // Handlers
    const handleActiveLink = (activePath: string) =>
      path === activePath ? "var(--primary)" : "#333";


    console.log({ layoutName: name })

    return (
      <section className="layout-container">
        <header>
          <Link to="#footer">
            <span className="logo">D3 - Porfolio</span>
          </Link>

          <nav className="nav">
            <ul>
              <li>
                <Link to="/" style={{ color: handleActiveLink("/") }}>
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" style={{ color: handleActiveLink("/about") }}>
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/projects"
                  style={{ color: handleActiveLink("/projects") }}
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  to="/experiences"
                  style={{ color: handleActiveLink("/experiences") }}
                >
                  Experiences
                </Link>
              </li>
            </ul>

            <Link to="/contact">
              <button className="btn">Contact me</button>
            </Link>
          </nav>
        </header>

        <section className="main" style={{ minHeight: 400 }}>
          <Outlet />
        </section>

        <footer id="footer">
          <p>
            Made with <span className="heart">❤</span> by{" "}
            <a
              href="https://dilane3.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              D3
            </a>
          </p>

          <p>Copyright &copy; 2023 All right reserved</p>

          <p>
            Powered by <a href="https://rasengan.org">Rasengan.js</a>
          </p>
        </footer>
      </section>
    );
  }

  async loader(_options: LoaderOptions) {
    return {
      props: {
        name: "D3",
      }
    }
  }
}

export default defineRouteLayout({
  path: "/",
  metadata
})(AppLayout);
