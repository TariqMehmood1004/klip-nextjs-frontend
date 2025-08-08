'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import MyButton from '../ui/Button';
import { X } from 'lucide-react';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <section className={`w-full flex justify-between items-center p-[16px] mt-[24px] md:px-[84px] lg:px-[84px] rounded-[15.73px] bg-[#000000]`}>
        {/* Logo */}
        <div className='logo-section'>
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="klip logo"
              width={99}
              height={30}
              className='object-cover hover:scale-110 transition-all duration-300'
            />
          </Link>
        </div>

        {/* Navigation Links - Desktop only */}
        <div className='nav-section hidden md:flex'>
          <ul className='flex gap-[20px] text-[16px]'>
            {["What is KlipAi", "Send KlapAI", "AI Agent", "Testimonials", "Web3"].map((item, idx) => (
              <li key={idx}>
                <Link
                  href="/"
                  className='font-sora text-[16px] leading-[19.66px] text-[#F6E9E9] hover:text-[#F6E9E9]/70 transition-all duration-300'
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button - Desktop only */}
        <div className='cta-section hidden md:block'>
          <MyButton className="w-[109px] font-sora font-[600] h-[47px] cursor-pointer bg-[#12ED39] hover:bg-[#12ED39]/80 text-[#1E1E1E] rounded-full px-4 py-2 transition-colors duration-200">
            Login
          </MyButton>
        </div>

        {/* Hamburger Icon - Mobile only */}
        <div className='md:hidden'>
          <MyButton
            onClick={() => setIsDrawerOpen(true)}
            className="cursor-pointer font-sora hover:bg-[#282828]/40 text-[#1E1E1E] rounded-md p-3 transition-colors duration-200"
          >
            <Image
              src="/images/hamburger.svg"
              alt="menu icon"
              width={32}
              height={32}
              className='object-cover transition-all duration-300'
            />
          </MyButton>
        </div>
      </section>

      {/* Drawer */}
      <div
        className={`
          fixed top-0 right-0 h-full w-full bg-[#000000] z-50 p-6 flex flex-col gap-6 transform transition-transform duration-300 ease-in-out
          ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className='flex justify-between items-center mb-6'>
          <Image src="/images/logo.svg" alt="klip logo" width={99} height={30} />
          <button onClick={() => setIsDrawerOpen(false)}>
            <X className='text-[#F6E9E9] hover:text-[#F6E9E9]/70 transition-all duration-300' />
          </button>
        </div>

        <ul className='flex flex-col gap-4 text-[16px]'>
          {["What is KlipAi", "Send KlapAI", "AI Agent", "Testimonials", "Web3"].map((item, idx) => (
            <li key={idx}>
              <Link
                href="/"
                className='text-[#F6E9E9] hover:text-[#F6E9E9]/70 transition-all duration-300'
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <div className='mt-auto'>
          <MyButton className="w-full h-[47px] bg-[#12ED39] hover:bg-[#12ED39]/80 text-[#1E1E1E] rounded-full transition-colors duration-200">
            Click Me
          </MyButton>
        </div>
      </div>

      {/* Overlay (optional) */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
