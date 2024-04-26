import React from 'react';

interface Props {
  children: React.ReactNode;
  stats: React.ReactNode;
  sales: React.ReactNode;
  categories: React.ReactNode;
  countries: React.ReactNode;
  promotions: React.ReactNode;
}

export default function Layout({
  stats,
  sales,
  categories,
  countries,
  promotions,
  children,
}: Props) {
  return (
    <div>
      {children}
      <main className="grid grid-cols-12 gap-5 py-10 pl-10 pr-7">
        <div className="col-span-12">{stats}</div>
        <div className="col-span-5">{sales}</div>
        <div className="col-span-7">{categories}</div>
        <div className="col-span-6">{countries}</div>
        <div className="col-span-6">{promotions}</div>
      </main>
    </div>
  );
}
