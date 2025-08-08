import Image from 'next/image';
import React from 'react';
import MyButton from '../ui/Button';

export default function KlipFooter() {
  return (
    <div className="bg-black text-white relative z-10">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full flex flex-col items-center">
        <Image src="/images/green-shadow.svg" alt="Blurry Background" width={400} height={400} />
      </div>

      <div className='w-full absolute h-full -z-1'>
        <div className="absolute top-[40%] left-[15%]">
          <Image src="/images/bulb/vector.svg" alt="Vector" width={30} height={30} />
        </div>

        <div className="absolute top-[60%] left-[25%]">
          <Image src="/images/bulb/vector.svg" alt="Vector" width={30} height={30} />
        </div>

        <div className="absolute top-[35%] right-[15%]">
          <Image src="/images/bulb/vector.svg" alt="Vector" width={30} height={30} />
        </div>

        <div className="absolute top-[50%] right-[8%]">
          <Image src="/images/bulb/vector.svg" alt="Vector" width={30} height={30} />
        </div>

        <div className="absolute top-[70%] right-[25%]">
          <Image src="/images/bulb/vector.svg" alt="Vector" width={30} height={30} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-20">
        {/* Logo */}
        <div className="mb-12">
          <div className="flex items-center justify-center">
            <Image src="/images/logo.svg" alt="Klip Logo" width={200} height={200} />
          </div>
        </div>

        {/* Central Logo Circle */}
        <div className="mb-16 relative">
          <Image src="/images/token.svg" alt="Klip Logo" width={200} height={200} />
        </div>

        {/* Main Heading */}
        <div className="text-center mb-8">
          <h1 className="text-[48px] max-[767px]:text-[32px] font-[500] leading-tight">
            Take Full Control of<br />
            Your Crypto.
          </h1>
        </div>

        {/* CTA Button */}
        <div className="mb-12">
          <MyButton className="bg-white text-black px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg">
            Learn More
          </MyButton>
        </div>

        {/* Description */}
        <div className="text-center mb-16">
          <p className="text-gray-300 text-lg max-[767px]:text-[12px] max-w-2xl mx-auto leading-relaxed">
            Experience secure storage, fast payments,<br />
            and seamless Web3 access with Klip.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-row items-center justify-between px-6 py-6 text-[#777777] text-sm">
          <div className="flex text-[18px] max-[767px]:text-[12px] flex-row gap-10 items-center space-y-2 sm:space-y-0 sm:space-x-8">
            <a href="#" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Terms & Condition
            </a>
          </div>
          <div className="mt-4 max-[767px]:mt-0">
            <span>© KlipAI</span>
          </div>
        </div>
      </div>
    </div>
  );
}