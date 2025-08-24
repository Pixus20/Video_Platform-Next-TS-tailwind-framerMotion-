"use client";
import Header from "@/components/LayoutPage/Header";
import LeftSidebar from "@/components/MainPage/LeftSidebar";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toggleMenu, setToggleMenu] = useState(true);

  return (
    <>
      <Header />
      <main className="bg-black text-white min-h-screen flex">
        <LeftSidebar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        <div
          className={`transition-all duration-300 mt-12 p-4 
          ${toggleMenu ? "ml-[55px] md:ml-[5%] w-[85%] sm:w-[100%] xl:ml-[10%]" : "ml-[3%] w-[97%]"}`}
        >
          {children}
        </div>
      </main>
    </>
  );
}
