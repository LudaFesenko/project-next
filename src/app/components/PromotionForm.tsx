'use client';
import { Promotion, createPromotion, getCompany } from '@/lib/api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { strict } from 'assert';
import { Form, Formik } from 'formik';
import React from 'react';
import InputField from './InputField';
import LogoUploaded from './LogoUploaded';
import Button from './Button';

export type PromotionFieldValues = {
  title: string;
  description: string;
  discount: string | number;
};

const initialValues: PromotionFieldValues = {
  title: '',
  description: '',
  discount: '',
};

export interface PromotionFormProps {
  companyId: string;
  onSubmit?: (values: PromotionFieldValues) => void | Promise<void>;
}

export default function PromotionForm({
  companyId,
  onSubmit,
}: PromotionFormProps) {
  const queryClient = useQueryClient();

  const { data: company } = useQuery({
    queryKey: ['companies', companyId],
    queryFn: () => getCompany(companyId),
    staleTime: 10 * 1000,
    enabled: Boolean(companyId),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: createPromotion,

    onSuccess: (data) => {
      queryClient.setQueryData<Promotion[]>(
        ['promotions', companyId],
        (oldData) => {
          if (oldData) {
            return oldData.concat(data);
          }
        }
      );

      queryClient.setQueryData<Promotion[]>(['promotions'], (oldData) => {
        if (oldData) {
          return oldData.concat(data);
        }
      });
    },
  });

  const handleSubmit = async (values: PromotionFieldValues) => {
    if (!company) return;

    await mutateAsync({
      ...values,
      discount: Number(values.discount) || 0,
      companyId: company.id,
      companyTitle: company.title,
    });

    if (onSubmit) {
      onSubmit(values);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="flex flex-col gap-10">
        <p className="mb-0.5 text-xl">Add new promotion</p>
        <div className="flex flex-col gap-5">
          <InputField label="Title" placeholder="Title" name="title" required />
          <InputField
            label="Description"
            name="description"
            id="description"
            placeholder="Description"
            required
          />
          <InputField
            type="number"
            label="Discount amount"
            name="discount"
            placeholder="-40%"
            required
          />
          <LogoUploaded square label="Image" placeholder="Upload photo" />
        </div>
        <Button type="submit" disabled={isPending}>
          Add promotion
        </Button>
      </Form>
    </Formik>
  );
}
