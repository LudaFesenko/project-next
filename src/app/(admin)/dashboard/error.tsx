'use client';
import Button from '@/app/components/Button';
import React from 'react';

interface Props {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: Props) {
  return (
    <div>
      <h2>Ooops {error.message}</h2>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
