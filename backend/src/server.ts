import express from 'express';
import mongoose from 'mongoose'
import cors from 'cors';
import bodyParser from 'body-parser'
import threadRouter from './routes/thread.routes';
import messageRouter from './routes/message.routes';
import userRouter from './routes/user.routes';

const app = express();
app.use(cors());
app.use(bodyParser.json());

try {
    mongoose.connect("mongodb://localhost:27017/inbox");
} catch (error) {
    console.log("Mongo connection failed");
}

const connection = mongoose.connection;

connection.once('open', ()=> {
    console.log('MongoDB working')
});

const router = express.Router();

router.use("/threads", threadRouter);
router.use("/messages", messageRouter);
router.use("/users", userRouter);

app.use("/", router);
// app.get('/', (req, res) => res.send('Hello World!'));
app.listen(4000, () => console.log(`Express server running on port 4000`));