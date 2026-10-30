// import React from 'react';
import Explore from '../assets/explore.jpg';
import Branded from '../assets/branded.jpg';
import officetote from '../assets/office-totes.png';

const FashionCategorySection = () => {
  return (
    <section className="w-full bg-white py-12 px-6 sm:px-12 md:px-16 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Card 1: Explore the totebag fashion (Wide Left Card) */}
        <div className="lg:col-span-6 relative min-h-[480px] sm:min-h-[520px] rounded-[28px] overflow-hidden flex flex-col justify-end p-8 sm:p-10 text-white group cursor-pointer">
          {/* Background Image */}
          <img
            src={Explore}
            alt="Explore the totebag fashion"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/30" />

          {/* Content Container */}
          <div className="relative z-10 max-w-md mb-8 font-raleway">
            <h2 className="text-3xl sm:text-4xl font-medium font-raleway tracking-tight leading-tight mb-3">
              Explore the totebag fashion
            </h2>
            <p className="text-sm sm:text-[19px] text-gray-200 font-normal font-raleway leading-[140%] mb-2">
              Totes are reliable carriage that adds to the details of your dress fashion with contradicting your fashion sense.
            </p>
            <button className="bg-white text-slate-900 hover:bg-gray-100 font-bold font-raleway text-sm px-5 py-4 rounded-full transition-colors duration-200 shadow-sm">
              Shop now
            </button>
          </div>
        </div>

        {/* Card 2: Branded Collections (Middle Narrow Card) */}
        <div className="lg:col-span-3 relative min-h-[480px] sm:min-h-[520px] rounded-[28px] overflow-hidden flex flex-col justify-end p-6 sm:p-8 text-white group cursor-pointer">
          {/* Background Image */}
          <img
            src={Branded}
            alt="Branded Collections"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/35 transition-opacity duration-300 group-hover:bg-black/25" />

          {/* Content Container */}
          <div className="relative z-10 mb-25 font-raleway">
            <h3 className="text-2xl sm:text-3xl font-medium font-raleway tracking-tight leading-[120%]">
              Branded<br />Collections
            </h3>
            <p className="text-xs sm:text-[15px] text-gray-200 font-light">
              Cuustamize your style and brands here on thetotebagshop.
            </p>
          </div>
        </div>

        {/* Card 3: Totes as Office wears (Right Narrow Card) */}
        <div className="lg:col-span-3 relative min-h-[480px] sm:min-h-[520px] rounded-[28px] overflow-hidden flex flex-col justify-end p-6 sm:p-8 text-white group cursor-pointer">
          {/* Background Image */}
          <img
            src={officetote}
            alt="Totes as Office wears"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/45 transition-opacity duration-300 group-hover:bg-black/35" />

          {/* Content Container */}
          <div className="relative z-10 mb-25 font-raleway">
            <h3 className="text-2xl sm:text-3xl font-medium font-raleway tracking-tight leading-[120%] mb-1">
              Totes as<br />Office wears.
            </h3>
            <p className="text-xs sm:text-[15px] text-gray-200 font-light ">
              Totes can be worn to workspaces and to the office likewise.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FashionCategorySection;