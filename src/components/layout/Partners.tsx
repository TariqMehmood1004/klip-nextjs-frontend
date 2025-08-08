'use client';

import React from 'react';
import MyButton from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PartnersSlider from '../PartnerSlider';

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

const Partners = () => {
  return (
    <motion.div
      className="font-sora relative overflow-hidden w-full flex flex-col gap-[24px]"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >

      <motion.div variants={fadeUp} className="w-full font-[400] mt-6 flex max-[767px]:flex-col items-center justify-center text-[16px] text-[#000000] leading-[26px] capitalize text-start">
        <p className="max-[767px]:mt-3 max-[767px]:text-[24px] max-[767px]:leading-[120%] text-center font-[400] text-[24px] text-[#C4C4C4] leading-[26px] capitalize">
          Partnered with worldwide leading companies
        </p>
      </motion.div>

      <PartnersSlider />
    </motion.div>
  );
};

export default Partners;
