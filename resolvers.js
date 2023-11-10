import { books, reviews, } from "./dataset";

export const resolvers = {
  Query: {
    books: () => books,
    review: (_, args) => reviews.find(i => i.id === args.id)
  },
};
