import { Router } from "express";
import {reqCreateUser, getUsersrReq, deleteUsersReq, updateUserReq} from "../controlles/users.controller.js"

export const usersRoutes = Router();

usersRoutes.post('/', reqCreateUser);
usersRoutes.get('/', getUsersrReq);
usersRoutes.delete('/:id', deleteUsersReq);
usersRoutes.put('/:id', updateUserReq);

export default usersRoutes