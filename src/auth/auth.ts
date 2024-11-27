import express from 'express';

const authRouter = express.Router();

authRouter.post('/login', (req, res) => {
    res.send('Login');
})

authRouter.post('/register', (req, res) => {
    res.send('register');
})



export { authRouter };