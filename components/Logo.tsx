import Image from 'next/image';
import { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'image'>;

const Logo = ({ className }: Props) => {
  return (
    <Image
      width={120}
      height={120}
      alt="logo"
      src="/logo.svg"
      className={className}
    />
  );
};

export default Logo;
