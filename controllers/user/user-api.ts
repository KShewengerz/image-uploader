import { Request, Response, NextFunction } from "express";
import * as uuid from "uuid/v4";

import { db } from '../../config/db';

import { UserAccountTable, HttpStatusCode } from '@app/enums';
import { User } from '@app/interfaces';

const snakeCase = require("snakecase-keys");
const camelCase = require("camelcase-keys");


/**
 * @api {post} /user
 * @description Adds new user.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */
export async function addUser(req: Request, res: Response, next: NextFunction): Promise<void> {
  const body = snakeCase(req.body);
  
  body.id  = uuid();
  
  await db(UserAccountTable.Table)
    .insert(body)
    .catch(err => err);
  
  res.sendStatus(HttpStatusCode.CREATED);
}


/**
 * @api {put} /user
 * @description Update user's information.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */
export async function updateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
  const id   = req.params.id;
  const body = snakeCase(req.body);
  
  await db(UserAccountTable.Table)
  .where({ id })
  .update(body)
  .catch(err => err);
  
  res.sendStatus(HttpStatusCode.OK);
}


/**
 * @api {get} /user/:id
 * @description Fetches user's record.
 *
 * @apiParam {Uuid} id
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */
export async function getUser(req: Request, res: Response, next: NextFunction): Promise<void> {
  const id           = req.params.id;
  const fetchUser    = await db(UserAccountTable.Table).where({ id });
  const result: User = camelCase(fetchUser);
  
  res.json(result);
}


