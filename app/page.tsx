import Header from "./components/Header";
import NavBar from "./components/NavBar";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Hobbies from "./components/Hobbies";
import Qualities from "./components/Qualities";
import Wishes from "./components/Wishes";
import Parcours from "./components/Parcours";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] font-[family-name:var(--font-geist-sans)]">
      <NavBar />
      <div className="container mx-auto px-12 py-6">
        <Header />
        <Parcours />
        <Qualities />
        <Skills />
        <Hobbies />
        <Projects />
        <Wishes />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
