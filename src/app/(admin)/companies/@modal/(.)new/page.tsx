'use client';
import CompanyForm from '@/app/components/CompanyForm';
import CompanyFormModal from '@/app/components/CompanyFormModal';
import Modal from '@/app/components/Modal';
import { useRouter } from 'next/navigation';
import React from 'react';

interface Props {}

export default function Page({}: Props) {
  const router = useRouter();
  return (
    <>
      New
      <CompanyFormModal
        show={true}
        onClose={() => {
          router.back();
        }}
      />
    </>
  );
}
