import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import placesRouter from './routes/placesRoutes.js';
import periodRouter from './routes/periodsRoute.js';
import costumesRouter from './routes/costumesRoute.js';
import authRouter from './routes/authRoutes.js';
import commentsRouter from './routes/commentsRoute.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { createServer } from 'http';
import { Server } from 'socket.io';
dotenv.config();

const app = express();
const httpServer = createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:19006"
    }
});

io.on("connection", socket => {
    console.log("user connected");
    socket.on('sendMessage', (msg) => {
        console.log("message emited by socket: ", msg);
        io.emit('sendMessage', msg);
    });
    socket.on('requireAttention', () => {
        io.emit('requireAttention');
    });
});

const port = process.env.PORT || 3000;

httpServer.listen(port, () =>{
    console.log(`Listening on ${port}`);
});

app.use('/', placesRouter);
app.use('/', periodRouter);
app.use('/', costumesRouter);
app.use('/', authRouter);
app.use('/', commentsRouter);

mongoose.connect(process.env.DB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
 })
 .then(()=> {console.log('Connected to the database.')
 })
 .catch((err)=>{console.log('Failed to connect to Database error:' + err)
 });