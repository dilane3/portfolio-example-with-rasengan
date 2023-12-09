import { Link, PageComponent, defineRoutePage } from "rasengan";
import { useState, useEffect } from "react";

class Home extends PageComponent {
  render() {
    const [pic, setPic] = useState("");

    useEffect(() => {
      const loadImage = async () => {
        try {
          // Import the image using dynamic import
          // @ts-ignore
          const imageModule = await import(`../../assets/pic3.jpg`);
          const imageUrl = imageModule.default;

          setPic(imageUrl);
        } catch (error) {
          console.error("Error loading image:", error);
        }
      };

      loadImage();
    }, []);

    return (
      <div className="home">
        <div style={{ width: 600 }}>
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
                Dilane Kombou
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

        <div style={{ width: 300, height: 420 }}>
          <img
            src={pic}
            alt="Dilane Kombou"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 10,
            }}
          />
        </div>
      </div>
    );
  }
}

export default defineRoutePage({
  path: "/",
  title: "Home",
  description: "Home page",
})(Home);
