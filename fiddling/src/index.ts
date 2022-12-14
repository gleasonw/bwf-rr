import { __prod__ } from './constants';
import { MikroORM } from '@mikro-orm/core';
import microConfig from "./mikro-orm.config";
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './resolvers/hello';
import { PostResolver } from './resolvers/post';
import { UserResolver } from './resolvers/users';

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();

    const app = express(); 

    app.get('/', (_, res ) => {
        res.send('hello');
    });

    app.listen(4000, () => {
        console.log('server started on localhost:4000');
    })

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver, PostResolver, UserResolver],
            validate: false,
        }),
        context: () => ({ em: orm.em }),
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({ app });

};

main().catch(err => {
    console.error(err);
});