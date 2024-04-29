import React from 'react';

import CompanyTable from '../../components/CompanyTable';
import CompanyRow from '../../components/CompanyRow';
import { Status } from '../../components/StatusLabel';

interface Props {}

export default function Page({}: Props) {
  return (
    <CompanyTable>
      <CompanyRow
        category="Products"
        company="Costco Wholesale"
        id={1}
        status={Status.Active}
        promotions={true}
        country="USA"
        joinedDate="02.09.2023"
      />
    </CompanyTable>
  );
}
