import { Router } from 'express';
import {isConnected, isDisconnected, isAdmin} from "../middlewares/middlewares.js";
import { addMessage, getMessages} from "../controllers/views.controller.js"

const router = Router();





router.post("/chat/:user/:message", addMessage)

router.get("/chat", getMessages)

router.get('/register', isConnected, (req, res) => {
    res.render('register');
})

router.get('/login',isConnected, (req, res) => {
    res.render('login');
})

router.get('/', isDisconnected, isAdmin, (req, res) => {
    res.render('profile', {
        user: req.session.user
    });
})



export default router;