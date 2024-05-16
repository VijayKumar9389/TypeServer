import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;
const prisma = new PrismaClient();

app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});

app.get('/user', async (req: Request, res: Response) => {
    try {
        // Fetch user data from the database
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
