import {jwtDecode} from "jwt-decode";

interface TokenData {
    user_id:string,
    email : string,
    exp:number;
}
export function getTokenData (token:string){
    try{
        return jwtDecode<TokenData>(token)
    }catch{
        
        return null
    }
}