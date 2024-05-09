import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  square?: boolean;
}

export default function LogoUploaded({
  square,
  label,
  id,
  placeholder,
  ...rest
}: Props) {
  return (
    <div
      className={clsx(
        'flex mb-3',
        !square && 'gap-10',
        square && 'gap-2 flex-col'
      )}
    >
      {label && <p className="text-base color-gray-900">{label}</p>}
      <label
        htmlFor={id}
        className={clsx(
          'flex flex-col items-center justify-center h-40 bg-white border border-slate-900 border-dashed cursor-pointer',
          !square && 'w-40 rounded-full',
          square && 'w-full'
        )}
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
