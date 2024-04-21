'use client';

import React from 'react';
import Modal, { ModalProps } from './Modal';
import CompanyForm, { CompanyFormProps } from './CompanyForm';

export interface Props extends ModalProps {
  onSubmit: CompanyFormProps['onSubmit'];
}

export default function CompanyFormModal({ onSubmit, ...rest }: Props) {
  return (
    <Modal {...rest}>
      <CompanyForm onSubmit={onSubmit} />
    </Modal>
  );
}
