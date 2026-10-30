// import React from 'react';

const CheckoutModal = ({ onClose }) => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 font-sans">
        {/* Modal Container */}
        <div className="bg-[#f4f7f7] w-full max-w-lg rounded- p-8 shadow-2xl relative border border-gray-100 text-slate-900">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close checkout"
            className="absolute right-4 top-4 text-xl text-gray-500 hover:text-black"
          >
            &times;
          </button>
          {/* Header Section */}
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-[28px] font-semibold font-raleway text-[#111111] mb-1">
              Payment Method.
            </h2>
            <p className="text-[#2F3131] text-xs sm:text-sm font-normal font-raleway">
              Effortlessly manage your purchases and checkout with ease.
            </p>
          </div>

          {/* Payment Provider Icons Row */}
          <div className="flex items-center justify-center gap-6 mb-8 text-gray-700">
            {/* Visa */}
            <span className="font-extrabold italic tracking-tighter text-black text-lg">
              VISA
            </span>
            {/* Stripe */}
            <span className="font-bold tracking-tight text-black text-base">
              stripe
            </span>
            {/* Mastercard */}
            <div className="flex items-center justify-center -space-x-2 bg-black w-9 h-6">
              <div className="w-4 h-4 rounded-full bg-red-600 opacity-90" />
              <div className="w-4 h-4 rounded-full bg-amber-500 opacity-90" />
            </div>
            {/* PayPal */}
            <span className="font-bold italic text-blue-800 text-base">
              PayPal
            </span>
            {/* Apple Pay */}
            <span className="font-semibold text-black text-base flex items-center gap-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000000" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-apple preview-icon"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"/><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"/></svg>
            </span>
          </div>

          {/* Form Fields */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            {/* Card Number Input */}
            <div className="space-y-1.5">
              <label className="block text-[15px] font-normal text-[#111111] font-raleway ">
                Card Number
              </label>
              <div className="relative flex items-center bg-white border border-gray-300 rounded-lg px-4 py-3.5 shadow-sm">
                <input
                  type="text"
                  defaultValue="5355 0348 5945 5045"
                  className="w-full bg-transparent text-[15px] text-[#949999] font-raleway font-normal outline-none font-mono"
                />
                {/* Mastercard overlapping circles indicator inside input */}
                <div className="flex -space-x-1.5 ml-2 shrink-0">
                  <div className="w-4 h-4 rounded-full bg-red-600" />
                  <div className="w-4 h-4 rounded-full bg-amber-500" />
                </div>
              </div>
            </div>

            {/* CVV & Expires Row */}
            <div className="grid grid-cols-2 gap-4">
              {/* CVV */}
              <div className="space-y-1.5">
                <label className="block text-[15px] font-normal font-raleway text-[#35353B]">
                  CVV
                </label>
                <input
                  type="text"
                  defaultValue="0522"
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3.5 text-[15px] font-raleway font-normal text-[#949999] outline-none shadow-sm font-mono"
                />
              </div>

              {/* Expires */}
              <div className="space-y-1.5">
                <label className="block text-[15px] font-normal font-raleway text-[#35353B] ">
                  Expires
                </label>
                <input
                  type="text"
                  defaultValue="07/06/2024"
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3.5 text-[15px] font-raleway font-normal text-[#949999] outline-none shadow-sm font-mono"
                />
              </div>
            </div>

            {/* Save Card Checkbox */}
            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="save-card"
                defaultChecked
                className="w-4 h-4 rounded border-gray-300 text-black accent-black cursor-pointer"
              />
              <label
                htmlFor="save-card"
                className="text-xs sm:text-[15px] text-[#666666] font-raleway cursor-pointer select-none"
              >
                save my debit card information
              </label>
            </div>

            {/* Checkout Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 bg-[#031d1b] hover:bg-[#021413] text-white font-raleway rounded-xl font-semibold text-base transition-colors shadow-sm flex items-center justify-center cursor-pointer"
              >
                Checkout
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckoutModal;
