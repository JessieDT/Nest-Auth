// this file represent the strategy which installed from passport-local
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

// from nestjs perspective it will be a provide
// hence make it injectable
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    // here is where to use the AuthService
    constructor(private authService: AuthService) {
        super(); // config
    }

    async validate(username: string, password: string): Promise<any> {
        const user = await this.authService.validateUser(username, password);

        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
        // the user is usually end up in the request object
    }
}