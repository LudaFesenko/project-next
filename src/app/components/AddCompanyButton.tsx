'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Button from './Button';

export default function AddCompanyButton() {
  const [show, setShow] = useState(false);

  const CompanyFormModal = dynamic(() => import('./CompanyFormModal'), {
    ssr: false,
  });
  return (
    <>
      <Button onClick={() => setShow(true)}>Company button</Button>
      <CompanyFormModal
        onSubmit={console.log}
        show={show}
        onClose={() => setShow(false)}
      />
    </>
  );
}
