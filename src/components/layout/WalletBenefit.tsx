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

const WalletBenefit = () => {
  return (
    <motion.div
      className="font-sora relative overflow-hidden w-full flex flex-col gap-[24px]"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={fadeUp} className='w-[120px] h-[55px] flex max-[767px]:flex-col items-center justify-center bg-[#119200]/19 px-[15px] py-[10px] border border-[#119200] rounded-full'>
        <h1 className="font-[700] text-[16px] md:text-[16px] lg:text-[16px] text-[#000000] leading-[56px] uppercase">Benefit</h1>
      </motion.div>

      <motion.div variants={fadeUp} className="font-[400] mt-6 flex max-[767px]:flex-col items-end justify-between text-[16px] text-[#000000] leading-[26px] capitalize text-start">
        <h1 className="font-[700] w-[500px] max-[767px]:w-full text-[38px] md:text-[48px] lg:text-[48px] text-[#000000] leading-[56px]">
          Say goodbye to Wallet Addresses.
        </h1>
        <p className="w-[303px] max-[767px]:w-full max-[767px]:mt-3 max-[767px]:text-[12px] max-[767px]:leading-[18px] font-[400] text-[16px] text-[#000000] leading-[26px] capitalize">
          Just enter the handle, select your token, and confirm. No copy-paste. No errors. No friction.
        </p>
      </motion.div>

      <motion.div variants={fadeUp} className="w-full max-[767px]:h-full h-[838px] max-[767px]:mt-3 mt-[73px] flex max-[767px]:flex-col items-center justify-between gap-[24px]">
        <div className="max-[767px]:w-full h-[838px] w-[411px] bg-[#151515] text-start rounded-[20px]">
          <div className="flex justify-between px-10 pt-5">
            <Image
              src="/images/cap.svg"
              alt="wallet-benefit"
              width={55}
              height={55}
              className="object-cover transition-all duration-300"
            />
            <Image
              src="/images/plus.svg"
              alt="wallet-benefit"
              width={45}
              height={25}
              className="object-cover transition-all duration-300"
            />
          </div>

          <h1 className="font-[400] px-10 text-[30px] md:text-[36px] lg:text-[36px] text-[#ffffff] leading-[45px] mt-5">
            Token <br /> Support
          </h1>

          <div className="mt-5 w-full h-[635px] relative flex items-center justify-center">
            {/* Set a fixed height or make it responsive with aspect ratio */}
            <Image
              src="/images/mobile.png"
              alt="wallet-benefit"
              width={300}
              height={200}
              className="object-contain transition-all duration-300"
            />

            <div className='w-full h-20 absolute bottom-0 left-0'>
              <Image
                src="/images/lines.svg"
                alt="wallet-benefit"
                fill
                className="object-cover w-full h-full transition-all duration-300"
              />
            </div>
          </div>
        </div>

        <div className='max-[767px]:w-full w-[calc(100%-411px)] flex flex-wrap gap-[24px]'>
          
          <div className='max-[767px]:w-full w-[451px] flex flex-col p-[16px] items-center overflow-hidden h-[408px] bg-[#151515] rounded-[20px]'>
            <h1 className="font-[400] text-[30px] md:text-[36px] lg:text-[36px] text-[#ffffff] leading-[45px] mt-5">
              Secure Transfers
            </h1>

            <div className="mt-5 relative w-[329px] border border-gray-400 rounded-[30px] bg-black overflow-hidden">
              {/* Set a fixed height or make it responsive with aspect ratio */}
              <Image
                src="/images/mask.svg"
                alt="wallet-benefit"
                width={329}
                height={330}
                className="object-cover transition-all duration-300"
              />
              <div className='absolute top-0 left-0 w-full'>
                <div className='w-full h-18'></div>
                <div className='w-full flex items-center justify-between p-5'>
                  <Image
                    src="/images/wifi.svg"
                    alt="wallet-benefit"
                    width={24}
                    height={17}
                    className="object-cover transition-all duration-300"
                  />
                  <Image
                    src="/images/chip.svg"
                    alt="wallet-benefit"
                    width={24}
                    height={17}
                    className="object-cover transition-all duration-300"
                  />
                </div>

                <div className='w-full flex items-center justify-between p-5'>
                  <Image
                    src="/images/card-info.svg"
                    alt="wallet-benefit"
                    width={197}
                    height={17}
                    className="object-cover transition-all duration-300"
                  />
                  <div className='relative flex items-center'>
                    <div className='w-5 h-5 border border-white rounded-full'></div>
                    <div className='absolute top-0 right-3 w-5 h-5 border border-white rounded-full'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='max-[767px]:w-full w-[451px] flex p-[16px] flex-col items-center overflow-hidden h-[408px] bg-[#151515] rounded-[20px]'>
            <div className="w-full flex items-end justify-end">
              <Image 
                src="/images/plus.svg"
                alt="wallet-benefit"
                width={45}
                height={25}
                className="object-cover transition-all duration-300"
              />
            </div>

            <div className="relative w-full h-full">
              {/* Set a fixed height or make it responsive with aspect ratio */}
              <div className='absolute top-0 left-5 mt-3 rounded-[30px]'>
                <Image
                  src="/images/rumulus-card.svg"
                  alt="wallet-benefit"
                  width={313}
                  height={241}
                  className="object-cover transition-all duration-300"
                />
              </div>
              
              <div className='absolute bottom-5 right-0 rounded-[30px]'>
                <Image
                  src="/images/performance-card.svg"
                  alt="wallet-benefit"
                  width={202}
                  height={173}
                  className="object-cover transition-all duration-300"
                />
              </div>
            </div>
          </div>
          
          <div className='max-[767px]:w-full w-[451px] flex p-[16px] flex-col items-center overflow-hidden h-[408px] bg-[#151515] rounded-[20px]'>
            <div className="w-full flex items-end justify-end">
              <Image 
                src="/images/plus.svg"
                alt="wallet-benefit"
                width={45}
                height={25}
                className="object-cover transition-all duration-300"
              />
            </div>

            <div className="relative w-full h-full">
              {/* Set a fixed height or make it responsive with aspect ratio */}
              <div className='absolute top-0 h-[250px] left-5 mt-0 rounded-[30px]'>
                <Image
                  src="/images/card-1.svg"
                  alt="wallet-benefit"
                  width={313}
                  height={221}
                  className="object-cover w-full h-full transition-all duration-300"
                />
              </div>
              
              <div className='absolute bottom-5 right-0 rounded-[30px]'>
                <Image
                  src="/images/card-2.svg"
                  alt="wallet-benefit"
                  width={202}
                  height={173}
                  className="object-cover transition-all duration-300"
                />
              </div>
            </div>
          </div>

          <div className='relative max-[767px]:w-full w-[451px] flex flex-col p-[16px] items-center overflow-hidden h-[408px] bg-[#151515] rounded-[20px]'>
            <h1 className="font-[400] text-[30px] md:text-[36px] lg:text-[36px] text-[#ffffff] leading-[45px] mt-5">
              Unique Identity
            </h1>

            <div className='absolute top-0 right-2 flex items-center justify-between p-5'>
              <Image
                src="/images/plus.svg"
                alt="wallet-benefit"
                width={35}
                height={35}
                className="object-cover transition-all duration-300"
              />
            </div>

            <div className='relative w-full h-full flex items-center justify-center rounded-[30px]'>
                <Image
                  src="/images/layer-1.svg"
                  alt="wallet-benefit"
                  width={332}
                  height={273}
                  className="object-cover transition-all duration-300"
                />

                <Image
                  src="/images/layer-2.svg"
                  alt="wallet-benefit"
                  width={382}
                  height={473}
                  className="object-cover absolute -left-1 transition-all duration-300"
                />
            </div>

            
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WalletBenefit;
