'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface UserNav {
  id: string;
  name: string;
  src: string;
}

interface MenuItem {
  items: UserNav[];
}

const UserPageNav = ({ items }: MenuItem) => {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative my-4">
      <div
        ref={containerRef}
        className={`flex gap-6 uppercase scrollbar-hide ${
          isMobile
            ? "overflow-x-auto scroll-smooth snap-x snap-mandatory"
            : "overflow-visible"
        }`}
      >
        {items.map((item) => {
          const isCurrent = pathname === item.src;
          return (
            <Link
              key={item.id}
              href={item.src}
              className={`transition-colors duration-200 pb-2 shrink-0 text-center ${
                isMobile ? "w-1/2 snap-start" : "w-auto"
              } ${
                isCurrent
                  ? "text-blue-600 font-bold border-b-2"
                  : "hover:text-blue-500"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default UserPageNav;
