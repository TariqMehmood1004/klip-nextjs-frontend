'use client';

import React from 'react';
import MyButton from '../ui/Button';
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

const CTA = () => {
  return (
    <motion.div
      className="font-sora relative overflow-hidden w-full max-[767px]:h-full h-[987px] bg-[#151515] flex flex-col gap-[24px]"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >

      <motion.div variants={fadeUp} className="font-[400] mt-20 flex flex-col items-center justify-center gap-10 text-[16px] text-[#000000] leading-[26px] capitalize text-start">
        <h1 className="w-[350px] max-[767px]:w-full max-[767px]:px-3 font-[700] text-center max-[767px]:text-[38px] md:text-[48px] lg:text-[48px] text-[#ffffff] leading-[56px]">
          Meet Your AI Agent
        </h1>
        <p className="w-[700px] max-[767px]:w-full font-[400] text-center max-[767px]:text-[17px] max-[767px]:px-5 md:text-[32px] lg:text-[32px] text-[#12ED39] leading-[120%]">
          Your personal financial assistant built into your wallet.
        </p>
        <p className="w-[400px] max-[767px]:w-full font-[400] text-center max-[767px]:text-[12px] max-[767px]:px-5 md:text-[16px] lg:text-[16px] text-[#FFFFFF] leading-[150%]">
          The KlipAi Agent explains your spending, shows insights, and helps you use crypto smarter.
        </p>

        <div className='z-10 mt-10'>
            {/* Set a fixed height or make it responsive with aspect ratio */}
            <Image
              src="/images/window.svg"
              alt="wallet-benefit"
              width={664}
              height={495}
              className="object-cover max-[767px]:hidden transition-all duration-300 rounded-xl"
            />
            
            {/* Set a fixed height or make it responsive with aspect ratio */}
            <Image
              src="/images/phone.svg"
              alt="wallet-benefit"
              width={664}
              height={495}
              className="object-cover max-[767px]:block hidden p-5 transition-all duration-300 rounded-xl"
            />
          </div>
      </motion.div>

      <div className="absolute top-0 left-0">
              {/* Set a fixed height or make it responsive with aspect ratio */}
              <Image
                src="/images/polygon-1.svg"
                alt="wallet-benefit"
                width={437}
                height={480}
                className="object-cover transition-all duration-300"
              />
      </div>

      <div className="absolute top-0 right-0">
              {/* Set a fixed height or make it responsive with aspect ratio */}
              <Image
                src="/images/polygon-2.svg"
                alt="wallet-benefit"
                width={437}
                height={480}
                className="object-cover transition-all duration-300"
              />
      </div>

      <div className="absolute top-16 right-0">
              {/* Set a fixed height or make it responsive with aspect ratio */}
              <Image
                src="/images/polygon-3.svg"
                alt="wallet-benefit"
                width={437}
                height={480}
                className="object-cover transition-all duration-300"
              />
      </div>

      <div className="absolute max-[767px]:hidden w-full flex items-center justify-center -bottom-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {/* Set a fixed height or make it responsive with aspect ratio */}
              <Image
                src="/images/bg-vector.svg"
                alt="wallet-benefit"
                width={1155}
                height={227}
                className="object-cover transition-all duration-300"
              />
      </div>

      <div className="max-[767px]:relative absolute flex items-center justify-center z-50 top-[70%] max-[767px]:left-1/2 left-[18%] max-[767px]:-translate-y-0 transform -translate-x-1/2 -translate-y-1/2">
              {/* Set a fixed height or make it responsive with aspect ratio */}
              <Image
                src="/images/cta-card-1.svg"
                alt="wallet-benefit"
                width={280}
                height={259}
                className="object-cover transition-all duration-300"
              />
      </div>

      <div className="absolute flex items-center justify-center top-[70%] -right-[2%] transform -translate-x-1/2 -translate-y-1/2">
              {/* Set a fixed height or make it responsive with aspect ratio */}
              <Image
                src="/images/cta-card-2.svg"
                alt="wallet-benefit"
                width={280}
                height={259}
                className="object-cover transition-all duration-300"
              />
      </div>

      <div className="w-full flex items-center justify-center  absolute bottom-0 left-0">
              {/* Set a fixed height or make it responsive with aspect ratio */}
              <Image
                src="/images/vector.svg"
                alt="wallet-benefit"
                width={437}
                height={480}
                className="object-cover transition-all duration-300"
              />
      </div>
    </motion.div>
  );
};

export default CTA;
