'use client';
import React from 'react';

interface Props {
  error: Error;
}

export default function Error({ error }: Props) {
  return <div>Unexpected error inside sales page - {error.message}</div>;
}
