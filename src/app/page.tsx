import Crypto from "@/components/layout/Crypto";
import CTA from "@/components/layout/CTA";
import KlipFooter from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import Innovators from "@/components/layout/Innovators";
import Journey from "@/components/layout/Journey";
import Partners from "@/components/layout/Partners";
import Promotion from "@/components/layout/Promotion";
import Tracking from "@/components/layout/Tracking";
import Wallet from "@/components/layout/Wallet";
import WalletBenefit from "@/components/layout/WalletBenefit";

export default function Home() {
  return (
    <div className="w-full overflow-hidden p-0 text-center space-y-[100px]">
      <Hero />
      <Wallet />
      <WalletBenefit />
      <Partners />
      <Crypto />
      <CTA />
      <Tracking />
      <Journey />
      <Promotion />
      <Innovators />
      <KlipFooter />
    </div>
  );
}
