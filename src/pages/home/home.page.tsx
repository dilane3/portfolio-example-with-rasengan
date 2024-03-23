import { Link, PageComponent, defineRoutePage, Route, useSearchParams, useLocation, Metadata } from "rasengan";
import { useState, useEffect } from "react";
import Image from "@rasenganjs/image";

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
    content: "https://picsum.photos/seed/2/1200/630",
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

class Home extends PageComponent {
  render({ name }: any) {
    const [pic, setPic] = useState("");

    const location = useLocation();
    const res = useSearchParams();

    console.log({ location, res })

    const handleCalculate = () => {
      const worker = new Worker(new URL("./worker.js", import.meta.url), {
        type: "module",
      });

      // console.log("Calculating...");
      // let sum = 0;

      // for (let i = 0; i < 10000000000; i++) {
      //   for (let j = 0; j < 10000000000; j++) {
      //     sum += i + j;
      //   }
      // }

      worker.postMessage("start");

      worker.onmessage = (e) => {
        console.log(e.data);
      };
    };

    useEffect(() => {
      const loadImage = async () => {
        try {
          // Import the image using dynamic import
          // @ts-ignore
          const imageModule = await import(`./../../assets/pic2.jpg`);
          const imageUrl = imageModule.default;

          setPic(imageUrl);
        } catch (error) {
          console.error("Error loading image:", error);
        }
      };

      if (!pic) loadImage();
    }, []);

    return (
      <div className="home">
        <div>
          <h1 className="title">
            <div>Hey 👋🏻</div>
            <div>
              I'm{" "}
              <span
                style={{
                  // Add gradient text

                  background:
                    "linear-gradient(90deg, var(--primary) 20%, #002547)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {name}
              </span>
            </div>
          </h1>
          <p className="description">
            <span
              style={{
                color: "var(--primary)",
                fontWeight: "bold",
                borderRadius: 4,
              }}
            >
              FullStack Javascript Developer
            </span>
            , I love to build things with{" "}
            <span
              style={{
                color: "var(--primary)",
                fontWeight: "bold",
                borderRadius: 4,
                padding: "0 4px",
              }}
            >
              React
            </span>
            . I'm also a big fan of{" "}
            <span
              style={{
                color: "var(--primary)",
                fontWeight: "bold",
                borderRadius: 4,
                padding: "0 4px",
              }}
            >
              Blender
            </span>
            and 3D in general.
          </p>

          <div className="home-buttons">
            {/* <Link to="/about"> */}
            <button className="btn" onClick={handleCalculate}>
              About me
            </button>
            {/* </Link> */}

            <Link to="/contact" state={{ name: "yoooo" }} preventScrollReset>
              <button className="btn">Contact me</button>
            </Link>
          </div>
        </div>

        <Image
          // src={{
          //   uri: "https://picsum.photos/400/600"
          // }}
          src={pic}
          alt="Dilane Kombou 2"
          width={320}
          height={400}
          style={{
            borderRadius: 10,
          }}
          loading="lazy"
          mode="wave"
          objectfit="cover"
          className=""
        />
      </div>
    );
  }

  async loader() {
    return {
      props: {
        name: "Dilane Kombou",
      },
    };
  }
}

export default defineRoutePage({
  path: "/edit?",
  title: "Dilane 3 Portfolio",
  description: "Software Engineer, Javascript developer",
  metadata,
})(Home);
