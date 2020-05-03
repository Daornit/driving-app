import gql from 'graphql-tag';

export const ME = gql`
  query me {
    me {
      _id
      email
      phone
      avatar
    }
  }
`;

export const GET_COURSES = gql`
  query {
    courses {
      _id
      name
      director {
        username
        phone
      }
      email
    }
  }
`;

export const DELETE_COURSE = gql`
  mutation deleteCourse($courseId: String!){
    deleteCourse(courseId:$courseId){
      _id
    }
  }
`;


export const CREATE_COURSE = gql`
  mutation createCourse($course: CourseInput!){
    createCourse(course:$course){
      name
      director{
        username
        _id
      }
    }
  }
`;
