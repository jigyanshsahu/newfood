    import express from "express"
    import { addtocart,removefromcart,getcart } from '../controllers/cartcontroller.js'
    import authMiddleware from "../middleware/auth.js";
    const cartRouter = express.Router();
    

    cartRouter.post("/add",authMiddleware,addtocart)
    cartRouter.post("/get",authMiddleware,getcart)
    cartRouter.post("/remove",authMiddleware,removefromcart)

    export default cartRouter;