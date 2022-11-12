import { hash, compare } from 'bcryptjs';

export async function hashPassword(password){
    const hashedPassword = await hash(password, 10)
    return hashedPassword;
}

export async function verifyPassword(password, hashedPassword){
    const isValid = await compare(password, hashedPassword).then(res => {console.log("hashPass", res)});
    return isValid;
}