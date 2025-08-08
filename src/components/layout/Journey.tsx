import Image from 'next/image'
import React from 'react'

const Journey = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 max-[767]:px-8">
          <h1 className="text-4xl max-[767px]:text-[38px] sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Join The Journey
          </h1>
          <p className="text-xl max-[767px]:text-[17px] sm:text-2xl lg:text-3xl font-medium text-[#12ED39] mb-8">
            Your personal financial assistant built into<br />
            your wallet.
          </p>
          <p className="text-[16px] max-[767px]:text-[12px] sm:text-xl text-gray-700 max-w-2xl mx-auto">
            The KlipAi Agent Explains Your Spending, Shows<br />
            Insights, And Helps You Use Crypto Smarter.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-center max-[767px]:gap-12 gap-20">
          {/* Left Features */}
          <div className="flex flex-col space-y-8 lg:space-y-20">
            <div className="text-center flex items-center gap-2 lg:text-right">
                <span className="w-2 h-2 bg-[#12ED39] rounded-full"></span>
              <h3 className="text-xl max-[767px]:text-[17px] font-semibold text-gray-900">
                KlipAi MVP Goes Live
              </h3>
              <div className="inline-flex max-[767px]:text-[17px] items-center bg-[#12ED39] px-3 py-1 rounded-lg text-sm font-medium">
                Live
              </div>
            </div>

            <div className="text-center flex items-start gap-2 lg:text-right max-w-sm lg:ml-auto max-[767px]:-mt-1 mt-10">
                <span className="w-2 h-2 bg-[#12ED39] rounded-full mt-2"></span>

              <h3 className="text-lg max-[767px]:text-[17px] text-start font-medium text-gray-900">
                Wallet Connection +<br />
                AI-Generated<br />
                Transaction Receipts
              </h3>
            </div>
          </div>

          {/* Mobile App Preview */}
          <div className="relative p-5">
            <div className="w-[427px] h-[862px] rounded-3xl p-2">
              {/* Phone Frame */}
              <Image 
                src="/images/reward-phone.svg"
                alt="phone"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Features */}
          <div className="flex flex-col space-y-8 lg:space-y-20">
            <div className="text-center lg:text-left max-w-sm flex items-start gap-2">
                <span className="w-2 h-2 bg-[#12ED39] rounded-full mt-2"></span>

              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Email-Based Onboarding &<br />
                <span className="text-gray-500 font-[500]">@Username</span> Crypto Sending
              </h3>
            </div>

            <div className="text-center lg:text-left max-w-sm max-[767px]:ml-0 -ml-10 max-[767px]:mt-0 mt-20 flex items-start gap-2">
                <span className="w-2 h-2 bg-[#12ED39] rounded-full mt-2"></span>

              <div>
                <h3 className="text-lg font-medium text-gray-900">
                Exciting $KLIP Rewards System
              </h3>
              <p className="text-gray-500 text-sm">
                (Earn Through Usage)
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Journey