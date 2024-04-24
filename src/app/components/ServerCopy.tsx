import { headers } from 'next/headers';
import React from 'react';

interface Props {
  children?: React.ReactNode;
}

function ServerCopy({ children }: Props) {
  console.log('Server Copy Component');
  console.log(headers());
  return (
    <div>
      <span>ServerCopy Component</span>
      {children}
    </div>
  );
}

export default ServerCopy;
