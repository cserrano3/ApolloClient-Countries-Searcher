import React from 'react';
import { render } from '@testing-library/react';
import CountriesListView from './CoutriesListView';

describe('CountriesListView', () => {
  it('should display a loading indicator when the list is still loading', () => {
    const props = {
      isLoading: true,
      countries: [],
      onPaginate: jest.fn()
    };

    const { getByTestId } = render(<CountriesListView {...props} />);

    expect(getByTestId("countries-list-loading")).toBeVisible();

  });
});