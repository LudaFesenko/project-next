import React from 'react';

interface Props {
  children?: React.ReactNode;
}

function Server({ children }: Props) {
  console.log('Server Component');
  return (
    <div>
      <span>Server Component</span>
      {children}
    </div>
  );
}

export default Server;
