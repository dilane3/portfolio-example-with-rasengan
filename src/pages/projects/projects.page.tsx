import { Metadata, PageComponent, defineRoutePage } from "rasengan";

const metadata: Array<Metadata> = [
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
    content: "https://picsum.photos/seed/20/1200/630",
  },
  {
    property: "og:image:width",
    content: "1200",
  },
  {
    property: "og:image:height",
    content: "630",
  }
];

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
  metadata,
})(Project);
