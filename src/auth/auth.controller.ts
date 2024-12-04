import { Response, NextFunction, Request } from "express";
import { BaseController } from "../common/base.controller";
import { LoggerService } from "../logger/logger.service";
import { HTTPError } from "../errors/http-error.class";

export class AuthController extends BaseController {

    constructor(
        logger: LoggerService
    ) {
        super(logger);
        this.bindRoutes([
            {
                path: '/login',
                method: 'post',
                func: this.login
            },
            {
                path: '/register',
                method: 'post',
                func: this.register
            }
        ])
    }

    login(req: Request, res: Response, next: NextFunction) {
        next(new HTTPError(401, 'auth error'));
    }


    register(req: Request, res: Response, next: NextFunction) {
        res.status(200).json({ message: 'register' })
    }
}