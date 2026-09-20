import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout/Layout";

const HomePage = lazy(() => import("../pages/home/HomePage"));
const ServicesPage = lazy(() => import("../pages/services/ServicesPage"));
const ProjectsPage = lazy(() => import("../pages/projects/ProjectsPage"));
const AboutPage = lazy(() => import("../pages/about/AboutPage"));
const HowWeWorkPage = lazy(() => import("../pages/how-we-work/HowWeWorkPage"));
const ContactPage = lazy(() => import("../pages/contact/ContactPage"));
const LegalPage = lazy(() => import("../pages/legal/LegalPage"));

export function AppRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/how-we-work" element={<HowWeWorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}