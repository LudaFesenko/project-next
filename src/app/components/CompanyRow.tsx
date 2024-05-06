import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { Company } from '@/lib/api';
import StatusLabel from './StatusLabel';

interface Props {
  company: Company;
}

export default function CompanyRow({ company }: Props) {
  return (
    <>
      <tr className="h-14 text-center text-gray-900 bg-white">
        <td className="text-xs font-medium text-blue-700 rounded-l border-l-4 border-blue-700">
          {company.categoryTitle}
        </td>
        <td>
          <a href={`/companies/${company.id}`}>{company.title}</a>
        </td>
        <td>
          <StatusLabel status={company.status} />
        </td>
        <td>
          <div className="inline-flex items-center gap-1">
            <Image
              src={`/icons/${company.hasPromotions ? 'check' : 'x-mark'}.svg`}
              width={20}
              height={20}
              alt="promotion"
            />
            <span
              className={clsx(
                'text-sm font-medium',
                company.hasPromotions ? 'text-green-700' : 'text-red-700'
              )}
            >
              {company.hasPromotions ? 'Yes' : 'No'}
            </span>
          </div>
        </td>
        <td>{company.countryTitle}</td>
        <td className="rounded-r">
          {new Date(company.joinedDate).toLocaleDateString('uk-UA')}
        </td>
      </tr>
    </>
  );
}
