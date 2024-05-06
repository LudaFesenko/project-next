import React from 'react';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import CompanyTable from '../../components/CompanyTable';
import getQueryClient from '@/lib/utils/getQueryClient';
import { getCompanies } from '@/lib/api';

export default async function Page() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies'],
    queryFn: () => getCompanies({ cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const dehydrateState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydrateState}>
      <CompanyTable />
    </HydrationBoundary>
  );
}
