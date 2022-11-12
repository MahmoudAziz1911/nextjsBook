import mongoose from "mongoose";

async function connectToDataBase() {
    await mongoose.connect(
        "mongodb+srv://admin:9lMZr1JsvhpY6pJm@cluster0.p3ljqpo.mongodb.net/?retryWrites=true&w=majority"
    ).then(() => console.log("Database Connected"))
        .catch((err) => console.log(err))

}

export default connectToDataBase;


  



