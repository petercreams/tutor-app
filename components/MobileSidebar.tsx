import React from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent } from './ui/sheet';
import Sidebar from './Sidebar';

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-full">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
