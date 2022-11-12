import User from "../api-helpers/model/User";
import { hashPassword } from "../components/lib/auth";

export const addUser = async (req, res) => {
    const data = req.body;
    const { name, email, password, isAdmin } = data;

    if (
        !name || name.trim() === "",
        !email || !email.includes("@"),
        !password || password.trim().length  < 7
    ) {
        res.status(422).json({ message: "Invalid Input - password must be more than 7" })
    }

    const checkExisting = await User.findOne({ email: email });
    if (checkExisting) {
        res.status(422).json({ message: 'User already exists' });
        return;
    }

    const hashedPassword = await hashPassword(password)

    let user;
    try {
        user = new User({ name, email, password: hashedPassword, isAdmin });
        user = await user.save();
    } catch (error) {
        return new Error(error);
    }

    if (!user) {
        return res.status(500).json({ message: "internal server Error" })
    }
    return res.status(201).json({ message: "Created User Successfully !" })
}
