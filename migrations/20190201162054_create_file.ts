import * as Knex from "knex";

import { FileTable, FileTypeTable } from "@app/enums";


export async function up(knex: Knex) {
  const fileTypeTableId = `${FileTypeTable.Table}.${FileTypeTable.Id}`;
  
  return await knex.schema.createTable(FileTable.Table, table => {
    table.uuid(FileTable.Id).primary();
    table.string(FileTable.Name, 128).notNullable();
    table.integer(FileTable.TypeId).notNullable();
    table.string(FileTable.ImageUrl).notNullable();
    table.date(FileTable.UploadedOn).notNullable();
  
    table.foreign(FileTable.TypeId)
      .references(fileTypeTableId)
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex) {
  return await knex.schema.dropTable(FileTable.Table);
}