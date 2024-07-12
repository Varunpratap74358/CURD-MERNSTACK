import express from 'express'
import { create, deleteuser, getAll, getOne, update } from '../controler/usercontroler.js';

const route = express.Router();

route.post("/create",create);
route.get("/getall",getAll);
route.get("/getone/:id",getOne);
route.put("/update/:id",update)
route.delete("/delete/:id",deleteuser)


export default route