import { ApolloError } from "apollo-boost";

interface Error extends ApolloError {
  status?: string;
  errorMessage?: string;
}

export default Error;
