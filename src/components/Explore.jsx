// import React from 'react';
import monaclebag from '../assets/monoclebag.jpg';
import whitetote from '../assets/white-tote.jpeg';
import happybag from '../assets/happybag.jpg';
import peachbasket from '../assets/peachbasket.jpeg';
import minimalist from '../assets/minimalist.jpeg';
import zerowaste from '../assets/zero-waste.png';
import angel from '../assets/angel.jpeg';
import planetote from '../assets/plane-tote.png';

const Explore = () => {
  const products = [
    {
      id: 5,
      name: 'Chinos',
      price: 'N5,000',
      image: monaclebag
    },
    {
      id: 6,
      name: 'Chinos',
      price: 'N5,000',
      image: whitetote
    },
    {
      id: 7,
      name: 'Chinos',
      price: 'N5,000',
      image: planetote
    },
    {
      id: 8,
      name: 'Chinos',
      price: 'N5,000',
      image: happybag
    },
    {
      id: 8,
      name: 'Chinos',
      price: 'N5,000',
      image: peachbasket
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
      image: minimalist
    },
    {
      id: 8,
      name: 'Chinos',
      price: 'N5,000',
      image: zerowaste
    }
  ];

  return (
    <>
    <section className="w-full bg-white py-12 px-6 sm:px-12 md:px-16 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
       
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

export default Explore;