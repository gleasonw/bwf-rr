import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Post {
    @Property()
    title: string = 'no title';

    @PrimaryKey()
    id!: number;

    @Property({ onUpdate: () => new Date() })
    updatedAt = new Date();

    @Property({ onCreate: () => new Date() })
    createdAt = new Date();

}