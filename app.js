import express from "express";
import usersRouter from "./routes/users.js"
import {
  getUserByID,
  getUsers,
  createUser,
  updateUserByID,
  deleteUserByID,
} from "./models/users.js";
import users from "./libs/users.js"
const PORT = 3000;
const app = express();

//Middleware to acknowledge receipt of our post request using Postman
app.use( (req,res,next)=> {
  console.log("HTTP Request successful")
  next();
})

//This middleware is utilised only when a body is passed from the client side e.g. in a post,
app.use(express.json());


//Get all users	/users	{ success: true, payload: array of user objects }

app.get("/", (req, res) => {
  console.log("local host accessed")
  res.json("hello");
});


//This code is our router to redirect all client request using "/users"
app.use("/users", usersRouter);








app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
