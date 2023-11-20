import { v4 as uuidv4 } from 'uuid';

import User from '../model/userModel.js';

let users = [];


export const getAllUsers = async(req,res)=>{
    // console.log(users);
    // res.send(users);
    try {

        const  getUser = await User.find();
        console.log(getUser);
        
        res.send(getUser)
        
    } catch (error) {

        res.send("error while getting the data")
        
    }


}

export const insertUser = async(req,res) =>{
    // const userDetails = res.body;
    // const user =  uuidv4();
    // const userWithId = {...userDetails, id:user};
    // users.push(userWithId);
    // req.send(`The user as been inserted success ${userDetails.firstName}`)

    try {
        const userDetails = req.body;
        console.log(userDetails);

        const newUser = new User({
            firstName: userDetails.firstName,
            lastName: userDetails.lastName,
            age:userDetails.age,
            id: uuidv4() 
        });

        await newUser.save();

        res.send(`The user has been inserted successfully: ${newUser.firstName}`);
    } catch (error) {
        res.status(500).send(`Error inserting user: ${error.message}`);
    }
    
    
}

export const getUser = async(req,res)=>{
    try {
        
       const {id} = req.params;
       
        console.log(id);
       // const foundUser = await User.find((user) => user.id == id);

       const  foundUser = await User.findById(id)
        res.send(foundUser);
    
    } catch (error) {

        res.send("Error")
        
    }
}
export const deleteUser = async(res,req)=>{
try {
    const { id } = res.params;

    //const deleteUser = User.findById(id).deleteOne;

//deleteUser.apply();
const deleteUser = await User.findByIdAndDelete(id);
  //  users = users.filter((user)=>  user.id != id);

    req.send(`this user having is ${id} is delected`)
    
} catch (error) {
    res.send("Error while deleteing the data");
}

}

export const updateUser = async(req,res)=>{

    try {
        const {id} = req.params;
        const {firstName, lastName , age} = req.body;
    
        //const user = users.find((user) => user.id == id);
    
        const user = await User.findById(id);
    
        if(firstName){
            user.firstName  = firstName;
        }
        if(lastName){
            user.lastName  = lastName;
        }
        if(age){
            user.age  = age;
        }
    await user.save();
    res.send(`This following id is updated from the database ${id}`)
        
    } catch (error) {

        res.send("Error while upadating")
        
    }


}