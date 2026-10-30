// import React from 'react';
import monaclebag from '../assets/monoclebag.jpg';
import colorful from '../assets/colorful.jpeg';
import whitetote from '../assets/white-tote.jpeg';
import happybag from '../assets/happybag.jpg';
import peachbasket from '../assets/peachbasket.jpeg';
import minimalist from '../assets/minimalist.jpeg';
import zerowaste from '../assets/zero-waste.png';
import angel from '../assets/angel.jpeg';
import jeans from '../assets/jeans.jpeg';

const AvailableStockSection = () => {
  const products = [
    {
      id: 1,
      name: 'Chinos',
      price: 'N5,000',
      image: monaclebag
    },
    {
      id: 2,
      name: 'Chinos',
      price: 'N5,000',
      image: colorful
    },
    {
      id: 3,
      name: 'Chinos',
      price: 'N5,000',
      image: whitetote
    },
    {
      id: 4,
      name: 'Chinos',
      price: 'N5,000',
      image: happybag
    },
    {
      id: 5,
      name: 'Chinos',
      price: 'N5,000',
      image: peachbasket
    },
    {
      id: 6,
      name: 'Chinos',
      price: 'N5,000',
      image: minimalist
    },
    {
      id: 7,
      name: 'Chinos',
      price: 'N5,000',
      image: zerowaste
    },
    {
      id: 8,
      name: 'Chinos',
      price: 'N5,000',
      image: angel
    },
    {
      id: 8,
      name: 'Chinos',
      price: 'N5,000',
      image: monaclebag
    },
    {
      id: 8,
      name: 'Chinos',
      price: 'N5,000',
      image: whitetote
    },
    {
      id: 8,
      name: 'Chinos',
      price: 'N5,000',
      image: jeans
    },
    {
      id: 8,
      name: 'Chinos',
      price: 'N5,000',
      image: happybag
    }
  ];

  return (
    <>
    <section className="w-full bg-white py-12 px-6 sm:px-12 md:px-16 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-[34px] font-montserrat font-semibold text-[#000000]  mb-2">
            Available Stock
          </h2>
          <p className="text-[#111212] font-raleway text-base sm:text-[19px] font-normal">
            These totebags are currently available for sales
          </p>
        </div>

        {/* 4-Column Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col group cursor-pointer">
              {/* Product Image Box */}
              <div className="w-full aspect-square bg-[#f4f4f4] overflow-hidden mb-4 ">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title & Price Row */}
              <div className="flex items-center justify-between px-0.5 pt-[20px]">
                <span className="text-base font-semibold text-[#001515] font-raleway">
                  {product.name}
                </span>
                <span className="text-base font-semibold text-[#000000] font-montserrat">
                  {product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default AvailableStockSection;