// import React from 'react'
import { Link } from "react-router-dom";
function Nav() {
  return (
    <>
      <nav aria-label="Main navigation">
        <div className="mx-auto flex h-20 max-w-[1390px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8 lg:w-1/3">
            <input
              type="checkbox"
              id="lux-nav-toggle"
              className="peer hidden"
            />
            <label
              htmlFor="lux-nav-toggle"
              className="inline-flex cursor-pointer items-center justify-center rounded-md p-2 text-stone-700 transition-colors duration-200 hover:bg-stone-100 focus-within:ring-2 focus-within:ring-stone-900 lg:hidden"
              aria-label="Toggle menu"
            >
              <svg
                className="h-5 w-5 peer-checked:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
            </label>
            <ul className="hidden items-center gap-7 lg:flex">
              <li>
                <Link
                  to="/"
                  className="block pb-1 text-[15px] font-normal uppercase text-[#001414] font-raleway"
                >
                  Home
                </Link>
              </li>
              <li className="group relative">
                <Link
                  to="/shopping"
                  className="relative after:absolute after:bottom-0 after:left-1/5 after:h-[3px] after:w-3 after:-translate-x-1/2 after:bg-[#003737] after:rounded-2xl pb-1 text-[15px] font-normal uppercase text-[#001414] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 font-raleway"
                >
                  Shop
                </Link>
              </li>
            </ul>
          </div>
          <a
            href="#"
            className="relative lg:w-1/3 lg:text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 rounded-md"
          >
            <span className="text-[30px] font-light font-montserrat tracking-wide text-[#001515] ">
              thetotebagshop
            </span>
            <span className="absolute inline-flex items-center justify-center rounded-full border border-[#001515] w-4 h-4 text-[10px] font-medium text-[#001515]">
              R
            </span>
          </a>
          <div className="flex items-center justify-end gap-1 lg:w-1/3">
            <button
              type="button"
              className="rounded-md p-2.5 text-stone-700 transition-colors duration-200 hover:bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900"
              aria-label="Account"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </button>
            <Link
              to="/cart"
              aria-label="View cart"
              className="relative rounded-md p-2.5 text-stone-700 hover:bg-stone-100"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 1.99-4.706 2.57-7.234.108-.471-.272-.916-.755-.916H5.106M7.5 14.25L5.106 5.084M9.75 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm9 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-stone-900 text-[10px] font-medium text-white">
                2
              </span>
            </Link>
          </div>
        </div>
        <label
          htmlFor="lux-nav-toggle"
          className="fixed inset-0 z-30 hidden bg-stone-900/40 backdrop-blur-sm peer-checked:block lg:hidden"
        />
        <div className="pointer-events-none fixed inset-y-0 left-0 z-40 w-full max-w-xs -translate-x-full transform bg-white shadow-2xl transition-transform duration-300 ease-out peer-checked:pointer-events-auto peer-checked:translate-x-0 lg:hidden">
          <div className="flex h-20 items-center justify-between border-b border-stone-200 px-5">
            <span className="font-serif text-lg font-medium tracking-[0.08em] text-stone-900">
              thetotebagshop
            </span>
            <label
              htmlFor="lux-nav-toggle"
              className="cursor-pointer rounded-md p-2 text-stone-600 transition-colors duration-200 hover:bg-stone-100"
              aria-label="Close menu"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
          </div>

          <nav className="flex flex-col p-4" aria-label="Mobile navigation">
            <a
              href="#"
              aria-current="page"
              className="border-b border-stone-100 py-4 text-sm font-medium uppercase tracking-[0.1em] text-stone-900"
            >
              New In
            </a>
            <a
              href="#"
              className="border-b border-stone-100 py-4 text-sm font-medium uppercase tracking-[0.1em] text-stone-600 transition-colors duration-200 hover:text-stone-900"
            >
              Women
            </a>
            <a
              href="#"
              className="border-b border-stone-100 py-4 text-sm font-medium uppercase tracking-[0.1em] text-stone-600 transition-colors duration-200 hover:text-stone-900"
            >
              Men
            </a>
            <a
              href="#"
              className="border-b border-stone-100 py-4 text-sm font-medium uppercase tracking-[0.1em] text-stone-600 transition-colors duration-200 hover:text-stone-900"
            >
              Jewelry
            </a>
            <a
              href="#"
              className="py-4 text-sm font-medium uppercase tracking-[0.1em] text-stone-600 transition-colors duration-200 hover:text-stone-900"
            >
              Sale
            </a>
          </nav>
          <div className="mt-auto flex items-center justify-around border-t border-stone-200 p-4">
            <button
              type="button"
              className="flex flex-col items-center gap-1 rounded-md p-2 text-stone-600 transition-colors duration-200 hover:text-stone-900"
              aria-label="Wishlist"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              <span className="text-xs">Wishlist</span>
            </button>
            <button
              type="button"
              className="flex flex-col items-center gap-1 rounded-md p-2 text-stone-600 transition-colors duration-200 hover:text-stone-900"
              aria-label="Account"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <span className="text-xs">Account</span>
            </button>
            <button
              type="button"
              className="flex flex-col items-center gap-1 rounded-md p-2 text-stone-600 transition-colors duration-200 hover:text-stone-900"
              aria-label="Cart"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 1.99-4.706 2.57-7.234.108-.471-.272-.916-.755-.916H5.106M7.5 14.25L5.106 5.084M9.75 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm9 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <span className="text-xs">Cart</span>
            </button>
          </div>
        </div>
      </nav>

      <form
        className="mx-auto mt-5 w-full md:max-w-[600px] max-h-[0px]"
        role="search"
      >
        <div className="flex h-[45px] items-stretch overflow-hidden rounded-[8px] border border-[#e5ebea] bg-[#FFFFFF] shadow-sm">
          <button
            type="submit"
            aria-label="Search"
            className="flex w-[40px] shrink-0 items-center justify-center bg-[#001616]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              className="h-[14px] w-[14px] fill-[#E0E7E7]"
              aria-hidden="true"
            >
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z" />
            </svg>
          </button>

          <label htmlFor="search" className="sr-only">
            Search products
          </label>

          <input
            type="search"
            id="search"
            name="search"
            placeholder="Search for your favourite totebag, colour, design patterns"
            className="min-w-0 flex-1 bg-transparent px-2 text-[14px] font-raleway font-normal text-[#001616] outline-none placeholder:text-[#939898]"
          />
        </div>
      </form>
    </>
  );
}

export default Nav;
