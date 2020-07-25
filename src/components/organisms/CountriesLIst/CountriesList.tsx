import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ITEMS_PER_PAGE } from '../../../helpers/constants';
import GET_ALL_COUNTRIES from '../../../queries/getAllCountries';
import CountriesListView from './CoutriesListView';

export default function Countries() {
  const { data, loading, fetchMore } = useQuery(GET_ALL_COUNTRIES, {
    variables: {
      first: ITEMS_PER_PAGE,
      offset: 0
    },
    partialRefetch: true
  });

  const paginate = React.useCallback((first: number, offset: number) => {
    fetchMore({
      variables: {
        offset
      },
      updateQuery: function (prev, result) {
        return {
          ...prev,
          Country: [...result.fetchMoreResult.Country]
        };
      }
    });
  }, [fetchMore]);

  return (
    <CountriesListView
      onPaginate={paginate}
      countries={data?.Country}
      isLoading={loading} />
  )
}