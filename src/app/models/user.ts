import { UserStatus } from "../utils/Enums/status";

export class User {
    first_name : string;
    last_name : string;
    email : string;
    password : string;
    organisation? : string;
    status : UserStatus;
    
    constructor( firstName : string, lastName : string, email : string, password : string, oragnizationName? : string){
        this.first_name = firstName
        this.last_name = lastName
        this.email = email
        this.password = password
        this.organisation = oragnizationName
        this.status = UserStatus.CLIENT
    }

}