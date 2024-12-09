import {Router} from 'express'

const router = Router();

router.post('/signin', (req, res) => res.send("Signing in..."));
router.post('/signup', (req, res) => res.send("Signing up..."));
router.post('/logout', (req, res) => res.send("Logging out..."));
router.get('/profile', (req, res) => res.send("User profile..."));


export default router;
