import StatCard, { TypeCard } from '@/app/components/StatCard';

import { SummaryStats, getSummaryStats } from '@/lib/api';
import Link from 'next/link';
import React from 'react';

interface Props {}

const labelByStat: Record<keyof SummaryStats, string> = {
  promotions: 'Total promotions',
  categories: 'Total categories',
  newCompanies: 'New companies',
  activeCompanies: 'Total active companies',
};
export default async function Page({}: Props) {
  const data = await getSummaryStats({
    next: { revalidate: 4000 },
  });

  return (
    <div className="grid grid-cols-12 gap-5">
      {(Object.keys(labelByStat) as (keyof SummaryStats)[]).map((key) => {
        return (
          <Link href={`/dashboard/${key}`} key={key} className="col-span-3">
            <StatCard
              label={labelByStat[key]}
              counter={data[key]}
              type={TypeCard.Gradient}
            />
          </Link>
        );
      })}
    </div>
  );
}
