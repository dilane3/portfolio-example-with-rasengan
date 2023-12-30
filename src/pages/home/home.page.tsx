import { Link, LoaderOptions, PageComponent, defineRoutePage } from "rasengan";
import { useState, useEffect } from "react";
import Image from "@rasengan/image";

class Home extends PageComponent {
  render({ name }: { name: string }) {
    const [pic, setPic] = useState("");

    useEffect(() => {
      const loadImage = async () => {
        try {
          // Import the image using dynamic import
          // @ts-ignore
          const imageModule = await import(`./../../assets/pic7.png`);
          const imageUrl = imageModule.default;

          setPic(imageUrl);
        } catch (error) {
          console.error("Error loading image:", error);
        }
      };

      if (!pic) loadImage();
    }, [pic]);

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
            <Link to="/about">
              <button className="btn">About me</button>
            </Link>

            <Link to="/contact">
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
          // mode="wave"
          objectfit="cover"
        />
      </div>
    );
  }

  async loader() {
    return {
      props: {
        name: "Dilane3"
      },
    };
  }
}

export default defineRoutePage({
  path: "/",
  title: "Home",
  description: "Home page",
})(Home);
