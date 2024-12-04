import { App } from "./app";
import { AuthController } from "./auth/auth.controller";
import { ExceptionFilter } from "./errors/exception.filter";
import { LoggerService } from "./logger/logger.service";

async function bootstrap() {
    const logger = new LoggerService();
    const app = new App(
        logger,
        new AuthController(logger),
        new ExceptionFilter(logger)
    );
    await app.init();
}

bootstrap();