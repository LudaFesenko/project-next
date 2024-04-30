import DashboardCard from '@/app/components/DashboardCard';
import { getCompanies, getCountries } from '@/lib/api';
import { getCountById } from '@/lib/utils/getCountById';
import clsx from 'clsx';
import Image from 'next/image';

import React from 'react';

interface Props {}

export default async function Page({}: Props) {
  const countries = await getCountries();
  const companies = await getCompanies();

  const counts = getCountById(companies, 'countryId');

  return (
    <DashboardCard label="Countries of companies">
      <div className="flex items-end pb-5 px-5 gap-2">
        <div>
          {countries.map(({ id, title }) => {
            return (
              <p
                key={id}
                className={clsx(
                  'text-sm text-gray-900 font-medium',
                  'before:inline-block before:w-2 before:h-2 before:rounded-full before:align-middle before:mr-2 before:bg-purple-200'
                )}
              >
                {title} - {counts[id] || 0}
              </p>
            );
          })}
        </div>
        <Image src={'/images/world.svg'} width={395} height={296} alt="world" />
      </div>
    </DashboardCard>
  );
}
