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

const Hero = () => {
  return (
    <motion.div
      className="relative  overflow-hidden w-full text-center flex flex-col items-center gap-[24px]"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        variants={fadeUp}
        className="font-[700] text-[38px] md:text-[48px] lg:text-[48px] text-[#000000] leading-[56px]"
      >
        AI receipts. Simple crypto. <br />
        Smart control.
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="font-[400] text-[16px] max-[767px]:order-3 text-[#000000] leading-[26px] capitalize"
      >
        Klip is your all-in-one decentralized wallet <br />
        designed for security, flexibility, and full ownership.
      </motion.p>

      <motion.div variants={fadeUp} className='max-[767px]:order-4'>
        <MyButton className="font-[400] h-[54px] text-[16px] flex items-center uppercase cursor-pointer bg-[#12ED39] hover:bg-[#12ED39]/80 text-black rounded-full px-12 py-2 transition-colors duration-200">
          <span>Get started</span>
          <ArrowRight className="ml-4" />
        </MyButton>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="relative flex items-center justify-center w-full h-[615px] max-[767px]:h-[550px] -z-10"
      >

        <div className='absolute max-[767px]:top-10 top-1/3 max-[767px]:left-0 left-1/5 flex hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition-all duration-300 cursor-pointer items-center justify-between max-[767px]:w-[159px] w-[276px] max-[767px]:h-[48px] h-[72px] rounded-full bg-[#8C8C8C]/34 z-50 px-4 py-[12px] border border-[#C4C4C4]'>
          <div className='first-section flex flex-col gap-[4px] items-start leading-[100%] max-[767px]:text-[10px] text-[18px] font-[400]'>
            <span className='text-[#F7F7F7]'>$2,951.73</span>
            <span>APL 17</span>
          </div>
          <div className='second-section flex flex-col gap-[4px] items-end leading-[100%] max-[767px]:text-[10px] text-[18px] font-[400]'>
            <span className='text-[#F7F7F7]'>Apollo</span>
            <span>APL</span>
          </div>
          <div className='third-section rounded-full bg-[#F7F7F7] p-[5px] max-[767px]:w-[25px] w-[40px] max-[767px]:h-[25px] h-[40px]'>
            <Image
              src="/images/coin.svg"
              alt="Coin"
              width={18}
              height={18}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Blur Background */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none 
            max-[767px]:w-[550px] max-[767px]:h-[450px]"
        >
          <Image
            src="/images/shadow.svg"
            alt="Shadow"
            width={866}
            height={615}
            className="w-full h-full blur-[600px] object-cover"
          />
        </div>

        {/* Stone Image */}
        <motion.div
          variants={fadeUp}
          className="absolute flex items-center top-4 left-1/2 -translate-x-1/2 w-[866px] h-[615px] z-10 pointer-events-none 
            max-[767px]:w-[500px] max-[767px]:h-[350px]"
        >
          <Image
            src="/images/stone.svg"
            alt="Stone"
            width={586}
            height={586}
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Mobile Image */}
        <motion.div
          variants={fadeUp}
          className="absolute -bottom-58 left-1/2 -translate-x-1/2 w-[1196px] h-[897px] z-20 
            max-[767px]:w-[770px] max-[767px]:h-[450px] max-[767px]:bottom-24"
        >
          <Image
            src="/images/mobile.svg"
            alt="Mobile"
            width={1196}
            height={897}
            className="w-full h-full object-contain"
          />
        </motion.div>

        <div className='absolute bottom-1/3 max-[767px]:right-3 right-1/5 flex hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition-all duration-300 cursor-pointer items-center justify-between max-[767px]:w-[159px] w-[276px] max-[767px]:h-[48px] h-[72px] rounded-full bg-[#8C8C8C]/34 z-50 px-4 py-[12px] border border-[#C4C4C4]'>
          <div className='third-section rounded-full bg-[#F7F7F7] p-[5px] max-[767px]:w-[25px] w-[40px] max-[767px]:h-[25px] h-[40px]'>
            <Image
              src="/images/star.svg"
              alt="star"
              width={18}
              height={18}
              className="w-full h-full object-contain"
            />
          </div>
          <div className='first-section flex flex-col gap-[4px] items-start leading-[100%] max-[767px]:text-[10px] text-[18px] font-[400]'>
            <span className='text-[#F7F7F7]'>Romulus</span>
            <span>RLS</span>
          </div>
          <div className='second-section flex flex-col gap-[4px] items-end leading-[100%] max-[767px]:text-[10px] text-[18px] font-[400]'>
            <span className='text-[#F7F7F7]'>$3,271.20</span>
            <span>RLS 24</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
