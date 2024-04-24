import { headers } from 'next/headers';
import React from 'react';

interface Props {
  children?: React.ReactNode;
}

function ServerCopy({ children }: Props) {
  return (
    <div>
      <span>ServerCopy Component</span>
      {children}
    </div>
  );
}

export default ServerCopy;
