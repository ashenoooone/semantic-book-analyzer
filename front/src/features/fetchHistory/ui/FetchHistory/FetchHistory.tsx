import React, { FC, ReactNode } from 'react';
import cls from "./FetchHistory.module.scss";

interface FetchHistoryProps {
  className?: string;
  children?: ReactNode;
}

export const FetchHistory = (props: FetchHistoryProps) => {
  const { className='', children } = props;
  return (
  <div className={cls.FetchHistory}>
    {children}
  </div>
  );
};
