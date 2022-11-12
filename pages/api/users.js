import connectToDataBase from "../../components/lib/db";
import { addUser } from "../../controllers/users-controller";

async function handler(req, res) {
    await connectToDataBase();
    
 if(req.method === "POST"){
        return addUser(req, res)
    }
}
   

export default handler;