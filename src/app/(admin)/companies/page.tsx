import React from 'react';
import Header from '../../components/Header';
import ToolBar from '../../components/ToolBar';
import AddCompanyButton from '../../components/AddCompanyButton';
import SearchInput from '../../components/SearchInput';
import CompanyTable from '../../components/CompanyTable';
import CompanyRow from '../../components/CompanyRow';
import { Status } from '../../components/StatusLabel';

interface Props {}

export default function Page({}: Props) {
  return (
    <>
      <Header>Companies</Header>
      <main>
        <ToolBar action={<AddCompanyButton />}>
          <SearchInput placeholder="Search..." />
        </ToolBar>
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
      </main>
    </>
  );
}
