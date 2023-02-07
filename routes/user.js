import { Router } from "express";
import { userDELETE,
        userGET,
        userPOST,
        userPUT } 
  from "../controllers/user.js";


const router = Router();

router.get('/', userGET );

router.put('/:id', userPUT );

router.post('/', userPOST );

router.delete('/', userDELETE );

export default router


