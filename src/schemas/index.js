import { schema } from "normalizr";

const categorySchema = new schema.Entity("categories");
const categoryListSchema = [categorySchema];

export { categoryListSchema };
