import Image from 'next/image';
import React from 'react';

interface Props {
  children: React.ReactNode;
  pathname: string;
  src: string;
  alt: string;
}

export default function SideBarItem({ children, pathname, src, alt }: Props) {
  return (
    <li>
      <a href={pathname} className="flex items-center h-9 mx-1 gap-3.5">
        <Image src={src} alt={alt} width={18} height={18} />
        <span className="font-medium text-zinc-50"> {children}</span>
      </a>
    </li>
  );
}
