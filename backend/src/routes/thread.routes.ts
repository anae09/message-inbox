import express from 'express'
import { ThreadController } from '../controllers/thread.controller';

const threadRouter = express.Router();

threadRouter.post("/createThread", (req, res) => {
    new ThreadController().createThread(req, res);
});

threadRouter.get("/userThreads/:username", (req, res) => {
    new ThreadController().userThreads(req, res);
});

threadRouter.delete("/deleteThread/:_id", (req, res) => {
    new ThreadController().deleteThread(req, res);
});



export default threadRouter;