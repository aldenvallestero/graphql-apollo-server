import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// Data Source - books
const books = [
  {
    id: '1',
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    id: '2',
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

// Data Source - reviews
const reviews = [
  {
    id: '1',
    content: 'Amazing!',
    rating: 5,
    book_id: '1',
  },
  {
    id: '2',
    content: 'Great Contents!',
    rating: 3,
    book_id: '2',
  },
]

// Schema
const typeDefs = `#graphql
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Review {
    id: ID!
    content: String
    rating: Int!
    book: Book!
  }

  type Query {
    books: [Book]
    reviews: [Review]
    review(id: ID!): Review
  }
`;

const resolvers = {
  Query: {
    books: () => books,
    reviews: () => reviews,
    review: (_, args) => reviews.find(review => review.id === args.id)
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at: ${url}`);