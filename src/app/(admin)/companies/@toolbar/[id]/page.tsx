import AddPromotionButton from '@/app/components/AddPromotionButton';
import SearchInput from '@/app/components/SearchInput';
import ToolBar from '@/app/components/ToolBar';
import React from 'react';

interface Props {
  params: { id: string };
}

export default function Page({ params }: Props) {
  return (
    <ToolBar action={<AddPromotionButton companyId={params.id} />}>
      <SearchInput />
    </ToolBar>
  );
}
