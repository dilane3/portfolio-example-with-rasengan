import { PageComponent, defineRoutePage } from "rasengan";

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
  // title: "Experiences",
  description: "Experiences page",
})(Experience);
