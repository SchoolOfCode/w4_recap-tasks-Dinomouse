import users from "../libs/users.js";
import express from "express";
import { getUsers, getUserByID, createUser, updateUserByID, deleteUserByID} from "../models/users.js";
const router = express.Router()



router.get("/", getUsers);

// Get user by id	/users/<id>	{ success: true, payload: user object }
// write a for loop to match the client id requested with the element in the array of users with that id;
// create an empty array and push the element to this array when they match

router.get("/:id", getUserByID);

//set up router to accept post requests and returns the newly created user object
//Create new user	/users	{ success: true, payload: newly created user object }

router.post("/", createUser)


//Update user by id	/users/<id>	{ success: true, payload: new user object (after replacement) }
//create a put request to update an id e.g. update id 50 and replace with example
// Use our users array and replace the element using the id provided with the body provided

router.put("/:id", updateUserByID)


// Delete user by id	/users/<id>	{ success: true, payload: deleted user }
// Create a new router using the id provided from client (no body required)
    //use splice array method to remove element using the client provided id to match the id in users array
//use a for loop to find the index in the array that matches the id
//use the value of i when the id matches the id in the array and use it with the splice method

router.delete("/:id", deleteUserByID)

export default router; 