import connectToDataBase from "../../../components/lib/db";
import { deleteBook, getBookFromId, updateBook } from "../../../controllers/books-controller";


async function handler(req, res) {
    await connectToDataBase();

    if(req.method === "PUT"){
        return updateBook(req, res)
    }else if(req.method === "DELETE") {
        return deleteBook(req, res)
    }else if(req.method === "GET"){
        return getBookFromId(req, res)
    }
}

export default handler;