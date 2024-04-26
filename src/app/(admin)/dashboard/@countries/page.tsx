import DashboardCard from '@/app/components/DashboardCard';
import { getCountries } from '@/lib/api';
import clsx from 'clsx';
import Image from 'next/image';

import React from 'react';

interface Props {}

export default async function Page({}: Props) {
  const data = await getCountries();

  return (
    <DashboardCard label="Countries of companies">
      <div className="flex items-end pb-5 px-5 gap-2">
        <div>
          {data.map((item) => {
            return (
              <p
                key={item.countryId}
                className={clsx(
                  'text-sm text-gray-900 font-medium',
                  'before:inline-block before:rounded-full before:align-middle before:mr-2 before:bg-purple-200 before:w-2 before:h-2'
                )}
              >
                {item.country} - {item.count}
              </p>
            );
          })}
        </div>
        <Image src={'/images/world.svg'} width={395} height={296} alt="world" />
      </div>
    </DashboardCard>
  );
}
