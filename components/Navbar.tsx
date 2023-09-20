import React from 'react';
import MobileSidebar from './MobileSidebar';
import NavbarRoutes from './NavbarRoutes';

export default function Navbar() {
  return (
    <div className="p-4 border-bottom h-full flex items-center bg-white shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
}
