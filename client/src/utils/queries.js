import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
    }
  }
`;

export const QUERY_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_TASKS = gql`
  query tasks {
    tasks {
      _id
      name
      description
      user {
        _id
        username
      }
    }
  }
`;

export const QUERY_TASK = gql`
  query task($id: ID!) {
    task(id: $id) {
      _id
      name
      description
      user {
        _id
        username
      }
    }
  }
`;  