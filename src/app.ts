import express, { Express } from 'express'
import { Server } from 'http';
import { authRouter } from './auth/auth';

export class App {
    app: Express;
    server: Server;
    port: number;

    constructor() {
        this.app = express();
        this.port = 5000;
    }

    useRoutes() {
        this.app.use('/auth', authRouter)
    }


    public async init() {
        await this.useRoutes();
        this.app.listen(this.port)
        console.log(`Server is running on port ${this.port}`);
    }
}