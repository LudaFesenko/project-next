import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  children: React.ReactNode;
  pathname: string;
  src: string;
  alt: string;
  current: boolean;
}

export default function SideBarItem({
  children,
  pathname,
  src,
  alt,
  current,
}: Props) {
  return (
    <li>
      <Link
        href={pathname}
        className={clsx(
          'flex items-center h-9 mx-1 gap-3.5',
          current &&
            ' after:w-1 after:h-full after:border-2 after:border-purple-200 after:ml-auto after:rounded-sm'
        )}
      >
        <Image src={src} alt={alt} width={18} height={18} />
        <span className="font-medium text-zinc-50"> {children}</span>
      </Link>
    </li>
  );
}
