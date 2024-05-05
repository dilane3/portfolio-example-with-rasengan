import { Metadata, PageComponent, defineRoutePage } from "rasengan";

const metadata: Metadata = {
  openGraph: {
    type: "website",
    title: "Projects",
    description: "Software Engineer, Javascript developer",
    url: "https://dilane3.vercel.app/",
    image: "https://picsum.photos/seed/4/400/600",
    width: "400",
    height: "600",
  },
  twitter: {
    card: "summary_large_image",
    image: "https://picsum.photos/seed/6/400/600",
    title: "Projects",
    description: "Software Engineer, Javascript developer",
    creator: "@dilane3",
    site: "@dilane3",
  },
  links: [
    {
      rel: "icon",
      href: "/rasengan.png",
    },
  ],
  metadataTags: [
    {
      name: "description",
      content: "Software Engineer, Javascript developer",
    },
  ],
};

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
