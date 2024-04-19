import React from 'react';
import style from './ActiveLabel.module.css';
interface Props {
  children: React.ReactNode;
}

export default function ActiveLabel({ children }: Props) {
  return <span className={style.label}>{children}</span>;
}
