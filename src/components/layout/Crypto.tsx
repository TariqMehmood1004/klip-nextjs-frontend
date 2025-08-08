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

const Crypto = () => {
  return (
    <motion.div
      className="font-sora relative overflow-hidden w-full flex flex-col gap-[24px]"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >

      <motion.div variants={fadeUp} className="font-[400] mt-6 flex max-[767px]:flex-col items-center justify-center text-[16px] text-[#000000] leading-[26px] capitalize text-start">
        <h1 className="w-[500px] max-[767px]:w-full font-[700] text-center max-[767px]:text-[38px] md:text-[48px] lg:text-[48px] text-[#000000] leading-[56px]">
          Smarter, Safer, and Smoother Crypto
        </h1>
      </motion.div>

      <motion.div variants={fadeUp} className="w-full max-[767px]:mt-3 mt-[73px] flex max-[767px]:flex-col items-center justify-between gap-[24px]">
        <div className='w-full grid max-[767px]:grid-cols-1 grid-cols-2 gap-[24px]'>
          
          <div className='flex flex-col p-[16px] items-center justify-center overflow-hidden max-[767px]:h-[367px] h-[621px] bg-[#151515] rounded-[8px]'>
            <div className="mt-5 relative max-[767px]:p-10 overflow-hidden">
              {/* Set a fixed height or make it responsive with aspect ratio */}
              <Image
                src="/images/smart-dashboard.svg"
                alt="wallet-benefit"
                width={437}
                height={480}
                className="object-cover transition-all duration-300"
              />
            </div>
          </div>

          <div className='flex flex-col p-[16px] items-center justify-center overflow-hidden max-[767px]:h-[367px] h-[621px] bg-[#151515] rounded-[8px]'>
            <div className="mt-5 relative max-[767px]:p-10 overflow-hidden">
              {/* Set a fixed height or make it responsive with aspect ratio */}
              <Image
                src="/images/withdrawal.svg"
                alt="wallet-benefit"
                width={437}
                height={480}
                className="object-cover transition-all duration-300"
              />
            </div>
          </div>
          
          <div className='flex flex-col p-[16px] items-center justify-center overflow-hidden max-[767px]:h-[367px] h-[621px] bg-[#151515] rounded-[8px]'>
            <div className="mt-5 relative max-[767px]:p-10 overflow-hidden">
              {/* Set a fixed height or make it responsive with aspect ratio */}
              <Image
                src="/images/protection.svg"
                alt="wallet-benefit"
                width={437}
                height={480}
                className="object-cover transition-all duration-300"
              />
            </div>
          </div>

          <div className='flex flex-col p-[16px] items-center justify-center overflow-hidden max-[767px]:h-[367px] h-[621px] bg-[#151515] rounded-[8px]'>
            <div className="mt-5 relative max-[767px]:p-10 overflow-hidden">
              {/* Set a fixed height or make it responsive with aspect ratio */}
              <Image
                src="/images/receipts.svg"
                alt="wallet-benefit"
                width={437}
                height={480}
                className="object-cover transition-all duration-300"
              />
            </div>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
};

export default Crypto;
