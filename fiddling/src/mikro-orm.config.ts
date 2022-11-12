import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";

export default {
    entities: [Post],
    dbName: 'bwf-rr',
    type: 'postgresql',
    debug: !__prod__,
    password: 'postgres',
    user: 'will',
    allowGlobalContext: true,
} as Parameters<typeof MikroORM.init>[0];