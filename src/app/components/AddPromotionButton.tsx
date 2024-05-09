'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Button from './Button';

interface Props {
  companyId: string;
}

export default function AddPromotionButton({ companyId }: Props) {
  const router = useRouter();

  return (
    <Button
      onClick={() =>
        router.push(`/companies/${companyId}/new-promotion`, { scroll: false })
      }
    >
      Add Promotion
    </Button>
  );
}
