import React, { FC, ReactNode } from 'react';
import cls from "./DeleteHistoryItem.module.scss";

interface DeleteHistoryItemProps {
  className?: string;
  children?: ReactNode;
}

export const DeleteHistoryItem = (props: DeleteHistoryItemProps) => {
  const { className='', children } = props;
  return (
  <div className={cls.DeleteHistoryItem}>
    {children}
  </div>
  );
};
