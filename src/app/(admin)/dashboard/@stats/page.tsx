import StatCard, { TypeCard } from '@/app/components/StatCard';

import { getSummaryStats } from '@/lib/api';
import React from 'react';

interface Props {}

const labelByStat = {
  promotions: 'Total promotions',
  categories: 'Total categories',
  newCompanies: 'New companies',
  activeCompanies: 'Total active companies',
};
export default async function Page({}: Props) {
  const data = await getSummaryStats();

  return (
    <div className="grid grid-cols-12 gap-5">
      {(Object.keys(labelByStat) as (keyof typeof data)[]).map((key) => {
        return (
          <div key={key} className="col-span-3">
            <StatCard
              label={labelByStat[key]}
              counter={data[key]}
              type={TypeCard.Gradient}
            />
          </div>
        );
      })}
    </div>
  );
}
