import { PageComponent, defineRoutePage } from "rasengan";

class About extends PageComponent {
  render() {
    return (
      <div>
        <h1 className="title">About</h1>
        <p className="description">
          My name is Dilane Kombou, I&apos;m a FullStack Javascript Developer. I love
          to build things with React and Nodejs and I&apos;m also a big fan of
          Blender and 3D in general.
        </p>

        <p className="description">
          I&apos;m currently working at{" "}
          <a
            href="https://www.ubisoft.com/en-US/studio/paris.aspx"
            target="_blank"
            rel="noopener noreferrer"
          >
            DrawSoft
          </a>{" "}
          as a FullStack Javascript Developer and 3D character artist modeling.
        </p>
      </div>
    );
  }
}

export default defineRoutePage({
  path: "about",
  title: "About",
  description: "About page",
})(About);
