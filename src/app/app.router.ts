import { RouterComponent, defineRouter } from "rasengan";
import Home from "@app/home/home.page";
import AppLayout from "@/app/app.layout";
import Contact from "@app/contact/contact.page";
import About from "@app/about/about.page";
import Projects from "@app/projects/projects.page";
import Experiences from "@app/experiences/experiences.page";
import NotFoundPage from "./notFound";

class AppRouter extends RouterComponent {}

export default defineRouter({
  imports: [],
  layout: AppLayout,
  pages: [Home, Contact, About, Projects, Experiences],
  notFoundComponent: NotFoundPage,
})(AppRouter);
