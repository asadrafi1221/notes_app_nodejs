import {  check_user , display_login } from "../controller/login_controller.js";
import login_router from "./signup_route.js";

login_router.get('/login',display_login)
.post('/login_user',check_user)

export default login_router;

