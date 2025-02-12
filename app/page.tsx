import Header from "./components/Header";
import NavBar from "./components/NavBar";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] font-[family-name:var(--font-geist-sans)]">
      <NavBar />
      <div className="container mx-auto px-12 py-6">
        <Header />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
