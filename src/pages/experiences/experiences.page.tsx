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
    content: "https://picsum.photos/seed/12/1200/630",
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
