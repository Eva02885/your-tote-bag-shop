// import React from 'react'

import CartProductSection from "../components/CartProductSection"
import Explore from "../components/Explore"
import Footer from "../components/Footer"
import Nav from "../components/Nav"

function Cart() {
  return (
    <>
    <Nav />
    <CartProductSection />
    {/* Header Section */}
        <div className=" px-30">
          <h2 className="text-3xl sm:text-[34px] font-montserrat font-semibold text-[#000000]  mb-2">
            Totebags you may like
          </h2>
          <p className="text-[#111212] font-raleway text-base sm:text-[19px] font-normal">
            Similar totebags like the one selected.
          </p>
        </div>

        <Explore />
        <Footer />
    </>
  )
}

export default Cart