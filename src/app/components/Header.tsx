import MobileNav from './Navbar/MobileNav';
import Navbar from './Navbar/Navbar';

export type MenuItem = {
  name: string;
  href: string;
};

export default function Header() {
  const menuItems: MenuItem[] = [
    { name: 'Seating', href: '#seating' },
    { name: 'Tables', href: '#tables' },
    { name: 'Storage', href: '#storage' },
    { name: 'Accessories', href: '#accessories' },
    { name: 'Washable Rugs', href: '#washable-rugs' },
    { name: 'Outdoor', href: '#outdoor' },
  ];

  return (
    <>
      <Navbar menuItems={menuItems} />
      <MobileNav menuItems={menuItems} />
    </>
  );
}
