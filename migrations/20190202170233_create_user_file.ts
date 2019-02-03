import * as Knex from "knex";

import { UserFileTable, FileTable, UserTable } from "@enums/tables";


export async function up(knex: Knex) {
  const fileTableId = `${FileTable.Table}.${FileTable.Id}`;
  const userTableId = `${UserTable.Table}.${UserTable.Id}`;
  
  return await knex.schema.createTable(UserFileTable.Table, table => {
    table.uuid(UserFileTable.FileId).notNullable();
    table.uuid(UserFileTable.UserId).notNullable();
    
    table.foreign(UserFileTable.FileId)
      .references(fileTableId)
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  
    table.foreign(UserFileTable.UserId)
      .references(userTableId)
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex) {
  return await knex.schema.dropTable(UserFileTable.Table);
}