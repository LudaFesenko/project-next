import DashboardCard from '@/app/components/DashboardCard';
import SummaryTable from '@/app/components/SummaryTable';
import SummaryTableCell from '@/app/components/SummaryTableCell';
import SummaryTableHeader from '@/app/components/SummaryTableHeader';
import { getPromotions } from '@/lib/api';

import React from 'react';

interface Props {}

export default async function Page({}: Props) {
  const data = await getPromotions();

  return (
    <DashboardCard label="Promotions">
      <SummaryTable
        header={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader>Name</SummaryTableHeader>
            <SummaryTableHeader align="center">%</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ id, title, companyTitle, discount }) => {
          return (
            <tr key={id}>
              <SummaryTableCell>{companyTitle}</SummaryTableCell>
              <SummaryTableCell>{title}</SummaryTableCell>
              <SummaryTableCell align="center">-{discount}%</SummaryTableCell>
            </tr>
          );
        })}
      </SummaryTable>
    </DashboardCard>
  );
}
