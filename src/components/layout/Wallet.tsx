'use client';

import React from 'react';
import MyButton from '../ui/Button';
import { ArrowRight } from 'lucide-react';
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

const Wallet = () => {
  return (
    <motion.div
      className="relative overflow-hidden w-full text-center flex max-[767px]:flex-col items-center gap-16 max-[767px]:border-none border border-[#EDEDED] rounded-lg max-[767px]:p-0 p-[80px]"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={fadeUp} className='w-full h-full'>
        <Image src="/images/wallet-mobile.svg" alt="wallet-mobile" width={668} height={471} className='object-cover w-full h-full hover:scale-110 transition-all duration-300' />
      </motion.div>

      <motion.div variants={fadeUp} className="font-[400] text-[16px] text-[#000000] leading-[26px] capitalize text-start">
            <h1 className="font-[700] text-[38px] md:text-[48px] lg:text-[48px] text-[#000000] leading-[56px]">What is KlipAi</h1>
            <p className="font-[400] text-[16px] text-[#000000] leading-[26px] capitalize">KlipAi is the all-in-one smart wallet layer for Web3.
            We turn every crypto transaction into a clean, AI-powered receipt. You can also send tokens using a simple username.
            No TX hashes. No wallet address mistakes.
            Just clarity, control, and convenience.</p>
      </motion.div>
    </motion.div>
  );
};

export default Wallet;
