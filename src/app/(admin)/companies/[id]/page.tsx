import React from 'react';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { notFound } from 'next/navigation';

import getQueryClient from '@/lib/utils/getQueryClient';
import { Company, getCompany, getPromotions } from '@/lib/api';
import CompanyInfo from '@/app/components/CompanyInfo';
import CompanyPromotions from '@/app/components/CompanyPromotions';

interface Props {
  params: { id: string };
}

export default async function Page({ params }: Props) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies', params.id],
    queryFn: () => getCompany(params.id, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  await queryClient.prefetchQuery({
    queryKey: ['promotions', params.id],
    queryFn: () =>
      getPromotions({ companyId: params.id }, { cache: 'no-store' }),
  });

  const company = queryClient.getQueryData(['companies', params.id]) as Company;
  if (!company) {
    notFound();
  }
  const dehydrateState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydrateState}>
      <div className="py-6 px-10 grid grid-cols-12 gap-5">
        <div className="col-span-3">
          <CompanyInfo companyId={params.id} />
        </div>
        <div className="col-span-9">
          <CompanyPromotions companyId={params.id} />
        </div>
      </div>
    </HydrationBoundary>
  );
}
