'use client';

import React from 'react';
import CompanyForm from '@/app/components/CompanyForm';

interface Props {}

export default function Page({}: Props) {
  return (
    <div className="py-6 px-10">
      <CompanyForm onSubmit={console.log} />
    </div>
  );
}
