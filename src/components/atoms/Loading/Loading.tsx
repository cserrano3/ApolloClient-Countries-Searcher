import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

interface Props {
  dataTest?: string;
}

export default function Loading({
  dataTest
}: Props) {
  return (
    <CircularProgress data-testid={dataTest} />
  )
}