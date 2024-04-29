import React from 'react';
import Link from 'next/link';

interface Props {}

export default function NotFound({}: Props) {
  return (
    <div>
      <p>Could not find requested resource</p>
      <br />
      <Link href={'/companies'} className="text-blue-800">
        Go back to companies
      </Link>
    </div>
  );
}
