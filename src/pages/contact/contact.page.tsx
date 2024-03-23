import { PageComponent, defineRoutePage, useLocation } from "rasengan";

class Contact extends PageComponent {
  render() {
    const { state } = useLocation();

    console.log({ state })

    return (
      <div>
        <h1 className="title">Contact</h1>
        <p className="description">Contact me on some social networks.</p>
      </div>
    );
  }
}

export default defineRoutePage({
  path: "contact",
  title: "Contact",
  description: "Contact page",
})(Contact);
