import Image from 'next/image';
import Link from 'next/link';
import { MenuItem } from '../Header';

export default function Navbar({ menuItems }: { menuItems: MenuItem[] }) {
  return (
    <>
      <header className='mx-auto hidden items-center justify-between bg-cozey-Sky-Bold py-2 text-xs font-semibold text-cozey-Fog-Soft lg:flex lg:px-20'>
        <div className='flex flex-row gap-3'>
          <p>Designed in North America</p>
          <p>|</p>
          <p>Fast & Free Shipping</p>
        </div>
        <div className='flex flex-row items-center gap-8'>
          <Link href='#reviews' className='hover:text-gray-900'>
            Reviews
          </Link>
          <Link href='#free-swatches' className='hover:text-gray-900'>
            Free Swatches
          </Link>
          <Link href='#financing' className='hover:text-gray-900'>
            Financing
          </Link>
          <Link href='#support' className='hover:text-gray-900'>
            Support
          </Link>
          <Link href='#contact-us' className='hover:text-gray-900'>
            Contact Us
          </Link>
          <Link href='#our-locations' className='hover:text-gray-900'>
            Our Locations
          </Link>

          <div className='flex flex-row items-center gap-1.5'>
            <span>EN</span>
            <span className='flex flex-row gap-0.5'>
              <Image
                src='/usa.svg'
                className='rounded-full'
                alt='usa'
                width={16}
                height={16}
              />
              <Image
                src='/chevron-down.svg'
                className='rounded-full'
                alt='Select Menu'
                width={12}
                height={12}
              />
            </span>
          </div>
        </div>
      </header>
      <nav className='mx-auto hidden flex-row items-center justify-between bg-white px-4 py-3 text-cozey-Midnight-Balanced lg:flex lg:px-20'>
        <Link href='/'>
          <Image
            src='/cozey.svg'
            className='fill-cozey-Midnight-Bold'
            alt='Cozey'
            width={117}
            height={36}
          />
        </Link>
        <div className='flex flex-row gap-8 text-base font-normal text-cozey-Midnight-Balanced'>
          {menuItems.map((item: MenuItem) => (
            <Link
              key={item.name}
              href={item.href}
              className='py-2 hover:text-gray-900'
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div>
          <Link href='#cart' className='hover:text-gray-900'>
            <Image src='/cart.svg' alt='Cart' width={24} height={24} />
          </Link>
        </div>
      </nav>
    </>
  );
}
