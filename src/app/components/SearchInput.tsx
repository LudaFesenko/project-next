import Image from 'next/image';
import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearchClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function SearchInput({ onSearchClick, ...rest }: Props) {
  return (
    <div className="relative w-96">
      <input
        {...rest}
        type="text"
        className="text-sm flex-1 py-3 pl-3 pr-11 w-full h-11 rounded border border-gray-300 bg-gray-50"
      />
      <button
        type="button"
        className="absolute top-0 right-0 p-3"
        onClick={onSearchClick}
      >
        <Image src={'/icons/search.svg'} width={20} height={20} alt="search" />
      </button>
    </div>
  );
}
