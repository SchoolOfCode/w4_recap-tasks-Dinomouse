import users from "../libs/users.js";

// GET ALL USERS
export function getUsers(req,res) {
    const responseObject = { success: true, payload: users };
    res.json(responseObject);
}

// GET A USER BY ID
export function getUserByID(req, res) {
  const id = Number(req.params.id);
  let idArray = [];
  for (let i = 0; i < users.length; i++) {
    if (id === users[i].id) {
      idArray.push(users[i]);
    }
  }
  const responseObject = { success: true, payload: idArray };

  res.json(responseObject);
}

// CREATE A USER
export function createUser(req, res) {
  const body = req.body;
  users.push(body);
  console.log(users);
  const responseObject = { success: true, payload: users };
  res.json(responseObject);
}

// UPDATE A USER BY ID
export function updateUserByID(req, res) {
  const id = Number(req.params.id);
  const body = req.body;
  for (let i = 0; i < users.length; i++) {
    if (id === users[i].id) {
      users[i] = body;
    }
  }
  const responseObject = { success: true, payload: users };
  res.json(responseObject);
}

// DELETE A USER BY ID
export function deleteUserByID(req, res) {
  const id = Number(req.params.id);
  for (let i = 0; i < users.length; i++) {
    if (id === users[i].id) {
    //   console.log(id);
    //   console.log(i);
      users.splice(i, 1);
    }
  }
  const responseObject = { success: true, payload: users };
  res.json(responseObject);
}
