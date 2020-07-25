import React from 'react';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import { TOTAL_COUNTRIES, OFFSET } from '../../../helpers/constants';
import Pagination from '../../molecules/Pagination/Pagination';
import Country from '../../../domains/Country';
import CountryListItem from '../../molecules/CountryListItem/CountryListItem';
import Loading from '../../atoms/Loading/Loading';
import Container from '../../atoms/Container/Container';

interface CountryListProps {
  countries: Array<Country>;
  isLoading?: boolean;
  onPaginate: (first: number, offset: number) => void;
}

export default function CountrieListView({
  countries,
  isLoading = true,
  onPaginate }: CountryListProps) {

  const onDefineOffset = (page: number) => ((page - 1) * OFFSET)

  return (
    <div>
      {isLoading ?
        (
          <Container>
            <Loading dataTest="countries-list-loading" />
          </Container>) :
        (<>
          <Card variant="outlined">
            {
              countries && countries.map((country, i) => {
                return (<span key={i}>
                  <CountryListItem
                    key={country.name}
                    capital={country.capital}
                    name={country.name}
                    flag={country.flag?.emoji} />
                  {i !== countries.indexOf(countries[countries.length - 1])
                    && <Divider key={i} />}
                </span>)
              })
            }
          </Card >
          <Pagination
            onSetPage={(page) => {
              onPaginate(OFFSET, onDefineOffset(page));
            }}
            itemsPerPage={OFFSET}
            numberOfItems={TOTAL_COUNTRIES}
          />
        </>
        )
      }
    </div>
  )
}
