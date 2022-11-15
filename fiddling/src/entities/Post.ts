import { Entity, OptionalProps, PrimaryKey, Property } from '@mikro-orm/core';
import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export class Post {

    [OptionalProps]? : 'updatedAt' | 'createdAt';

    @Field(() => String)
    @Property()
    title!: string;

    @Field(() => Int)
    @PrimaryKey()
    id!: number;

    @Field(() => String)
    @Property({ onUpdate: () => new Date() })
    updatedAt: Date = new Date();

    @Field(() => String)
    @Property()
    createdAt: Date = new Date();

}