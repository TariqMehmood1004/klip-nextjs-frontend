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

const Promotion = () => {
  return (
    <section className="relative font-sora relative w-full h-full overflow-hidden rounded-b-full flex flex-col gap-[24px]">
      <motion.div
        className="font-sora relative top-0 left-0 z-20 w-full bg-[#74F174] rounded-b-full flex flex-col gap-[24px] py-50 max-[767px]:px-20"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >

        <div className='w-full flex items-center justify-center z-10 mt-16'>
          {/* Set a fixed height or make it responsive with aspect ratio */}
          <Image
            src="/images/promotion-mobile.svg"
            alt="wallet-benefit"
            width={427}
            height={862}
            className="object-cover transition-all duration-300"
          />
        </div>
      </motion.div>

      <motion.div
        className="font-sora relative z-10 w-full bg-[#ffffff] rounded-b-full flex flex-col gap-[24px] py-50 max-[767px]:px-20"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >

        <div className='w-full flex items-center justify-center z-10 mt-16'>
          {/* Set a fixed height or make it responsive with aspect ratio */}
          <Image
            src="/images/promotion-mobile-2.svg"
            alt="wallet-benefit"
            width={427}
            height={862}
            className="object-cover transition-all duration-300"
          />
        </div>
      </motion.div>

      <motion.div
        className="font-sora relative bottom-200 left-0 max-[767px]:h-full h-[160vh] -z-1 w-full bg-[#74F174] rounded-b-full flex flex-col gap-[24px] py-50 max-[767px]:px-20"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >

        <div className='w-full flex items-center justify-center z-10 mt-[750px]'>
          {/* Set a fixed height or make it responsive with aspect ratio */}
          <Image
            src="/images/promotion-mobile-3.svg"
            alt="wallet-benefit"
            width={427}
            height={862}
            className="object-cover transition-all duration-300"
          />
        </div>
      </motion.div>

    </section> 
  );
};

export default Promotion;
