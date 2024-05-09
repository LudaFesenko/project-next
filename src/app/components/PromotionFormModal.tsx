'use client';
import React from 'react';
import Modal, { ModalProps } from './Modal';
import PromotionForm from './PromotionForm';

interface Props extends ModalProps {
  companyId: string;
}

export default function PromotionFormModal({
  companyId,
  onClose,
  ...rest
}: Props) {
  return (
    <Modal {...rest} onClose={onClose}>
      <PromotionForm companyId={companyId} onSubmit={() => onClose()} />
    </Modal>
  );
}
