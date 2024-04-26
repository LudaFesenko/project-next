import DashboardCard from '@/app/components/DashboardCard';
import MagicButton from '@/app/components/MagicButton';
import SummaryTable from '@/app/components/SummaryTable';
import SummaryTableCell from '@/app/components/SummaryTableCell';
import SummaryTableHeader from '@/app/components/SummaryTableHeader';
import { getSummarySales } from '@/lib/api';
import React from 'react';

interface Props {}

export default async function Page({}: Props) {
  const data = await new Promise((res) => {
    setTimeout(() => {
      res(getSummarySales());
    }, 4000);
  });

  return (
    <DashboardCard
      label={
        <>
          Sales details
          <MagicButton />
        </>
      }
    >
      <SummaryTable
        header={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align="center">Sold</SummaryTableHeader>
            <SummaryTableHeader align="center">Income</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ companyId, companyTitle, sold, income }) => {
          return (
            <tr key={companyId}>
              <SummaryTableCell>{companyTitle}</SummaryTableCell>
              <SummaryTableCell>{sold}</SummaryTableCell>
              <SummaryTableCell>{`$${income}`}</SummaryTableCell>
            </tr>
          );
        })}
      </SummaryTable>
    </DashboardCard>
  );
}