import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { User } from "./entities/User";

export default {
    migrations: {
        path: path.join(__dirname, './migrations'),
        glob: '!(*.d).{js,ts}'
    },
    entities: [Post, User],
    dbName: 'bwf-rr',
    type: 'postgresql',
    debug: !__prod__,
    password: 'postgres',
    user: 'will',
    allowGlobalContext: true,
} as Parameters<typeof MikroORM.init>[0]
;