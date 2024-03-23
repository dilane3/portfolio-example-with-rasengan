import { PageComponent, defineRoutePage } from "rasengan";

class Project extends PageComponent {
  render() {
    return (
      <div>
        <h1 className="title">Project</h1>
        <p className="description">
          I have worked on many projects, here are some of them.
        </p>

          {/* <Image
            src={{
              uri: "https://picsum.photos/400/600",
            }}
            width={500}
            height={400}
            alt="Dilane Kombou 2"
            style={{
              borderRadius: 10,
            }}
            loading="lazy"
            objectFit="cover"
            className="a"
          /> */}
      </div>
    );
  }
}

export default defineRoutePage({
  path: "projects",
  title: "Project",
  description: "Project page",
})(Project);
