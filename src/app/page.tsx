import Hero from "@/components/layout/Hero";
import Partners from "@/components/layout/Partners";
import Wallet from "@/components/layout/Wallet";
import WalletBenefit from "@/components/layout/WalletBenefit";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full p-0 text-center space-y-24">
      <Hero />
      <Wallet />
      <WalletBenefit />
      <Partners />
    </div>
  );
}
