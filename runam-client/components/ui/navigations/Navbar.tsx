import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between px-[5%] py-5 bg-bg_yellow w-full">
      <div className="">
        <ul className="flex gap-10">
          <li>Product</li>
          <li>About</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className="">
        <span>r</span>
        <span>u</span>
        <span>n</span>
        <span>a</span>
        <span>m</span>
      </div>
      <div className="flex gap-3">
        <button className="bg-transparent px-4 py-1">Log In</button>
        <button className="bg-blue px-4 py-1 rounded-[5px] text-white">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Navbar;
