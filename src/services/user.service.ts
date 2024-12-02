import bcrypt from "bcryptjs";
import { nanoid } from "nanoid"; 
import { UserModel } from "../models/user.model";


const getAllUsers = async () => { 
    const users = await UserModel.readUsers(); 
    return users; 
};

const getUserById = async (id: string) => { 
    const users = await UserModel.readUsers(); 
    const user = users.find((user) => user.id === id); 
    return user; 
};

const getUserByEmail = async (email: string) => { 
    const users = await UserModel.readUsers(); 
    const user = users.find((user) => user.email === email); 
    return user; 
};

const createUserWithEmailAndPassword = async (email:string, password:string) => {
    const users = await getAllUsers();
    const user = users.find(item => item.email === email);
    if(user)
    {
        throw new Error("Email already exists.");
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(password, salt);

    const newUser = {
        id: nanoid(),
        email: email,
        password: passwordHashed
    }

    users.push(newUser)
    await UserModel.writeUsers(users);
    return newUser;
}

export const userService = { 
    getAllUsers, 
    getUserById, 
    getUserByEmail, 
    createUserWithEmailAndPassword
}; 