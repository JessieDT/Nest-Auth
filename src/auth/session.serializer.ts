import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";

@Injectable()
export class SessionSerializer extends PassportSerializer {
    // before go into the session 
    // need to serialize the user object 
    serializeUser(user: any, done: (err: Error, user: any) => void): any {
        // done(null, {id: user.id});
        done(null, user);
    }

    // before go out of the session
    deserializeUser(payload: any, done: (err: Error, payload: string) => void): any{
        // const user = this.userService.findById(payload.id)
        done(null, payload);
    }
}