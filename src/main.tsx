import "@/pages/index.css";
import "@rasenganjs/image/lib/styles/index.css";
import { type AppProps } from "rasengan";
// import AppRouter from "./pages/app.router";
import AppRouter from "@/pages/app.router";

export default function App({ Component, children }: AppProps) {
  return <Component router={AppRouter}>{children}</Component>;
}
