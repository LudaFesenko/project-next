import MagicButton from '@/app/components/MagicButton';
import React from 'react';

interface Props {}

export default function Page({}: Props) {
  return (
    <main>
      <div className="text-xl">Dashboard Page</div>
      <MagicButton />
    </main>
  );
}
