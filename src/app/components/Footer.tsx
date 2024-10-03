"use client";

import Image from "next/image";
import { useState } from "react";

type FooterData = {
  [section: string]: {
    [subSection: string]: string;
  };
};

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  // Dynamic footer data
  const footerData: FooterData = {
    Shop: {
      Seating: "#",
      Modules: "#",
      Tables: "#",
      Storage: "#",
      Accessories: "#",
      Outdoor: "#",
      Refurbished: "#",
      "Gift Cards": "#",
    },
    Explore: {
      "Altus Collection": "#",
      "Ciello Collection": "#",
      "Atmosphere Collection": "#",
      "Neptune Collection": "#",
      "Mistral Collection": "#",
      "Free Swatches": "#",
      "Blog - Simone's Corner": "#",
      "Our Locations": "#",
    },
    Company: {
      "About Cozey": "#",
      "Our Story": "#",
      "Our Initiatives": "#",
      "Our Approach": "#",
      Careers: "#",
    },
    Support: {
      "Track My Order": "#",
      FAQ: "#",
      Shipping: "#",
      Returns: "#",
      Warranty: "#",
      Financing: "#",
      Reviews: "#",
      "Assembly Guides": "#",
      Consultations: "#",
    },
    "Follow Us": {
      Instagram: "#",
      Youtube: "#",
      Facebook: "#",
      "X (Twitter)": "#",
      Pinterest: "#",
      Tiktok: "#",
      LinkedIn: "#",
    },
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-cozey-Midnight-Bold mx-auto">
      {/* Desktop Footer */}
      <nav className="hidden lg:flex flex-row justify-between px-20 py-12">
        {Object.entries(footerData).map(([key, value]) => (
          <div key={key} className="flex flex-col justify-start gap-6">
            <h2 className="text-lg text-cozey-Sky-Balanced font-medium mb-2">
              {key}
            </h2>
            <div className="flex flex-col gap-3">
              {Object.entries(value).map(([subKey, subValue]) => (
                <a
                  key={subKey}
                  href={subValue}
                  className="hover:text-gray-400 text-xs font-normal"
                >
                  {subKey}
                </a>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Mobile Footer */}
      <nav className="lg:hidden">
        {Object.entries(footerData).map(([key, value]) => (
          <div key={key} className="border-b border-gray-700">
            <button
              className="w-full py-4 px-4 flex justify-between items-center text-left"
              onClick={() => toggleSection(key)}
            >
              <span className="text-lg font-medium text-cozey-Sky-Balanced">
                {key}
              </span>
              {openSection === key ? (
                <Image
                  src="/chevron-up.svg"
                  width={20}
                  height={20}
                  alt="Chevron Up"
                />
              ) : (
                <Image
                  src="/chevron-down.svg"
                  width={20}
                  height={20}
                  alt="Chevron Down"
                />
              )}
            </button>
            {openSection === key && (
              <div className="px-4 pb-4">
                {Object.entries(value).map(([subKey, subValue]) => (
                  <a
                    key={subKey}
                    href={subValue}
                    className="block py-2 text-sm hover:text-gray-200"
                  >
                    {subKey}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="mx-auto py-4 px-4 lg:px-20 flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-20 text-center lg:text-left">
        <p className="text-white text-sm">
          &copy; 2024 Cozey Inc. All rights reserved.
        </p>
        <div className="flex flex-row gap-20">
          <a href="#" className="text-white text-sm hover:text-gray-200">
            Privacy Policy
          </a>
          <a href="#" className="text-white text-sm hover:text-gray-200">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
}
