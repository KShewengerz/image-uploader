"use strict";

import { Router } from "express";

import { api } from "./-index";

const router: Router = Router();


/**
 * @description Adds new user
 */
router.post("/", api.addUser);


/**
 * @description Update's user information.
 */
router.put("/", api.updateUser);

/**
 * @description Get All Users
 */
router.get("/", api.getUsers);


/**
 * @description Get user by id
 * @apiParam {Uuid} userId
 */
router.get("/:id", api.getUser);


/**
 * @description Deletes user record by id
 * @apiParam {Uuid} userId
 */
router.delete("/:id", api.deleteUser);


/**
 * @description Holds user controllers routes
 * @type {Router} userRoutes
 */
export const userRoutes: Router = router;