import { RouterComponent, defineRouter } from "rasengan";
import Home from "./home/home.page";
import AppLayout from "./app.layout";
import Contact from "./contact/contact.page";
import About from "./about/about.page";
import Projects from "./projects/projects.page";
import Experiences from "./experiences/experiences.page";

class AppRouter extends RouterComponent {}

export default defineRouter({
  imports: [],
  layout: AppLayout,
  pages: [Home, Contact, About, Projects, Experiences]
})(AppRouter);
