'use client';

import React from 'react';
import Modal, { ModalProps } from './Modal';
import CompanyForm from './CompanyForm';

export default function CompanyFormModal({ onClose, ...rest }: ModalProps) {
  return (
    <Modal {...rest} onClose={onClose}>
      <CompanyForm onSubmit={() => onClose()} />
    </Modal>
  );
}
