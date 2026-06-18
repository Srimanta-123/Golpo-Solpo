import express from 'express';
import { login } from '../controllers/user.controller.js';
import { register } from '../controllers/user.controller.js';
import { getProfile } from '../controllers/user.controller.js';
import { isAuthenticated } from '../middlewares/auth.middlware.js';
import { logout } from '../controllers/user.controller.js';
import { getOtherUsers } from '../controllers/user.controller.js';

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/get-profile", isAuthenticated, getProfile);
router.post("/logout", isAuthenticated, logout);
router.get("/get-other-users", isAuthenticated, getOtherUsers);


export default router;

