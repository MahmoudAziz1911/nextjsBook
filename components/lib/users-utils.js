import axios from "axios";

export const createUser = async(data) => {

    const res = await axios.post("http://localhost:3000/api/users", {
        name: data.name,
        email: data.email,
        password: data.password,
        isAdmin: Boolean(data.isAdmin)
    })

    if(res.status !== 200){
        return new Error({message: "Internal Server Error"})
    }
    const resData = await res.data;
    return resData;
}