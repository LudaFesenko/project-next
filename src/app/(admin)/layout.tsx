import React from 'react';
import SideBar from '../components/SideBar';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <SideBar />
      <div className="ml-60">{children}</div>
    </>
  );
}
