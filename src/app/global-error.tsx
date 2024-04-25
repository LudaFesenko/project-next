'use client';
import React from 'react';

import Link from 'next/link';

interface Props {
  error: Error;
}

export default function GlobalError({ error }: Props) {
  return (
    <html>
      <body>
        <h2>Some went global - {error.message}</h2>
        <Link href={'/'}>Go back</Link>
      </body>
    </html>
  );
}
