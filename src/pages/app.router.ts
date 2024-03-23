import { RouterComponent, defineRouter } from "rasengan";
import Home from "@pages/home/home.page";
import AppLayout from "@/pages/app.layout";
import Contact from "@pages/contact/contact.page";
import About from "@pages/about/about.page";
import Projects from "@pages/projects/projects.page";
import Experiences from "@pages/experiences/experiences.page";
import NotFoundPage from "./notFound";


class AppRouter extends RouterComponent {}

export default defineRouter({
  imports: [],
  layout: AppLayout,
  pages: [Home, Contact, About, Projects, Experiences],
  notFoundComponent: NotFoundPage
})(AppRouter);
