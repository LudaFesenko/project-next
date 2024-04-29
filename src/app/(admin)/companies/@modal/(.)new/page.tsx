'use client';
import CompanyForm from '@/app/components/CompanyForm';
import Modal from '@/app/components/Modal';
import { useRouter } from 'next/navigation';
import React from 'react';

interface Props {}

export default function Page({}: Props) {
  const router = useRouter();
  return (
    <Modal show={true} onClose={() => router.back()}>
      <CompanyForm onSubmit={console.log} />
    </Modal>
  );
}
