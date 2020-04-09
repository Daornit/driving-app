const { gql } = require('apollo-server-express');

module.exports = gql`
  type User {
    _id: ID!
    username: String!
    avatar: String!
    email: String!
    type: String!
    isBanned: Boolean!
    hash: String
    salt: String
  }

  input UserInput {
    username: String!
    avatar: String
    email: String!
    type: String!
    password: String!
  }

  input UpdateUserInput {
    username: String
    avatar: String
    email: String
    type: String
    password: String
  }

  type AuthData {
    _id: ID!
    exp: Int!
    email: String!
    token: String!
  }

  type Query {
    me: User!
    users: [User!]!
    #teacher
    monitorStudents: [User!]!
    studentChat(userId: String!): Chat!
    #client turliin hereglegchded
    generateRandomExam: Exam!
    tutorials: [Tutorial!]!
    duremuud: [Durem!]!

  }

  type Mutation {
    login(email: String!, password: String!): AuthData!
    createUser(userInput: UserInput!): User!
    updateUser(userId: String!, updateUserInput: UpdateUserInput!): User!
    banUser(userId: String!): User!
    
    #Admin ii hiih uildel
    createCourse(course: CourseInput!): Course!
    deleteCourse(courseId: String!): Course!
    addDirector(courseId: String userId: String!) Course!
    removeDirector(courseId: String, userId: String)! Course!

    addDurem(durem: DuremInput!): Durem!
    removeDurem(duremId: String!): Durem!
    addTest(test: TestInput!): Test!
    removeTest(testId: String!): Test!

    #Director hiih uildeluud
    addPost(post: PostInput!): Post!
    removePost(postId: String!): Post!
    updateCourseInfo(course: CourseInput!): Course!
    addStudentToCourse(userId: String!): Course!
    removeStudentFromCourse(userId: String!): Course!
    addTeacherToCourse(userId: String!): Course!
    removeTeacherFromCourse(userId: String!): Course!

    #teacher hiih uildel
    addCalendarSchedule(courseId: String! schedule: Schedule!): Schedule!
    removeCalendarSchedule(scheduleId: String): Schedule!
    #teacher bolon client
    sendChat(userId: String, chatInput: ChatInput!) Chat!;
  }
`;
