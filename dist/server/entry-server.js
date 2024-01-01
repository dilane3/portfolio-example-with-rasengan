var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { jsxs, jsx } from "react/jsx-runtime";
import * as React from "react";
import React__default, { useState, useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import { defineRoutePage, PageComponent, Link, defineRouteLayout, LayoutComponent, useLocation, Outlet, defineRouter, RouterComponent, defineConfig } from "rasengan";
import Image from "@rasenganjs/image";
import { useRouteError } from "react-router-dom";
import { Helmet } from "react-helmet";
import { StaticRouterProvider } from "react-router-dom/server.js";
class Home extends PageComponent {
  render() {
    const [pic, setPic] = useState("");
    const [count, setCount] = useState(0);
    useEffect(() => {
      const loadImage = async () => {
        try {
          const imageModule = await import("./assets/pic7-NgQWNa3v.js");
          const imageUrl = imageModule.default;
          setPic(imageUrl);
        } catch (error) {
          console.error("Error loading image:", error);
        }
      };
      if (!pic)
        loadImage();
    }, [pic]);
    return /* @__PURE__ */ jsxs("div", { className: "home", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h1", { className: "title", children: [
          /* @__PURE__ */ jsx("div", { children: "Hey 👋🏻" }),
          /* @__PURE__ */ jsxs("div", { children: [
            "I'm",
            " ",
            /* @__PURE__ */ jsxs(
              "span",
              {
                style: {
                  // Add gradient text
                  background: "linear-gradient(90deg, var(--primary) 20%, #002547)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                },
                children: [
                  "Dilane Kombou ",
                  count
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "description", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              style: {
                color: "var(--primary)",
                fontWeight: "bold",
                borderRadius: 4
              },
              children: "FullStack Javascript Developer"
            }
          ),
          ", I love to build things with",
          " ",
          /* @__PURE__ */ jsx(
            "span",
            {
              style: {
                color: "var(--primary)",
                fontWeight: "bold",
                borderRadius: 4,
                padding: "0 4px"
              },
              children: "React"
            }
          ),
          ". I'm also a big fan of",
          " ",
          /* @__PURE__ */ jsx(
            "span",
            {
              style: {
                color: "var(--primary)",
                fontWeight: "bold",
                borderRadius: 4,
                padding: "0 4px"
              },
              children: "Blender"
            }
          ),
          "and 3D in general."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "home-buttons", children: [
          /* @__PURE__ */ jsx(Link, { to: "/about", children: /* @__PURE__ */ jsx("button", { className: "btn", children: "About me" }) }),
          /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx("button", { className: "btn", children: "Contact me" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        Image,
        {
          src: pic,
          alt: "Dilane Kombou 2",
          width: 320,
          height: 400,
          style: {
            borderRadius: 10
          },
          loading: "lazy",
          mode: "wave",
          objectfit: "cover",
          className: ""
        }
      )
    ] });
  }
  async loader() {
    return {
      props: {
        name: "Dilane3"
      }
    };
  }
}
const Home$1 = defineRoutePage({
  path: "/",
  title: "Home",
  description: "Home page"
})(Home);
class AppLayout extends LayoutComponent {
  render() {
    const location = useLocation();
    const path = location.pathname;
    const handleActiveLink = (activePath) => path === activePath ? "var(--primary)" : "#333";
    return /* @__PURE__ */ jsxs("section", { className: "layout-container", children: [
      /* @__PURE__ */ jsxs("header", { children: [
        /* @__PURE__ */ jsx("span", { className: "logo", children: "D3 - Porfolio" }),
        /* @__PURE__ */ jsxs("nav", { className: "nav", children: [
          /* @__PURE__ */ jsxs("ul", { children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/", style: { color: handleActiveLink("/") }, children: "Home" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about", style: { color: handleActiveLink("/about") }, children: "About" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              Link,
              {
                to: "/projects",
                style: { color: handleActiveLink("/projects") },
                children: "Projects"
              }
            ) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              Link,
              {
                to: "/experiences",
                style: { color: handleActiveLink("/experiences") },
                children: "Experiences"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx("button", { className: "btn", children: "Contact me" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "main", style: { minHeight: 400 }, children: /* @__PURE__ */ jsx(Outlet, {}) }),
      /* @__PURE__ */ jsxs("footer", { children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "Made with ",
          /* @__PURE__ */ jsx("span", { className: "heart", children: "❤" }),
          " by",
          " ",
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://dilane3.com",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "D3"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Copyright © 2023 All right reserved" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Powered by ",
          /* @__PURE__ */ jsx("a", { href: "https://rasengan.org", children: "Rasengan.js" })
        ] })
      ] })
    ] });
  }
}
const AppLayout$1 = defineRouteLayout({
  path: "/"
})(AppLayout);
class Contact extends PageComponent {
  render() {
    return /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h1", { className: "title", children: "Contact" }),
      /* @__PURE__ */ jsx("p", { className: "description", children: "Contact me on some social networks." })
    ] });
  }
}
const Contact$1 = defineRoutePage({
  path: "contact",
  title: "Contact",
  description: "Contact page"
})(Contact);
class About extends PageComponent {
  render() {
    return /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h1", { className: "title", children: "About" }),
      /* @__PURE__ */ jsx("p", { className: "description", children: "My name is Dilane Kombou, I'm a FullStack Javascript Developer. I love to build things with React and Nodejs and I'm also a big fan of Blender and 3D in general." }),
      /* @__PURE__ */ jsxs("p", { className: "description", children: [
        "I'm currently working at ",
        /* @__PURE__ */ jsx("a", { href: "https://www.ubisoft.com/en-US/studio/paris.aspx", target: "_blank", rel: "noopener noreferrer", children: "DrawSoft" }),
        " as a FullStack Javascript Developer and 3D character artist modeling."
      ] })
    ] });
  }
}
const About$1 = defineRoutePage({
  path: "about",
  title: "About",
  description: "About page"
})(About);
class Project extends PageComponent {
  render() {
    return /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h1", { className: "title", children: "Project" }),
      /* @__PURE__ */ jsx("p", { className: "description", children: "I have worked on many projects, here are some of them." })
    ] });
  }
}
const Projects = defineRoutePage({
  path: "projects",
  title: "Project",
  description: "Project page"
})(Project);
class Experience extends PageComponent {
  render() {
    return /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h1", { className: "title", children: "Experiences" }),
      /* @__PURE__ */ jsx("p", { className: "description", children: "Concerning my experiences, I have worked for several companies, here are some of them." })
    ] });
  }
}
const Experiences = defineRoutePage({
  path: "experiences",
  title: "Experiences",
  description: "Experiences page"
})(Experience);
function Loader() {
  return /* @__PURE__ */ jsx("div", { style: {
    position: "fixed",
    backgroundColor: "var(--primary)",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white"
  }, children: "Hi, it's D3..." });
}
class AppRouter extends RouterComponent {
}
const AppRouter$1 = defineRouter({
  imports: [],
  layout: AppLayout$1,
  pages: [Home$1, Contact$1, About$1, Projects, Experiences],
  loaderComponent: Loader
})(AppRouter);
const PageToRender = ({ page, data }) => {
  const Page = page.render;
  const props = data.props || {};
  return jsxs(React.Fragment, { children: [jsxs(Helmet, { children: [jsx("title", { children: page.title }), jsx("meta", { name: "description", content: page.description })] }), jsx(Page, { ...props })] });
};
let ErrorBoundary$1 = class ErrorBoundary extends React.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "state", { hasError: false, error: null, info: null });
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true, error, info });
  }
  render() {
    const { error, info } = this.state;
    if (this.state.hasError) {
      return jsx(ErrorFallbackComponent, { error, info });
    }
    return this.props.children;
  }
};
const ErrorFallbackComponent = ({}) => {
  return jsx("div", { children: "Something went wrong!" });
};
function ErrorBoundary2() {
  let error = useRouteError();
  console.error(error);
  return jsx("div", { children: "Dang!" });
}
const ServerComponent = ({ page }) => {
  const data = {
    props: {}
  };
  return jsx(PageToRender, { page, data });
};
const generateStaticRoutes = (router) => {
  const routes = [];
  const layout = router.layout;
  const LayoutToRender = layout.render;
  const route = {
    path: layout.path,
    elementError: jsx(ErrorBoundary2, {}),
    element: jsx(LayoutToRender, {}),
    children: []
  };
  const pages = router.pages.map((page) => {
    const path = page.path === "/" ? layout.path : page.path;
    return {
      path,
      async loader({ params, request }) {
        const response = await page.loader({ params, request });
        if (response.redirect) {
          const formData = new FormData();
          formData.append("redirect", response.redirect);
          return new Response(formData, {
            status: 302,
            headers: {
              Location: response.redirect
            }
          });
        }
        return response;
      },
      Component() {
        return jsx(ServerComponent, { page });
      },
      elementError: jsx(ErrorBoundary2, {})
    };
  });
  pages.forEach((page) => {
    route.children.push(page);
  });
  routes.push(route);
  for (const besideRouter of router.routers) {
    const besidesRoutes = generateStaticRoutes(besideRouter);
    routes.push(...besidesRoutes);
  }
  return routes;
};
const config = defineConfig({
  reactStrictMode: true,
  // Defining the server port
  server: {
    development: {
      port: 3e3
    },
    production: {
      hosting: "vercel"
    }
  }
});
function render(router, context) {
  const html = ReactDOMServer.renderToString(config.reactStrictMode ? jsx(React__default.StrictMode, { children: jsx(ErrorBoundary$1, { children: jsx(StaticRouterProvider, { router, context }) }) }) : jsx(ErrorBoundary$1, { children: jsx(StaticRouterProvider, { router, context }) }));
  return { html };
}
const staticRoutes = generateStaticRoutes(AppRouter$1);
export {
  render,
  staticRoutes
};
//# sourceMappingURL=entry-server.js.map
