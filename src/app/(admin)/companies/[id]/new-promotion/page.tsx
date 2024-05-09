import PromotionForm from '@/app/components/PromotionForm';
import React from 'react';

interface Props {
  params: { id: string };
}

export default function Page({ params }: Props) {
  return (
    <div className="py-6 px-10">
      <PromotionForm companyId={params.id} />
    </div>
  );
}
