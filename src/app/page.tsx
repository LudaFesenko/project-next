// 'use client';

import AddCompanyButton from './components/AddCompanyButton';
import Client from './components/Client';
import Server from './components/Server';
import ServerCopy from './components/ServerCopy';

export default function Home() {
  return (
    <main>
      <AddCompanyButton />
      <Server />
      <Client>
        <ServerCopy />
      </Client>
    </main>
  );
}
