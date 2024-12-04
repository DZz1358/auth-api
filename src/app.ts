import express, { Express } from 'express'
import { Server } from 'http';
import { LoggerService } from './logger/logger.service';
import { AuthController } from './auth/auth.controller';
import { ExceptionFilter } from './errors/exception.filter';

export class App {
    app: Express;
    server: Server;
    port: number;
    logger: LoggerService;
    authController: AuthController
    exceptionFilter: ExceptionFilter


    constructor(
        loggerService: LoggerService,
        authController: AuthController,
        exceptionFilter: ExceptionFilter
    ) {
        this.app = express();
        this.port = 5000;
        this.logger = loggerService
        this.authController = authController
        this.exceptionFilter = exceptionFilter
    }

    useRoutes() {
        this.app.use('/auth', this.authController.router)
    }

    useExceptionFilters() {
        this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter))
    }


    public async init() {
        await this.useRoutes();
        await this.useExceptionFilters();
        this.app.listen(this.port)

        this.logger.log(`Server is running on port ${this.port}`)
    }
}