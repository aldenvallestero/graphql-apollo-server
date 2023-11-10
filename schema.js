export const typeDefs = `#graphql
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Review {
    id: ID!
    rating: Int!
    content: String
    book: Book!
  }

  type Query {
    books: [Book]
    reviews: [Review]
    review(id: ID): Review
  }
`;
