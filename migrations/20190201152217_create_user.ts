import * as Knex from "knex";

import { UserTable } from "@enums/tables";


export async function up(knex: Knex) {
  return await knex.schema.createTable(UserTable.Table, table => {
    table.uuid(UserTable.Id).primary();
    table.string(UserTable.FirstName, 128).notNullable();
    table.string(UserTable.LastName, 128).notNullable();
    table.string(UserTable.EmailAddress, 255).notNullable();
    table.enum(UserTable.Gender, ["m", "f"]).notNullable();
    table.string(UserTable.Password).notNullable();
  });
}

export async function down(knex: Knex) {
  return await knex.schema.dropTable(UserTable.Table);
}