// import React from 'react';
import zerowaste from '../assets/zero-waste.png';

const CartProductSection = () => {
  return (
    <section className="w-full bg-white py-12 px-6 sm:px-12 md:px-16 mt-20 lg:px-20 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-semibold font-raleway text-[#001616] mb-1">
            Your Cart.
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-montserrat font-normal">
            Review and manage the items in your shopping cart.
          </p>
        </div>

        {/* Product Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Main Image & Thumbnails */}
          <div className="lg:col-span-6 space-y-6">
            {/* Main Image Container */}
            <div className="w-fit h-fit max-h-[560px] bg-[#f2f2f2] rounded-lg overflow-hidden flex items-center justify-center ">
              <img
                src={zerowaste}
                alt="Cream colored totebag"
                className="w-fit h-fit object-cover"
              />
            </div>

            {/* Color Swatch Thumbnails */}
            <div className="flex items-center justify-center gap-4">
              {/* White Option */}
              <div className="flex flex-col items-center gap-1.5 cursor-pointer">
                <div className="w-24 h-24 rounded-md p-1 border-2 border-transparent hover:border-black transition-colors flex items-center justify-center">
                  <img
                    src={zerowaste}
                    alt="White totebag"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs font-normal font-raleway uppercase tracking-wider text-black">WHITE</span>
              </div>

              {/* Black Option */}
              <div className="flex flex-col items-center gap-1.5 cursor-pointer">
                <div className="w-24 h-24 rounded-md p-1 border-2 border-transparent hover:border-black transition-colors flex items-center justify-center">
                  <img
                    src={zerowaste}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-normal font-raleway uppercase tracking-wider text-black">BLACK</span>
              </div>

              {/* Grey Option */}
              <div className="flex flex-col items-center gap-1.5 cursor-pointer">
                <div className="w-24 h-24 rounded-md p-1 border-2 border-transparent hover:border-black transition-colors flex items-center justify-center">
                  <img
                    src={zerowaste}
                    alt="Grey totebag"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs font-normal uppercase font-raleway text-black">GREY</span>
              </div>
            </div>

            {/* Closure Type Selection Pills */}
            <div className="place-items-center md:-mt-2">
              <div className="inline-flex items-center font-raleway  md:ml-[160px] gap-4 bg-[#f8f9fa] border border-gray-200 rounded-lg p-2.5 text-xs text-gray-700">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="radio" name="closure" className="accent-black" defaultChecked />
                  <span>Zip</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="radio" name="closure" className="accent-black" />
                  <span>Button</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="radio" name="closure" className="accent-black" />
                  <span>Zip or Button</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="radio" name="closure" className="accent-black" />
                  <span>None</span>
                </label>
              </div>
              <p className="text-[11px] text-gray-500 mt-2 font-raleway">
                Zip cost N1,000.00 extra while button cost N500.00
              </p>
            </div>
          </div>

          {/* Right Column: Product Meta, Price & Actions */}
          <div className="lg:col-span-6 space-y-6 mt-4 ">
            <p className="md:mb-[8px] font-raleway">Product</p>
            {/* Delivery Fee Badge */}
            <div className="inline-flex items-center gap-2 bg-[#e8f1f1] rounded-lg px-3 py-2 text-xs font-medium text-slate-800 font-montserrat">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
              </svg>
              <span>Delivery fee</span>
              <span className="bg-[#052e2b] text-white px-2 py-0.5 rounded text-[10px] font-semibold">1500</span>
            </div>

            {/* Product Title */}
            <h2 className="text-2xl font-raleway sm:text-3xl font-medium text-black tracking-tight">
              Cream colored totebag
            </h2>

            {/* Star Rating */}
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4].map((star) => (
                <div key={star} className="w-7 h-7 text-2xl bg-[#052e2b] rounded-[8px] flex items-center justify-center text-amber-400">
                  ★
                </div>
              ))}
              <div className="w-7 h-7 text-2xl bg-[#052e2b] rounded-[8px] flex items-center justify-center text-amber-400">
                ☆
              </div>
              <span className="text-sm font-medium text-black ml-2 border border-gray-200 px-2 py-0.5 rounded bg-gray-50">
                2.4
              </span>
            </div>

            {/* Price & Quantity Selector Row */}
            <div className="flex items-center gap-6 pt-2">
              <div className="text-base text-gray-700 font-semibold font-raleway">
                Price: <span className="font-bold text-lg text-black ml-4 font-montserrat">₦ 4,000</span>
              </div>
              <div className="h-[30px] w-[3px] bg-[#D4D4D4] rounded-[16px]" />
              <div className="flex items-center gap-2 text-sm text-gray-700 font-semibold font-raleway">
                <span>Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded px-2 py-0.5 gap-3 text-2xl">
                  <button type="button" className="text-gray-500 hover:text-black font-bold">+</button>
                  <span className="font-semibold border-[#d1cecc] text-gray-600 font-raleway text-[16px] border w-4.5 h-5 flex items-center justify-center rounded-[6px] ">1</span>
                  <button type="button" className="text-gray-500 hover:text-black font-bold text-2xl">-</button>
                </div>
              </div>
            </div>

            {/* Short Excerpt Description */}
            <p className="text-xs sm:text-[15px] font-raleway  text-gray-500 font-normal">
              The Cream-Colored Totebag is a blend of elegance and functionality. Crafted from luxurious fabric, its spacious interior accommodates daily essentials. Lig..
            </p>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              {/* Buy Now */}
              <button 
                type="button" 
                className="w-fit min-w-[480px] py-3.5 px-6 border border-black rounded-lg font-semibold font-raleway text-black hover:bg-gray-50 transition-colors text-sm sm:text-base"
              >
                Buy Now
              </button>

              {/* Add to chart */}
              <button 
                type="button" 
                className="w-fit min-w-[480px] py-3.5 px-6 bg-[#031d1b] text-white rounded-lg font-semibold font-raleway hover:bg-[#021413] transition-colors text-sm sm:text-base"
              >
                Add to chart
              </button>
            </div>

            {/* Location Selector Dropdown */}
            <div className="md:-mt-[10px]">
              <div className="w-full border-1 border-[rgb(0,128,127)] bg-[#E0E7E7] rounded-lg p-3.5 flex items-center justify-between text-[#005A59] font-medium cursor-pointer hover:bg-teal-50/20 transition-colors">
                <span className="text-sm sm:text-[16px] font-raleway font-normal">Select your location</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down preview-icon"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>

          </div>

        </div>

        {/* Full Product Description Section */}
        <div className="mt-16 pt-8 space-y-3">
          <h3 className="text-2xl font-raleway font-semibold text-black tracking-tight">
            Description
          </h3>
          <p className="text-sm sm:text-[17px] text-[#4E5050] font-normal leading-[156%] font-raleway max-w-7xl">
            The Cream-Colored Totebag is a blend of elegance and functionality. Crafted from luxurious fabric, its spacious interior accommodates daily essentials. Lightweight and stylish, it's perfect for any occasion, offering comfort and sophistication. The tote features sturdy, reinforced handles for added durability, ensuring it can carry heavier items without compromising on style. Inside, multiple pockets provide organized storage, making it easy to find your keys, phone, or wallet. The classic cream color pairs effortlessly with any outfit, making it a versatile accessory for both casual and formal settings. Whether you're heading to work, running errands, or enjoying a night out, this tote bag elevates your look while providing practical storage solutions.          </p>
        </div>

      </div>
    </section>
  );
};

export default CartProductSection;