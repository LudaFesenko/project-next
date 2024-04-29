import Header from '@/app/components/Header';
import React from 'react';

interface Props {
  params: { id: string };
}

export default function Page({ params }: Props) {
  return <Header>{params.id}</Header>;
}
