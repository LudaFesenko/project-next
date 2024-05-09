import React from 'react';
import clsx from 'clsx';
import { CompanyStatus } from '@/lib/api';

interface Props {
  status: CompanyStatus;
  disabled?: boolean;
  styled?: boolean;
}

const labelByStatus = {
  [CompanyStatus.Active]: 'Active',
  [CompanyStatus.NotActive]: 'Not active',
  [CompanyStatus.Pending]: 'Pending',
  [CompanyStatus.Suspended]: 'Suspended',
};

export default function StatusLabel({
  status,
  disabled,
  styled = true,
}: Props) {
  const label = labelByStatus[status];

  if (!styled) {
    return label;
  }
  return (
    <div
      className={clsx(
        'inline-flex items-center py-1 px-3.5 rounded-3xl text-sm font-medium',

        status === CompanyStatus.Active && 'text-green-700 bg-green-100',
        status === CompanyStatus.NotActive && 'text-red-700 bg-red-100',
        status === CompanyStatus.Pending && 'text-orange-700 bg-orange-100',
        status === CompanyStatus.Suspended && 'text-blue-700 bg-blue-100',

        {
          ['opacity-75 cursor-not-allowed']: disabled,
        }
      )}
    >
      <div className="w-1 h-1 rounded-full mr-2 bg-current" />

      {label}
    </div>
  );
}
