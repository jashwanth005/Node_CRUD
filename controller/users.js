import { v4 as uuidv4 } from 'uuid';

let users = [];


export const getAllUsers = (req,res)=>{
    console.log(users);
    res.send(users);

}

export const insertUser = (res,req) =>{
    const userDetails = res.body;
    const user =  uuidv4();
    const userWithId = {...userDetails, id:user};
    users.push(userWithId);
    req.send(`The user as been inserted success ${userDetails.firstName}`)
    
}

export const getUser = (req,res)=>{

    const {id} = req.params;
    const foundUser = users.find((user) => user.id == id);
res.send(foundUser);
}

export const deleteUser = (res,req)=>{

    const { id } = res.params;

    users = users.filter((user)=>  user.id != id);

    req.send(`this user having is ${id} is delected`)

}

export const updateUser = (req,res)=>{

    const {id} = req.params;
    const {firstName, lastName , age} = req.body;

    const user = users.find((user) => user.id == id);

    if(firstName){
        user.firstName  = firstName;
    }
    if(lastName){
        user.lastName  = lastName;
    }
    if(age){
        user.age  = age;
    }

res.send(`This following id is updated from the database ${id}`)


}