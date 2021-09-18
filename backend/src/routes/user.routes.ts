import express from 'express'
import { UserController } from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.get("/allUsers", (req, res) => {
    new UserController().allUsers(req, res);
});

userRouter.post("/login", (req, res) => {
    new UserController().login(req, res);
});


export default userRouter;