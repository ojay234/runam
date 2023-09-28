import Link from "next/link";
import React from "react";


function Hero() {
  return (
    <div className="bg-bg_yellow w-full px-[5%] flex flex-col gap-3">
      <div className="flex flex-col mt-14 w-full">
        <h1 className="text-center text-5xl"> Send and Recieve</h1>
        <h1 className="text-center text-5xl text-blue font-bold my-2">
          Product Seamlessly
        </h1>
        <p className="text-xl my-3 w-[35%] mx-auto">
          Runam helps you send and receive and track products easily by using
          links and whatsapp euhwjo9 js
        </p>
        <div className="w-auto flex gap-8 mx-auto my-3 ">
          <button className="bg-blue px-6 py-2 rounded-[5px] text-white">
            Get Started
          </button>
          <Link
            href="/delivery/senderform"
            className="bg-white px-6 py-2
           rounded-[5px] text-blue"
          >
            Quick Delivery
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
