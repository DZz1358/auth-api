import express, { Express } from 'express'
import { Server } from 'http';
// import { authRouter } from './auth/auth';
import { LoggerService } from './logger/logger.service';
import { AuthController } from './auth/auth.controller';

export class App {
    app: Express;
    server: Server;
    port: number;
    logger: LoggerService;
    authController: AuthController


    constructor(
        loggerService: LoggerService,
        authController: AuthController
    ) {
        this.app = express();
        this.port = 5000;
        this.logger = loggerService
        this.authController = authController
    }

    useRoutes() {
        this.app.use('/auth', this.authController.router)
    }


    public async init() {
        await this.useRoutes();
        this.app.listen(this.port)

        this.logger.log(`Server is running on port ${this.port}`)
    }
}