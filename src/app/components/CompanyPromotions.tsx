'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPromotions } from '@/lib/api';
import Promotion from './Promotion';

interface Props {
  companyId: string;
}

export default function CompanyPromotions({ companyId }: Props) {
  const { data: promotions } = useQuery({
    queryKey: ['promotions', companyId],
    queryFn: () => getPromotions({ companyId }),
  });

  return (
    <div className="grid grid-cols-12 gap-5">
      {promotions?.map((promotion) => (
        <div key={promotion.id} className="col-span-4">
          <Promotion promotion={promotion} />
        </div>
      ))}
    </div>
  );
}
