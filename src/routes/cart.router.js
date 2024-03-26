//Importamos varios
import { Router } from "express";
import { passportCall} from "../utils.js";
import {isUser} from "./auth.router.js";
import { saveCart, getAllCarts, getCartById, updateCart,generatedTicket,deleteCart} from "../controller/cart.controller.js";
import { saveTicket, getTicketById, getTicketByEmail} from "../controller/ticket.controller.js";

//Inicializamos el router
const router = Router();

//Rutas varias usando el controller y el archivo auth.router
//Acceso segun estrategias jwt, obtener todos los carritos
router.get("/", passportCall("jwt"),  getAllCarts);
//Ruta para Acceso segun estrategias jwt, guardar carrito
router.post("/", passportCall("jwt"),  saveCart);
//Ruta para buscamos por id
router.get("/:cid", passportCall("jwt"),  getCartById);
//Ruta para actualizar carrito
router.post("/:cid/product/:pid", passportCall("jwt"),  updateCart);
//Ruta para guardar ticket
//router.post("/:cid/purchase/",passportCall('jwt') ,isUser,saveTicket); error
router.post("/:cid/purchase/", passportCall("jwt"),  generatedTicket);
//Get ticket email
router.get("/:cid/finishpurchase/",passportCall("jwt"),getTicketByEmail);


export default router;
