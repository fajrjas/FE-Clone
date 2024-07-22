import Footer from "@/components/_components/Footer";
import Header from "@/components/_components/Header";
import Hero from "@/components/_components/Hero";
export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center gap-3 pt-2 px-6 ">
        <Header />
        <Hero />
      </main>
      <Footer />
    </>
  );
}
