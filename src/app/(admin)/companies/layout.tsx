import React from 'react';

interface Props {
  header: React.ReactNode;
  toolbar: React.ReactNode;
  modal: React.ReactNode;
  children: React.ReactNode;
}

export default function Layout({ header, toolbar, modal, children }: Props) {
  return (
    <>
      {modal}
      {header}
      <main>
        {toolbar}
        {children}
      </main>
    </>
  );
}
