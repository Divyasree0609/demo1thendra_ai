import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";
import ScrollToTop from "../components/ScrollToTop";

export default function Root() {
  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      <ScrollToTop />
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
