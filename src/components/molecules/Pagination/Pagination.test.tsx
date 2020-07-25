import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from './Pagination';

describe('Pagination', () => {
  it('should have a number of pages that is divisible by the amount of items per page', () => {
    const props = {
      numberOfItems: 50,
      itemsPerPage: 10,
      onSetPage: jest.fn()
    }
    render(<Pagination {...props} />);

    const paginatedButtons = screen.getAllByLabelText(/\d/);

    expect(paginatedButtons).toHaveLength(5);
    paginatedButtons.forEach((button, i) => {
      expect(button).toHaveTextContent((i + 1).toString())
    });
  });

  it('it should have the first page as default page', () => {
    const props = {
      numberOfItems: 50,
      itemsPerPage: 10,
      onSetPage: jest.fn()
    }
    const { getByLabelText } = render(<Pagination {...props} />);

    expect(getByLabelText(/page 1/)).toHaveClass('Mui-selected');
  });

  it('should change the current page when I click on the "next" page button', () => {
    const props = {
      numberOfItems: 50,
      itemsPerPage: 10,
      onSetPage: jest.fn()
    }
    const { getByLabelText } = render(<Pagination {...props} />);

    userEvent.click(getByLabelText('Go to next page'));

    expect(getByLabelText(/page 2/)).toHaveClass('Mui-selected');
    expect(props.onSetPage).toHaveBeenCalledWith(2);
  });

  it('should change allow me to navigate back to a page when I click on the "previous" button', () => {
    const props = {
      numberOfItems: 50,
      itemsPerPage: 10,
      onSetPage: jest.fn()
    }
    const { getByLabelText } = render(<Pagination {...props} />);

    userEvent.click(getByLabelText('Go to next page'));

    expect(getByLabelText(/page 2/)).toHaveClass('Mui-selected');
    expect(props.onSetPage).toHaveBeenCalledWith(2);

    userEvent.click(getByLabelText('Go to next page'));

    expect(getByLabelText(/page 2/)).not.toHaveClass('Mui-selected');
    expect(getByLabelText(/page 3/)).toHaveClass('Mui-selected');
    expect(props.onSetPage).toHaveBeenCalledWith(3);

    userEvent.click(getByLabelText('Go to previous page'));

    expect(getByLabelText(/page 2/)).toHaveClass('Mui-selected');
    expect(getByLabelText(/page 3/)).not.toHaveClass('Mui-selected');
    expect(props.onSetPage).toHaveBeenCalledWith(2);
  });

  it('should allow me to navigate to a given page when I click on it', () => {
    const props = {
      numberOfItems: 50,
      itemsPerPage: 10,
      onSetPage: jest.fn()
    }

    const { getByLabelText } = render(<Pagination {...props} />);

    userEvent.click(getByLabelText(/page 4/));

    expect(getByLabelText(/page 4/)).toHaveClass('Mui-selected');
    expect(props.onSetPage).toHaveBeenCalledWith(4);
  });
});