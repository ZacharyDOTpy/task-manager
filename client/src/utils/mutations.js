import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TASK = gql`
  mutation addTask(
    $title: String!, 
    $description: String!, 
    $status: String!, 
    $priority: String!, 
    $dueDate: String
  ) {
    addTask(
      title: $title, 
      description: $description, 
      status: $status, 
      priority: $priority,
      dueDate: $dueDate
    ) {
      _id
      username
      email
      tasks {
        _id
        title
      }
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation updateTask($id: ID!, $name: String!, $description: String!) {
    updateTask(id: $id, name: $name, description: $description) {
      _id
      name
      description
    }
  }
`;

export const DELETE_TASK = gql`
  mutation deleteTask($id: ID!) {
    deleteTask(id: $id) {
      _id
    }
  }
`;

export const ADD_USER_TASK = gql`
  mutation addUserTask($taskId: ID!) {
    addUserTask(taskId: $taskId) {
      _id
      username
      tasks {
        _id
        name
        description
      }
    }
  }
`;

