import React from 'react'
import TestimonialsSection from './TestimonialSection'

const Innovators = () => {
  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 max-[767]:px-8">
          <h1 className="text-4xl max-[767px]:text-[38px] sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Trusted by Innovators
          </h1>
          <p className="text-xl max-[767px]:text-[17px] sm:text-2xl lg:text-3xl font-medium text-[#12ED39] mb-8">
            Your personal financial assistant built into your wallet.
          </p>
          <p className="text-[16px] max-[767px]:text-[12px] sm:text-xl text-gray-700 max-w-2xl mx-auto">
            Secure your digital assets with the peace of mind that comes from knowing you are protected by the best technology in the blockchain space.
          </p>
        </div>

        {/* First row: right → left */}
        <TestimonialsSection direction="left" />

        <div className="mt-6">
          {/* Second row: left → right */}
          <TestimonialsSection direction="right" />
        </div>

      </div>
    </div>
  )
}

export default Innovators