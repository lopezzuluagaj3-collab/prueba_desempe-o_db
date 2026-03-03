import { Router } from "express";
import {reqCreateUser, getUsersrReq} from "../controlles/users.controller.js"

export const usersRoutes = Router();

usersRoutes.post('/', reqCreateUser);
usersRoutes.get('/', getUsersrReq)

export default usersRoutes