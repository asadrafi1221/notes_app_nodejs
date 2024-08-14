import { signup_user , display_signup } from "../controller/signup_controller.js";
import {Router} from "express";

const signup_router = Router();
signup_router.
get('/signup',display_signup)
.post('/signup_auth',signup_user)

export default signup_router;