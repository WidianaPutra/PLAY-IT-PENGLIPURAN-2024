import "@/app/globals.css";
import AboutPage from "@/components/about";
import GalleryPage from "@/components/Galerry";
import HomePage from "@/components/home";
import NavgationBar from "@/components/navigationBar";

export default function App() {
  return (
    <div>
      {/* <NavgationBar /> */}
      <HomePage />
      <AboutPage />
      <GalleryPage />
    </div>
  );
}
