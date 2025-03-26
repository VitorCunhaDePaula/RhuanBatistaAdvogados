import Areas from "@/components/Areas/Areas";
import Contato from "@/components/Contato/Contato";
import Filosofia from "@/components/Filosofia/Filosofia";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import QuemSomos from "@/components/Quem-Somos/QuemSomos";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <Hero />
        <QuemSomos />
        <Filosofia />
        <Areas />
        <Contato />
        <Footer />
      </div>
    </div>
  );
}
