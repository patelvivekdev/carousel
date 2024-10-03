"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const menuItems = [
    { name: "Seating", href: "#seating" },
    { name: "Tables", href: "#tables" },
    { name: "Storage", href: "#storage" },
    { name: "Accessories", href: "#accessories" },
    { name: "Washable Rugs", href: "#washable-rugs" },
    { name: "Outdoor", href: "#outdoor" },
  ];
  return (
    <>
      <div className="bg-cozey-Sky-Bold lg:hidden mx-auto px-4 py-2 flex items-center justify-between text-cozey-Fog-Soft text-xss font-semibold">
        <div className="flex flex-row gap-3">
          <p>Designed in North America</p>
          <p>|</p>
          <p>Fast & Free Shipping</p>
        </div>
        <div className="flex flex-row text-xss gap-1.5">
          <span>EN</span>
          <span className="flex flex-row gap-0.5">
            <Image
              src="/can.svg"
              className="rounded-full"
              alt="Canada"
              width={16}
              height={16}
            />
            <Image
              src="/Chevron-down.svg"
              className="rounded-full"
              alt="Select"
              width={12}
              height={12}
            />
          </span>
        </div>
      </div>
      <nav className="bg-white lg:hidden flex py-3 mx-auto px-4 sm:px-6 lg:px-20 flex-row justify-between items-center">
        <Link href="/">
          <Image
            src="/cozey.svg"
            className="fill-cozey-Midnight-Bold"
            alt="Cozey"
            width={117}
            height={36}
          />
        </Link>
        <div className="flex flex-row justify-between items-center text-cozey-Midnight-Balanced text-base font-normal gap-3">
          <div className="flex flex-row justify-between items-center gap-3">
            <a href="#search" className="hover:text-gray-900">
              <Image src="/search.svg" alt="Search" width={20} height={20} />
            </a>
            <a href="#user" className="hover:text-gray-900">
              <Image src="/user.svg" alt="User" width={20} height={20} />
            </a>
            <a href="#cart" className="hover:text-gray-900">
              <Image src="/cart.svg" alt="Cart" width={20} height={20} />
            </a>
          </div>
          <span> | </span>
          <button onClick={toggleMenu} className="hover:text-gray-900">
            {isMenuOpen ? (
              <Image
                src="/menu.svg"
                className="transform rotate-90"
                alt="Menu"
                width={20}
                height={20}
              />
            ) : (
              <Image src="/menu.svg" alt="Menu" width={20} height={20} />
            )}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="lg:hidden bg-white text-cozey-Midnight-Balanced">
          <div className="flex flex-col px-4 py-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="py-2 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col px-4 py-2 border-t border-gray-200">
            <Link href="#reviews" className="py-2 hover:text-gray-900">
              Reviews
            </Link>
            <Link href="#free-swatches" className="py-2 hover:text-gray-900">
              Free Swatches
            </Link>
            <Link href="#financing" className="py-2 hover:text-gray-900">
              Financing
            </Link>
            <Link href="#support" className="py-2 hover:text-gray-900">
              Support
            </Link>
            <Link href="#contact-us" className="py-2 hover:text-gray-900">
              Contact Us
            </Link>
            <Link href="#our-locations" className="py-2 hover:text-gray-900">
              Our Locations
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
