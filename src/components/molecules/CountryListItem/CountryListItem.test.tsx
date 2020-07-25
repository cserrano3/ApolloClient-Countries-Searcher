import React from 'react';
import { render } from '@testing-library/react';
import CountryListItem from './CountryListItem';

describe('Country List Item', () => {
  const props = {
    name: "Ireland",
    capital: "Dublin",
    flag: '🇮🇪'
  }
  it('should render with the correct props', () => {
    const { getByTestId, getByLabelText } = render(<CountryListItem {...props} />)

    expect(getByTestId("country-list-item-name")).toHaveTextContent("Ireland");
    expect(getByTestId("country-list-item-capital")).toHaveTextContent("Dublin");
    expect(getByTestId("country-list-item-flag")).toHaveTextContent('🇮🇪');
    expect(getByLabelText("Ireland")).toBeVisible();
  });
});