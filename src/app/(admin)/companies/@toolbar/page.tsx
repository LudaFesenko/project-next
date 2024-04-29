import AddCompanyButton from '@/app/components/AddCompanyButton';
import SearchInput from '@/app/components/SearchInput';
import ToolBar from '@/app/components/ToolBar';
import React from 'react';

interface Props {}

export default function Page({}: Props) {
  return (
    <>
      <ToolBar action={<AddCompanyButton />}>
        <SearchInput placeholder="Search..." />
      </ToolBar>
    </>
  );
}
