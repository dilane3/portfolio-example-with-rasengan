import { Metadata, PageComponent, defineRoutePage } from "rasengan";

const metadata: Metadata = {
  openGraph: {
    type: "website",
    title: "Experiences",
    description: "Software Engineer, Javascript developer",
    url: "https://dilane3.vercel.app/",
    image: "https://picsum.photos/seed/4/400/600",
    width: "400",
    height: "600",
  },
  twitter: {
    card: "summary_large_image",
    image: "https://picsum.photos/seed/6/400/600",
    title: "Experiences",
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

class Experience extends PageComponent {
  render() {
    return (
      <div>
        <h1 className="title">Experiences</h1>
        <p className="description">
          Concerning my experiences, I have worked for several companies, here are some of them. 
        </p>
      </div>
    );
  }
}

export default defineRoutePage({
  path: "experiences/:id(yo|yo2)?",
  title: "Experiences",
  description: "Experiences page",
  metadata,
})(Experience);
