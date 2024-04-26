import React from 'react';

interface Props {
  header: React.ReactNode;
  children: React.ReactNode;
}

export default function SummaryTable({ header, children }: Props) {
  return (
    <table className="table-auto w-full border-separate border-spacing-0">
      <thead>
        <tr>{header}</tr>
      </thead>
      <tbody className="[&>tr:nth-child(2n)]:bg-gray-100 [&>tr:nth-child(2n+1)]:bg-white">
        {children}
      </tbody>
    </table>
  );
}
