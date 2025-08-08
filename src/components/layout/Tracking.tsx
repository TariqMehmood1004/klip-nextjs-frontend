'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const Tracking = () => {
  return (
    <>
      <motion.div
        className="font-sora relative max-[767px]:px-3 px-20 overflow-hidden w-full bg-[#12ED39] max-[767px]:h-full h-[100vh] flex flex-col gap-[24px]"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >

        <motion.div variants={fadeUp} className="font-[400] mt-40 flex flex-col items-center justify-center text-[16px] text-[#000000] capitalize text-start">
          <span className="w-[860px] max-[767px]:w-full font-[700] text-center max-[767px]:text-[30px] md:text-[60px] lg:text-[60px] text-[#ffffff] leading-[103%]">
            Simplify the way you manage your crypto with a smart wallet that offers real-time AI assistance, rapid transactions, and
          </span>

          <span className="w-[760px] max-[767px]:w-full font-[700] text-center max-[767px]:text-[30px] md:text-[60px] lg:text-[60px] text-[#A6A6A6] leading-[103%]">
            effortless tracking making it easier than ever to stay on top of your money.
          </span>
        </motion.div>

        <div className="w-full absolute top-0 left-0">
          <Image
            src="/images/green.svg"
            alt="wallet-benefit"
            width={1440}
            height={1050}
            className="object-cover w-full h-full transition-all duration-300"
          />
        </div>

        <div className="w-full px-50 max-[767px]:px-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/images/bulb.svg"
            alt="wallet-benefit"
            width={1440}
            height={1050}
            className="object-cover w-full h-full transition-all duration-300"
          />
        </div>

        <div className='z-10 mt-16'>
          {/* Set a fixed height or make it responsive with aspect ratio */}
          <Image
            src="/images/dashboard.svg"
            alt="wallet-benefit"
            width={664}
            height={495}
            className="object-cover w-full h-full transition-all duration-300 rounded-xl"
          />
        </div>
      </motion.div>
    </> 
  );
};

export default Tracking;
