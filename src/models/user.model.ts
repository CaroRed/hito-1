import { readFile, writeFile } from "node:fs/promises"; 
import path from "node:path"; 
import { User } from "../interfaces/user.interface";

const __dirname = import.meta.dirname; 
const filePath = path.resolve(__dirname, "../../data/users.json"); 

const readUsers = async () => { 
    const usersJSON = await readFile(filePath, "utf-8"); 
    return JSON.parse(usersJSON) as User[]; 
  }; 
   
  const writeUsers = async (users: User[]) => { 
    const usersJSON = JSON.stringify(users, null, 2); 
    return await writeFile(filePath, usersJSON); 
  }; 
   
  export const UserModel = { 
    readUsers, 
    writeUsers, 
  }; 
