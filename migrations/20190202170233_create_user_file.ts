import * as Knex from "knex";

import { UserFile, File, User } from "../shared/enums/-index";


export async function up(knex: Knex) {
  const fileTableId = `${File.Table}.${File.Id}`;
  const userTableId = `${User.Table}.${User.Id}`;
  
  return await knex.schema.createTable(UserFile.Table, table => {
    table.uuid(UserFile.FileId).notNullable();
    table.uuid(UserFile.UserId).notNullable();
    
    table.foreign(UserFile.FileId)
      .references(fileTableId)
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  
    table.foreign(UserFile.UserId)
      .references(userTableId)
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex) {
  return await knex.schema.dropTable(UserFile.Table);
}