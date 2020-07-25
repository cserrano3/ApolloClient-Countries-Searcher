import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from './Styles'
import Item from '../../atoms/Item/Item';
import Emoji from '../../atoms/Emoji/Emoji';

interface CountryListItemProps {
  name: string;
  capital: string;
  flag: string;
}

export default function ({
  name,
  capital,
  flag,
}: CountryListItemProps) {

  const { coutryListItemIconWrapper, coutryListItemCapitalWrapper, coutryListItemNameWrapper } = useStyles();

  return (
    <Item>
      <div data-testid="country-list-item">
        <span className={coutryListItemNameWrapper}>
          <Emoji symbol={flag} ariaLabel={name} className={coutryListItemIconWrapper} dataTest="country-list-item-flag" />
          <Typography variant="body2" data-testid="country-list-item-name">
            {name}
          </Typography>
        </span>
        <span className={coutryListItemCapitalWrapper}>
          <Typography variant="caption" data-testid="country-list-item-capital">
            {capital}
          </Typography>
        </span>
      </div>

    </Item>
  )
}
