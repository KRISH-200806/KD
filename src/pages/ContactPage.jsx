import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Navbar from "../components/Header";
import Footer from "../components/Footer";

function ContactPage() {
  return (
    <div className="bg-[#f8f1ee] min-h-screen ">
      <Navbar/>
      <div className="mt-10 px-4">
        <div className="mx-auto flex max-w-7xl items-center">
          <Link
            to="/"
            className="xs:p-2 sm:p-0 sm:w-7 sm:h-7 flex items-center justify-center rounded-full cursor-pointer transition-all duration-200 hover:scale-110 hover:bg-[#c05e36]/20"
          >
            <BsArrowLeft className="w-5 h-5 text-[#c05e36]" />
          </Link>
          <h1 className="xs:text-xl sm:text-2xl font-bold text-[#c05e36] text-center m-auto">
            Contact Page
          </h1>
        </div>
        <form action="#" method="POST" className="mx-auto max-w-xl pt-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="first-name"
                  placeholder="First Name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md px-4 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#c05e36]"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  id="last-name"
                  name="last-name"
                  placeholder="Last Name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md  px-4 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#c05e36]"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="abc@gmail.com"
                  autoComplete="email"
                  className="block w-full rounded-md px-4 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#c05e36]"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Phone number
              </label>
              <div className="mt-2.5">
                <div className="flex rounded-md bg-white outline- focus:outline-[#c05e36]">
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="tel"
                    placeholder="123-456-7890"
                    className="block w-full rounded-md px-4 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#c05e36]"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows={4}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#c05e36]"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="mt-10 pb-12">
            <button
              type="submit"
              className="block w-full rounded-md bg-[#c05e36] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-[#c05e36] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c05e36]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default ContactPage;
