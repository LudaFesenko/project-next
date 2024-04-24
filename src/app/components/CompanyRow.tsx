import React from 'react';
import StatusLabel, { Status } from './StatusLabel';
import Image from 'next/image';
import clsx from 'clsx';
import { text } from 'stream/consumers';

interface Props {
  category: string;
  company: string;
  promotions: boolean;
  id: number;
  status: Status;
  country: string;
  joinedDate: string;
}

const labelByStatus = {
  [Status.Active]: 'Active',
  [Status.NotActive]: 'Not active',
  [Status.Pending]: 'Pending',
  [Status.Suspended]: 'Suspended',
};

export default function CompanyRow({
  category,
  id,
  company,
  status,
  promotions,
  country,
  joinedDate,
}: Props) {
  return (
    <>
      <tr className="h-14 text-center text-gray-900 bg-white">
        <td className="text-xs font-medium text-blue-700 rounded-l border-l-4 border-blue-700">
          {category}
        </td>
        <td>
          <a href={`/companies/${id}`}>{company}</a>
        </td>
        <td>
          <StatusLabel status={status}>{labelByStatus[status]}</StatusLabel>
        </td>
        <td>
          <div className="inline-flex items-center gap-1">
            <Image
              src={`/icons/${promotions ? 'check' : 'x-mark'}.svg`}
              width={20}
              height={20}
              alt="promotion"
            />
            <span
              className={clsx(
                'text-sm font-medium',
                promotions ? 'text-green-700' : 'text-red-700'
              )}
            >
              {promotions ? 'Yes' : 'No'}
            </span>
          </div>
        </td>
        <td>{country}</td>
        <td className="rounded-r">
          {new Date(joinedDate).toLocaleDateString('uk-UA')}
        </td>
      </tr>
    </>
  );
}
