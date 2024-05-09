import React from 'react';
import Header from '@/app/components/Header';
import { Company, getCompany, getPromotions } from '@/lib/api';
import getQueryClient from '@/lib/utils/getQueryClient';

interface Props {
  params: { id: string };
}

export default async function Page({ params }: Props) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies', params.id],
    queryFn: () => getCompany(params.id, { cache: 'no-store' }),
  });

  const company = queryClient.getQueryData(['companies', params.id]) as Company;

  return <Header>{company?.title}</Header>;
}
