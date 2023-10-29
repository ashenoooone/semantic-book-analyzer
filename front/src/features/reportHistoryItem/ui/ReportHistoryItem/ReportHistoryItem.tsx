import React, { FC, ReactNode } from 'react';
import cls from "./ReportHistoryItem.module.scss";

interface ReportHistoryItemProps {
  className?: string;
  children?: ReactNode;
}

export const ReportHistoryItem = (props: ReportHistoryItemProps) => {
  const { className='', children } = props;
  return (
  <div className={cls.ReportHistoryItem}>
    {children}
  </div>
  );
};
