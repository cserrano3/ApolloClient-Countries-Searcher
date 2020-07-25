import React from 'react';
import useStyles from './Styles';

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  const { container } = useStyles();

  return (
    <div className={container} >
      {children}
    </div>
  )
}