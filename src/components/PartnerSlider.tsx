import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  "/images/partner1.svg",
  "/images/partner2.svg",
  "/images/partner3.svg",
  "/images/partner4.svg",
  "/images/partner5.svg",
  "/images/partner6.svg",
];

export default function PartnersSlider() {
  return (
    <div className="overflow-hidden w-full bg-transparent py-5">
      <motion.div
        className="flex gap-[87.99px] whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 15, // speed (lower is faster)
          ease: "linear",
        }}
      >
        {/* Duplicate the logos so animation loops seamlessly */}
        {[...logos, ...logos].map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center min-w-[200px]"
          >
            <Image
              src={item}
              alt={`partner-${index}`}
              width={200}
              height={200}
              className="object-cover  transition-all duration-300"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
