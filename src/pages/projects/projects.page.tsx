import { PageComponent, defineRoutePage } from "rasengan";

class Project extends PageComponent {
  render() {
    return (
      <div>
        <h1 className="title">Project</h1>
        <p className="description">
          I have worked on many projects, here are some of them.
        </p>
      </div>
    );
  }
}

export default defineRoutePage({
  path: "projects",
  title: "Project",
  description: "Project page",
})(Project);
