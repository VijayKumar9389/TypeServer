import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import {PrismaClient, User} from '@prisma/client';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;
const prisma = new PrismaClient();

app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});

app.get('/user', async (req: Request, res: Response) => {

    const user: User = {id: 1, name: 'Alice'};
    res.send(user);
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
