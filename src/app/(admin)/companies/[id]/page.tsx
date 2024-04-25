'use client';
import Header from '@/app/components/Header';
import { notFound } from 'next/navigation';

import React, { useEffect } from 'react';

interface Props {
  params: { id: string };
}

export default function Page({ params }: Props) {
  useEffect(() => {
    const id = Number.parseInt(params.id);
    if (Number.isNaN(id)) {
      notFound();
    }
  }, [params.id]);
  return (
    <>
      <Header>Company {params.id}</Header>
    </>
  );
}
