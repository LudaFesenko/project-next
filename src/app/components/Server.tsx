import React from 'react';

interface Props {
  children?: React.ReactNode;
}

function Server({ children }: Props) {
  return (
    <div>
      <span>Server Component</span>
      {children}
    </div>
  );
}

export default Server;
