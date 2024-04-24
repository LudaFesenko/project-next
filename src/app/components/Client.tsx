'use client';
import React from 'react';
import ServerCopy from './ServerCopy';

interface Props {
  children?: React.ReactNode;
}

function Client({ children }: Props) {
  console.log('Client Component');

  return (
    <div>
      <span>Client Component</span>

      {children}
    </div>
  );
}

export default Client;
