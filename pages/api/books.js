import connectToDataBase from "../../components/lib/db";
import { AddBook, getAllBooks } from "../../controllers/books-controller";

async function handler(req, res) {
    await connectToDataBase();

    if(req.method === "GET"){
        return getAllBooks(req, res)
    }else if(req.method === "POST") {
        return AddBook(req, res)
    }
}

export default handler;