import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import User from "../../../api-helpers/model/User";
import { verifyPassword } from "../../../components/lib/auth";
import connectToDataBase from "../../../components/lib/db";

export default NextAuth({
    session: {
        jwt: true
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials, req) {
                connectToDataBase();
                const { email, password } = credentials;
                const user = await User.findOne({ email });
                if (user) {
                    return signInUser({ password, user })
                } else {
                    throw new Error("You Haven`t registered yet")
                }
            }
        })
    ]
})

const signInUser = async ({ password, user }) => {
    if (!password) {
        throw new Error("Please Enter Password")
    } else {
        const isMatch = await verifyPassword(password, user.password);
        if (!isMatch) {
            throw new Error("Password not correct")
        }
    }
    return user;
} 