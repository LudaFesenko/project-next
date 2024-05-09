'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/components/PromotionFormModal';

interface Props {
  params: { id: string };
}

export default function Page({ params }: Props) {
  const router = useRouter();
  return (
    <PromotionFormModal
      companyId={params.id}
      show={true}
      onClose={() => router.back()}
    />
  );
}
