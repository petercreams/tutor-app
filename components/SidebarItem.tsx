'use client';

import { LucideIcon } from 'lucide-react';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

type Props = {
  icon: LucideIcon;
  label: string;
  href: string;
};

export default function SidebarItem({ icon: Icon, label, href }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === '/' && href === '/') ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => router.push(href);

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        'flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20',
        {
          'text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700':
            isActive,
        }
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn('text-slate-500', { 'text-sky-700': isActive })}
        />
        {label}
      </div>
      <div
        className={cn(
          'ml-auto opacity-0 border-2 border-sky-700 h-full transition-all',
          { 'opacity-100': isActive }
        )}
      />
    </button>
  );
}
