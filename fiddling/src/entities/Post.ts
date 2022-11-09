import { Entity, Property, PrimaryKey, OptionalProps } from "@mikro-orm/core";

@Entity()
export class Post {

  [OptionalProps]? : 'updatedAt' | 'createdAt';

  @PrimaryKey()
  id!: number;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property()
  title!: string;

}