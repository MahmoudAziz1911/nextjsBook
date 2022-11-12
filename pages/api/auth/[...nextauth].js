import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import User from "../../../api-helpers/model/User";
import verifyPassword from "../../../components/lib/auth";
import connectToDataBase from "../../../components/lib/db";

export default NextAuth ({
    session: {
        jwt: true
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials, req) {
                console.log("credentials", credentials)

                connectToDataBase();
                const email = credentials.email;
                const password = credentials.password;
                const user = await User.findOne({email});
                console.log("user", user)
                if(!user) {
                    throw new Error("You Haven`t registered yet")
                }

                if(user) {
                    return signInUser({password, user})
                } 
            }
        })
    ]
})

 const signInUser = async({password, user}) => {
     console.log("signinuser", user, password)
    if(!password) {
        console.log("Please Enter Password")
    }
    console.log("userpass", user.password)
    const isMatch = await verifyPassword(password, user.password);
    if(!isMatch) {
        console.log("Password not correct")
    }

    return user;
} 