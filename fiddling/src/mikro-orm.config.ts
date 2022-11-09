import { Post } from "./entities/Post";
import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";

export default {
    entities: [Post],
    dbName: 'bwf',
    type: 'postgresql',
    user: 'wgleason',
    password: 'postgres',
    debug: !__prod__,
    allowGlobalContext: true
} as Parameters<typeof MikroORM.init>[0];