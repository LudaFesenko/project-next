'use client';
import { Form, Formik } from 'formik';
import React from 'react';
import InputField from './InputField';
import { type } from 'os';
import Button from './Button';
import LogoUploaded from './LogoUploaded';

export type companyField = {
  status: string;
  country: string;
  name: string;
  category: string;
  joinedData: string;
  description: string;
};

const initialValue: companyField = {
  name: '',
  country: '',
  status: '',
  joinedData: '',
  category: '',
  description: '',
};

export interface CompanyFormProps {
  onSubmit: (values: companyField) => void | Promise<void>;
}
export default function CompanyForm({ onSubmit }: CompanyFormProps) {
  return (
    <Formik initialValues={initialValue} onSubmit={onSubmit}>
      <Form className="flex flex-col gap-10">
        <h2 className="mb-0.5 text-xl">Add new company</h2>
        <div className="flex gap-6">
          <div className="flex flex-col flex-1 gap-5">
            <LogoUploaded label="Logo" placeholder="Upload photo" />
            <InputField label="Status" name="status" placeholder="Title" />
            <InputField
              label="Country"
              name="country"
              placeholder="Description"
            />
          </div>
          <div className="flex flex-col flex-1 gap-5">
            <InputField label="Name" name="name" placeholder="Title" />
            <InputField label="Category" name="category" placeholder="Title" />
            <InputField label="Joined data" name="joinedData" type="date" />
            <InputField
              label="Description"
              name="description"
              placeholder="Description"
            />
          </div>
        </div>
        <Button type="submit">Add company</Button>
      </Form>
    </Formik>
  );
}
