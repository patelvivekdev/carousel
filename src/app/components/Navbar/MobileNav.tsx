'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MenuItem } from '../Header';

export default function MobileNav({ menuItems }: { menuItems: MenuItem[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className='mx-auto flex items-center justify-between bg-cozey-Sky-Bold px-4 py-2 text-xss font-semibold text-cozey-Fog-Soft lg:hidden'>
        <div className='flex flex-row gap-3'>
          <p>Designed in North America</p>
          <p>|</p>
          <p>Fast & Free Shipping</p>
        </div>
        <div className='flex flex-row items-center gap-1.5 text-xss'>
          <span>EN</span>
          <span className='flex flex-row gap-0.5'>
            <Image
              src='/can.svg'
              className='rounded-full'
              alt='Canada'
              width={16}
              height={16}
            />
            <Image
              src='/chevron-down.svg'
              className='rounded-full'
              alt='Select'
              width={12}
              height={12}
            />
          </span>
        </div>
      </div>
      <nav className='mx-auto flex flex-row items-center justify-between bg-white px-4 py-3 sm:px-6 lg:hidden lg:px-20'>
        <Link href='/'>
          <Image
            src='/cozey.svg'
            className='fill-cozey-Midnight-Bold'
            alt='Cozey'
            width={117}
            height={36}
          />
        </Link>
        <div className='flex flex-row items-center justify-between gap-3 text-base font-normal text-cozey-Midnight-Balanced'>
          <div className='flex flex-row items-center justify-between gap-3'>
            <Link href='#search' className='hover:text-gray-900'>
              <Image src='/search.svg' alt='Search' width={20} height={20} />
            </Link>
            <Link href='#user' className='hover:text-gray-900'>
              <Image src='/user.svg' alt='User' width={20} height={20} />
            </Link>
            <Link href='#cart' className='hover:text-gray-900'>
              <Image src='/cart.svg' alt='Cart' width={20} height={20} />
            </Link>
          </div>
          <span> | </span>
          <button onClick={toggleMenu} className='hover:text-gray-900'>
            {isMenuOpen ? (
              <Image
                src='/menu.svg'
                className='rotate-90 transform'
                alt='Menu close'
                width={20}
                height={20}
              />
            ) : (
              <Image src='/menu.svg' alt='Menu Open' width={20} height={20} />
            )}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className='bg-white text-cozey-Midnight-Balanced lg:hidden'>
          <div className='flex flex-col px-4 py-2'>
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='py-2 hover:text-gray-900'
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className='flex flex-col border-t border-gray-200 px-4 py-2'>
            <Link href='#reviews' className='py-2 hover:text-gray-900'>
              Reviews
            </Link>
            <Link href='#free-swatches' className='py-2 hover:text-gray-900'>
              Free Swatches
            </Link>
            <Link href='#financing' className='py-2 hover:text-gray-900'>
              Financing
            </Link>
            <Link href='#support' className='py-2 hover:text-gray-900'>
              Support
            </Link>
            <Link href='#contact-us' className='py-2 hover:text-gray-900'>
              Contact Us
            </Link>
            <Link href='#our-locations' className='py-2 hover:text-gray-900'>
              Our Locations
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
