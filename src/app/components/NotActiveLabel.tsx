import React, { PropsWithChildren } from 'react';
import style from './NotActive.module.css';
interface Props {}

function NotActiveLabel({ children }: PropsWithChildren<Props>) {
  return <span className={style.label}>{children}</span>;
}

export default NotActiveLabel;
