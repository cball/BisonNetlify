import { ApolloServer } from 'apollo-server-micro';

import { createContext } from '../../graphql/context';
import { schema } from '../../graphql/schema';

// eslint-disable-next-line
require('@nexus/schema').default;

export const GRAPHQL_PATH = '/api/graphql';

// IMPORT DOESN"T WORK RIGHT.
// Tried require()
// looks like requiring files outside of dir is the issue.

// this config block is REQUIRED on Vercel! It stops the body of incoming HTTP requests from being parsed
export const config = {
  api: {
    bodyParser: false,
  },
};

export const server = new ApolloServer({
  schema,
  playground: process.env.NODE_ENV !== 'production',
  introspection: true,
  context: createContext,
  cacheControl: true,
});

export default server.createHandler({ path: GRAPHQL_PATH });
