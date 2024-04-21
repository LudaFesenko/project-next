import React from 'react';
import Image from 'next/image';

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export default function LogoUploaded({
  label,
  id,
  placeholder,
  ...rest
}: Props) {
  return (
    <div className="flex gap-10 mb-3">
      {label && <p className="text-base color-gray-900">{label}</p>}
      <label
        htmlFor={id}
        className="flex flex-col items-center justify-center w-40 h-40 bg-white border border-slate-900 border-dashed rounded-full cursor-pointer"
      >
        <Image
          src={'./icons/cloud.svg'}
          width={48}
          height={48}
          alt="logo"
          className="mb-1"
        />
        {placeholder && (
          <p className="text-base text-gray-500">{placeholder}</p>
        )}
        <input
          {...rest}
          id={id}
          className="hidden"
          type="file"
          accept={'image/*'}
        />
      </label>
    </div>
  );
}
