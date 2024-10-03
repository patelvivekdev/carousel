import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="bg-cozey-Sky-Bold hidden lg:flex mx-auto px-4 sm:px-6 lg:px-20 items-center justify-between text-cozey-Fog-Soft text-xs font-semibold py-2">
        <div className="flex flex-row gap-3">
          <p>Designed in North America</p>
          <p>|</p>
          <p>Fast & Free Shipping</p>
        </div>
        <div className="flex flex-row items-center gap-8">
          <a href="#reviews" className="hover:text-gray-900">
            Reviews
          </a>
          <a href="#free-swatches" className="hover:text-gray-900">
            Free Swatches
          </a>
          <a href="#financing" className="hover:text-gray-900">
            Financing
          </a>
          <a href="#support" className="hover:text-gray-900">
            Support
          </a>
          <a href="#contact-us" className="hover:text-gray-900">
            Contact Us
          </a>
          <a href="#our-locations" className="hover:text-gray-900">
            Our Locations
          </a>

          <div className="flex flex-row gap-1.5">
            <span>EN</span>
            <span className="flex flex-row gap-0.5">
              <Image
                src="/USA.svg"
                className="rounded-full"
                alt="usa"
                width={16}
                height={16}
              />
              <Image
                src="/Chevron-down.svg"
                className="rounded-full"
                alt="canada"
                width={12}
                height={12}
              />
            </span>
          </div>
        </div>
      </header>
      <nav className="bg-white hidden lg:flex text-cozey-Midnight-Balanced py-3 mx-auto px-4 sm:px-6 lg:px-20 flex-row justify-between items-center">
        <Link href="/">
          <Image
            src="/cozey.svg"
            className="fill-cozey-Midnight-Bold"
            alt="Cozey"
            width={117}
            height={36}
          />
        </Link>
        <div className="flex flex-row text-cozey-Midnight-Balanced text-base font-normal gap-8">
          <a href="#shop" className="hover:text-gray-900">
            Seating
          </a>
          <a href="#shop" className="hover:text-gray-900">
            Tables
          </a>
          <a href="#shop" className="hover:text-gray-900">
            Storage
          </a>
          <a href="#shop" className="hover:text-gray-900">
            Accessories
          </a>
          <a href="#shop" className="hover:text-gray-900">
            Washable Rugs
          </a>
          <a href="#shop" className="hover:text-gray-900">
            Outdoor
          </a>
        </div>
        <div>
          <a href="#cart" className="hover:text-gray-900">
            <Image src="/cart.svg" alt="Cart" width={24} height={24} />
          </a>
        </div>
      </nav>
    </>
  );
}
