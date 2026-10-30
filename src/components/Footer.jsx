// import React from 'react';

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#0d0d0d] text-white py-20 px-6 sm:px-12 md:px-16 lg:px-20 font-sans overflow-hidden">
      {/* Background Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-20">
          
          {/* Column 1: Brand Info & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <p className="text-gray-300 text-md sm:text-base font-raleway max-w-[328.97px] font-light">
              We provide comfy tote bags that won't mess up your style and have plenty of space for all your stuff.
            </p>

            {/* Brand Logo */}
            <div className="flex items-baseline gap-1">
              <span className="text-3xl sm:text-4xl md:text-[42px] font-light tracking-wide font-raleway text-gray-300">
                thetotebagshop
              </span>
              <span className="text-xs border border-white/80 rounded-full w-4 h-4 flex items-center justify-center font-normal text-white/90 translate-y-[-12px]">
                R
              </span>
            </div>

            {/* Social Icons (TikTok & Instagram) */}
            <div className="flex items-center gap-5 pt-2">
              {/* TikTok */}
              <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="TikTok">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 1 1-2.096-2.8v-3.522a6.38 6.38 0 1 0 5.541 6.322V9.006a8.18 8.18 0 0 0 4.77 1.522V7.085a4.79 4.79 0 0 1-1.000-.399z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="Instagram">
                <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="text-xl font-semibold text-gray-200 font-raleway">
              Quick links
            </h3>
            <ul className="space-y-3.5 text-sm sm:text-base text-gray-300 font-light">
              <li>
                <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Refund policy</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect with Us & Newsletter */}
          <div className="lg:col-span-4 space-y-6 font-raleway">
            <h3 className="text-xl font-semibold text-gray-200 ">
              Connect with Us
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light max-w-sm">
              Subscribe to our Newsletter to be the first to be aware of recent production and other production offers.
            </p>

            {/* Newsletter Input Card */}
            <div className="bg-[#242629] p-2 pl-5 rounded-2xl flex items-center justify-between max-w-md">
              <input
                type="email"
                placeholder="Enter email address"
                className="bg-transparent text-sm text-gray-200 placeholder-gray-400 outline-none w-full pr-3 font-light"
              />
              <button
                type="button"
                aria-label="Submit"
                className="bg-[#181a1d] hover:bg-black text-gray-300 p-3 rounded-xl transition-colors flex items-center justify-center shrink-0"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="flex justify-end pt-35">
          <p className="text-xs sm:text-sm text-gray-400 font-light">
            © thetotebagshop <span className="font-semibold text-white">2024.</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;