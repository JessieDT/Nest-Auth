import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
    //Use session method:
    // async canActivate(context: ExecutionContext) {
    //     const result = (await super.canActivate(context)) as boolean;
    //     const request = context.switchToHttp().getRequest(); // retrive the request back

    //     await super.logIn(request); // trigger the logIn function 
    //     return result;
    // }
}