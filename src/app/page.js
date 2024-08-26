import BottomNav from "@/components/BottomNav";
import HeaderNav from "@/components/HeaderNav";
import Hero from "@/components/HeroPage";
import SignatureRides from "@/components/SignatureRides";

export default function Home() {
  return (
    <main>
      <div>
        <HeaderNav />
        <Hero />
        <BottomNav />
        <SignatureRides />
      </div>
    </main>
  );
}
