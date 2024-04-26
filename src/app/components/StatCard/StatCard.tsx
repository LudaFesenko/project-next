import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

export enum TypeCard {
  Dark = 'dark',
  Gradient = 'gradient',
}
interface Props {
  label: string;
  counter: number;
  type?: TypeCard;
  className?: string;
}

export default function StatCard({ label, counter, type, className }: Props) {
  return (
    <div
      className={clsx(
        'rounded',
        type === TypeCard.Dark &&
          'pt-3 px-3 bg-gray-900 odd:text-purple-200 even:text-lime-200 text-right',
        type === TypeCard.Gradient && [
          styles.gradient,
          'p-7 bg-purple-200 text-gray-900 text-left',
        ],
        className
      )}
    >
      <p
        className={clsx(
          'text-left before:w-4 before:h-0.5 before:rounded',
          type === TypeCard.Dark &&
            'text-sm mb-1 text-zinc-50 before:block before:mb-2 before:bg-zinc-50',
          type === TypeCard.Gradient &&
            'text-xs mb-5 before:inline-block before:mr-2 before:align-middle before:bg-gray-900'
        )}
      >
        {label}
      </p>
      <p className="text-6xl font-semibold">{counter}</p>
    </div>
  );
}
