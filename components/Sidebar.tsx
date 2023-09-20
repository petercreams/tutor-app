import Link from 'next/link';
import Logo from './Logo';
import SidebarRoutes from './SidebarRoutes';

const Sidebar = () => {
  return (
    <div className="h-full bg-gray-50 border-r flex flex-col overflow-y-auto shadow-sm">
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
