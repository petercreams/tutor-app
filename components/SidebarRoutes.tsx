'use client';

import React from 'react';
import { Layout, Compass } from 'lucide-react';
import SidebarItem from './SidebarItem';

const guestRoutes = [
  { icon: Layout, label: 'Dashboard', href: '/' },
  { icon: Compass, label: 'Browse', href: '/search' },
];

export default function SidebarRoutes() {
  return (
    <div className="flex flex-col w-full">
      {guestRoutes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
}
