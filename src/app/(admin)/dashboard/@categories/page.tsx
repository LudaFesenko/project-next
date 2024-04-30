import React from 'react';
import DashboardCard from '@/app/components/DashboardCard';
import StatCard, { TypeCard } from '@/app/components/StatCard';
import { getCategories, getCompanies } from '@/lib/api';
import { getCountById } from '@/lib/utils/getCountById';

interface Props {}

export default async function Page({}: Props) {
  const categories = await getCategories();

  const companies = await getCompanies();
  const counts = getCountById(companies, 'categoryId');

  return (
    <DashboardCard label="Categories of companies">
      <div className="grid grid-cols-12 gap-3 pb-5 px-5">
        {categories.map(({ title, id }) => {
          return (
            <StatCard
              key={id}
              label={title}
              counter={counts[id] || 0}
              className="col-span-3"
              type={TypeCard.Dark}
            />
          );
        })}
      </div>
    </DashboardCard>
  );
}
