import React, { FC, ReactNode } from 'react';
import cls from "./User.module.scss";

interface UserProps {
  className?: string;
  children?: ReactNode;
}

export const User = (props: UserProps) => {
  const { className='', children } = props;
  return (
  <div className={cls.User}>
    {children}
  </div>
  );
};
