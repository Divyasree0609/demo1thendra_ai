import { createBrowserRouter } from "react-router";
import Root from "./Root";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";
import ProjectsPage from "../pages/ProjectsPage";
import InteriorsPage from "../pages/InteriorsPage";
import GalleryPage from "../pages/GalleryPage";
import ContactPage from "../pages/ContactPage";
import PrivacyPage from "../pages/PrivacyPage";
import TermsPage from "../pages/TermsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "services", Component: ServicesPage },
      { path: "projects", Component: ProjectsPage },
      { path: "interiors", Component: InteriorsPage },
      { path: "gallery", Component: GalleryPage },
      { path: "contact", Component: ContactPage },
      { path: "privacy", Component: PrivacyPage },
      { path: "terms", Component: TermsPage },
      { path: "*", Component: HomePage },
    ],
  },
]);
