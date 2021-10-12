import { CanActivate, ExecutionContext } from "@nestjs/common";

export class AuthenticatedGuard implements CanActivate {
    async canActivate(context: ExecutionContext) {
        // grab the request from context
        const request = context.switchToHttp().getRequest();

        // check authenticated
        return request.isAuthenticated();
        // come from passport automatically 
        // try look for in that session to check does this session contain this user
        // if so return true and allow the request going down 
    }
}