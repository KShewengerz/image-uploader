import * as Knex from "knex";

import { File, FileType } from "../shared/enums/-index";


export async function up(knex: Knex) {
  return await knex.schema.createTable(File.Table, table => {
    table.uuid(File.Id).primary();
    table.string(File.Name, 128).notNullable();
    table.integer(File.TypeId).notNullable();
    table.string(File.ImageUrl).notNullable();
    table.date(File.UploadedOn).notNullable();
  
    table.foreign(File.TypeId)
      .references(`${FileType.Table}.${FileType.Id}`)
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex) {
  return await knex.schema.dropTable(User.Table);
}