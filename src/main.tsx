import "./pages/index.css";
import { type AppProps } from "rasengan";
import AppRouter from "./pages/app.router";

export default function App({ Component }: AppProps) {
  return <Component router={AppRouter} />;
}