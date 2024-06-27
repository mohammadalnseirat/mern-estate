import express from 'express';
import { test } from '../controllers/user.controller.js';

const router= express.Router()

router.get('/test',test)



export default router



// req: the data that take from the client side
// res: the data that take from the server side