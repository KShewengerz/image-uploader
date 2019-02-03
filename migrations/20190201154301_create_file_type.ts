import * as Knex from "knex";

import { FileTypeTable } from "@enums/tables";
import { FileType } from '@interfaces/common';


export async function up(knex: Knex) {
  return await knex.schema.createTable(FileTypeTable.Table, table => {
    table.integer(FileTypeTable.Id).primary();
    table.string(FileTypeTable.Name).notNullable();
  })
  .then(async () => {
    const types: FileType[] = [
      { id: 1, name: 'photo' },
      { id: 2, name: 'video' }
    ];
    
    return await knex(FileTypeTable.Table).insert(types);
  });
}

export async function down(knex: Knex) {
  return await knex.schema.dropTable(FileTypeTable.Table);
}