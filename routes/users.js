import express from "express";

import { getUser,getAllUsers,updateUser,deleteUser,insertUser } from "../controller/users.js";

const router = express.Router();

router.get('/',getAllUsers);

router.post('/',insertUser);

router.get('/:id',getUser);

router.delete('/:id',deleteUser)

router.patch('/:id',updateUser)

export default router;