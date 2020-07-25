import { gql } from 'apollo-boost';

const GET_ALL_COUNTRIES = gql`
query($first: Int, $offset: Int) {
  Country(first: $first, offset: $offset) {
    name, capital, flag {
      emoji
    }
  }
}`;

export default GET_ALL_COUNTRIES;