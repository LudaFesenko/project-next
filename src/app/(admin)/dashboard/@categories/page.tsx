import DashboardCard from '@/app/components/DashboardCard';
import StatCard, { TypeCard } from '@/app/components/StatCard';
import { getCategories } from '@/lib/api';
import React from 'react';

interface Props {}

export default async function Page({}: Props) {
  const data = await getCategories();

  return (
    <DashboardCard label="Categories of companies">
      <div className="grid grid-cols-12 gap-3 pb-5 px-5">
        {data.map(({ categoriesId, categoryTitle, count }) => {
          return (
            <StatCard
              key={categoriesId}
              label={categoryTitle}
              counter={count}
              type={TypeCard.Dark}
              className="col-span-3"
            />
          );
        })}
      </div>
    </DashboardCard>
  );
}
