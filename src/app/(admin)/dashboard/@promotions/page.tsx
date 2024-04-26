import DashboardCard from '@/app/components/DashboardCard';
import SummaryTable from '@/app/components/SummaryTable';
import SummaryTableCell from '@/app/components/SummaryTableCell';
import SummaryTableHeader from '@/app/components/SummaryTableHeader';
import { getPromotion } from '@/lib/api';
import React from 'react';

interface Props {}

export default async function Page({}: Props) {
  const data = await getPromotion();

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
        {data.map(({ id, companyName, promotionName, discount }) => {
          return (
            <tr key={id}>
              <SummaryTableCell>{companyName}</SummaryTableCell>
              <SummaryTableCell>{promotionName}</SummaryTableCell>
              <SummaryTableCell align="center">-{discount}%</SummaryTableCell>
            </tr>
          );
        })}
      </SummaryTable>
    </DashboardCard>
  );
}
