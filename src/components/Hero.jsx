// import React from 'react'
import firstWomanBag from '../assets/first-woman-carrying-tote-bag.png';
import secondWomanBag from '../assets/second-woman-carrying-tote-bag.png';


function Hero() {
  return (
    <>
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-4 sm:p-8 font-sans text-[#18181b]">
      <div className="w-full max-w-[1318px]">
        
        {/* Section Header */}
        <div className="mb-6 pl-1">
          <h1 className="text-[32px] sm:text-[30px] font-raleway font-semibold text-[#001616]">
            Shop your favourite totebag.
          </h1>
          <p className="text-[#6c757d] text-[16px] mt-1 font-light font-montserrat">
            Select the totebag that matches your fashion.
          </p>
        </div>

        {/* Hero Card Container */}
        <div className="relative w-full bg-[#FFFFFF] border border-[#939898] rounded-[37px] overflow-hidden min-h-[454px] sm:min-h-[460px] lg:h-[480px] flex items-stretch">
          
          {/* Top-Left Pagination Pill Indicators */}
          <div className="absolute top-8 left-8 sm:top-10 sm:left-12 z-30 flex items-center gap-2">
            <span className="w-[28px] h-[16px] rounded-full bg-[#2d3238]" />
            <span className="w-[61px] h-[16px] rounded-full bg-[#d1d5db]" />
            <span className="w-[28px] h-[16px] rounded-full bg-[#2d3238]" />
            <span className="w-[28px] h-[16px] rounded-full bg-[#2d3238]" />
          </div>

          {/* Left Text Content */}
          <div className="absolute left-8 sm:left-12 bottom-12 sm:bottom-16 z-30 max-w-[340px]">
            <p className="text-[17px] tracking-[4%] text-[#4E5050] font-normal font-raleway uppercase mb-1.5">
              TRENDING TOTEBAGS
            </p>
            
            <h2 className="text-[38px] sm:text-[40px] font-medium font-montserrat text-[#111212] leading-[1.15] tracking-tight mb-3">
              Leather Totebags
            </h2>
            
            <p className="text-[#495057] text-[14px] sm:text-[17px] font-medium font-raleway">
              Totebag's made with leather fabric. This fabric is usually stronger than the others.
            </p>
          </div>

          {/* Center Model & Bag Image */}
          <div className="absolute left-[28%] sm:left-[34%] lg:left-[28%] bottom-0 h-[88%] sm:h-[94%] lg:h-[635px] w-[44%] sm:w-[400px] flex items-end justify-center pointer-events-none">
            <img
              src={firstWomanBag}
              alt="Person carrying leather tote backpack"
              className="h-full w-full object-cover object-top filter drop-shadow-md rounded-t-2xl"
              
            />
          </div>

          {/* Right Model Image */}
          <div className="absolute right-4 sm:right-10 lg:right-14 bottom-0 h-[72%] sm:h-[381px] lg:h-[84%] w-[28%] sm:w-[381px] lg:w-[22%] flex items-end justify-center pointer-events-none">
            <img
              src={secondWomanBag}
              alt="Woman with hat carrying leather tote bag"
              className="h-full w-full object-cover object-top filter drop-shadow-sm rounded-t-2xl"
              
            />
          </div>

        </div>

      </div>
    </div>
  </>
  )
}

export default Hero
    