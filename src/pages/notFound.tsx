import notfoundImg from "../assets/notpagefound.png";
import Image from "@rasenganjs/image";
import { useNavigate } from "rasengan";

export default function NotFoundPage() {
  // Navigate
  const navigate = useNavigate();

  // Handler
  const handleGoBack = () => {
    navigate(-1);
  }

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 64px)",
      }}
    >
      <Image 
        src={notfoundImg}
        alt="not found"
        width={300}
        height={300}
      />

      <p className="notfound">Page not found</p>
      <button className="btn-go-back" onClick={handleGoBack}>Go back</button>
    </section>
  );
}
