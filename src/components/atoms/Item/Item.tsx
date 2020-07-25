import React from 'react';
import ListItem from '@material-ui/core/ListItem';

interface Props {
  children: React.ReactNode;
}

const Item = ({ children }: Props) => {
  return (
    <ListItem button>
      {children}
    </ListItem>
  )
};

export default Item;
