import clsx from 'clsx';
import React from 'react';

interface Props {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
}

export default function SummaryTableCell({ children, align = 'left' }: Props) {
  return (
    <td
      className={clsx(
        'py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-l',
        `text-${align}`
      )}
    >
      {children}
    </td>
  );
}
