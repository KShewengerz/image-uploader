import * as Knex from "knex";

import { UserAccountTable } from "@app/enums";


export async function up(knex: Knex) {
  return await knex.schema.createTable(UserAccountTable.Table, table => {
    table.uuid(UserAccountTable.Id).primary();
    table.string(UserAccountTable.FirstName, 128).notNullable();
    table.string(UserAccountTable.LastName, 128).notNullable();
    table.string(UserAccountTable.EmailAddress, 255).notNullable();
    table.enum(UserAccountTable.Gender, ["m", "f"]).notNullable();
    table.string(UserAccountTable.Password).notNullable();
  });
}

export async function down(knex: Knex) {
  return await knex.schema.dropTable(UserAccountTable.Table);
}