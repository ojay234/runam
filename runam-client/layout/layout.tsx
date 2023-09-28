import React from "react";
import { Inter } from "next/font/google";
import Navbar from "@/components/ui/navigations/Navbar";
import Footer from "@/components/ui/navigations/Footer";
const inter = Inter({ subsets: ["latin"] });
type LayoutProp = {
  children: any;
};

function layout({ children }: LayoutProp) {
  return (
    <div className="max-w-[1560px] w-full">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default layout;
