
import gql from 'graphql-tag';

export const USERS_QUERY = gql`
query courses {
  courses {
    _id
    name
    description
  }
}
query posts{
  posts {
    title
    description
  }
}
`;