import { Request, Response, NextFunction } from "express";


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
  res.json("Successfully Added User");
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
  res.json("Successfully Updated User");
}


/**
 * @api {get} /user
 * @description Fetches all users.
 *
 * @apiParam {Uuid} id
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */
export async function getUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
  res.json("Successfully Get Users");
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
  res.json("Successfully Get User Info");
}


/**
 * @api {delete} /user/:id
 * @description Deletes user record by id.
 *
 * @apiParam {Uuid} id
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */
export async function deleteUser(req: Request, res: Response, next: NextFunction): Promise<void> {
  res.json("Successfully Deleted User");
}

