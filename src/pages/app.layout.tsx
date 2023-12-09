import {
  LayoutComponent,
  Link,
  Outlet,
  defineRouteLayout,
  useLocation,
} from "rasengan";
import "./layout.css";

class AppLayout extends LayoutComponent {
  render() {
    // Get the current route
    const location = useLocation();

    const path = location.pathname;

    // Handlers
    const handleActiveLink = (activePath: string) =>
      path === activePath ? "var(--primary)" : "#333";

    return (
      <section className="layout-container">
        <header>
          <span className="logo">D3 - Porfolio</span>

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

        <footer>
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
            Powered by <a href="https://rasengan.dev">Rasengan.js</a>
          </p>
        </footer>
      </section>
    );
  }
}

export default defineRouteLayout({
  path: "/",
})(AppLayout);
