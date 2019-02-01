import * as Knex from "knex";

import { FileType } from "../shared/enums/-index";


export async function up(knex: Knex) {
  return await knex.schema.createTable(FileType.Table, table => {
    table.integer(FileType.Id).primary();
    table.string(FileType.Name).notNullable();
  });
}

export async function down(knex: Knex) {
  return await knex.schema.dropTable(FileType.Table);
}