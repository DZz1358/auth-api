import express, { Express } from 'express'
import { Server } from 'http';
import { authRouter } from './auth/auth';
import { LoggerService } from './logger/logger.service';

export class App {
    app: Express;
    server: Server;
    port: number;
    logger: LoggerService

    constructor(
        loggerService: LoggerService
    ) {
        this.app = express();
        this.port = 5000;
        this.logger = loggerService
    }

    useRoutes() {
        this.app.use('/auth', authRouter)
    }


    public async init() {
        await this.useRoutes();
        this.app.listen(this.port)

        this.logger.log(`Server is running on port ${this.port}`)
    }
}