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
router.put("/:id", api.updateUser);


/**
 * @description Get user by id
 * @apiParam {Uuid} userId
 */
router.get("/:id", api.getUser);


/**
 * @description Holds user controllers routes
 * @type {Router} userRoutes
 */
export const userRoutes: Router = router;