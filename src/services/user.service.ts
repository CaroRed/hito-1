import bcrypt from "bcryptjs";
import { UserModel } from "../models/user.model";


const getAllUsers = async () => {
    return await UserModel.findAll();
};

const getUserById = async (id: number) => {
    const user = await UserModel.findOneById(id);
    return user;
};

const getUserByEmail = async (email: string) => {
    const user = await UserModel.findOneByEmail(email);
    return user;
};

const createUserWithEmailAndPassword = async (
    email: string,
    password: string
) => {
    const user = await UserModel.findOneByEmail(email);

    if (user) {
        throw new Error("Email already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(password, salt);

    const newUser = await UserModel.create(email, passwordHashed);

    return newUser;
};

export const userService = {
    getAllUsers,
    getUserById,
    getUserByEmail,
    createUserWithEmailAndPassword
}; 