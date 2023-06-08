import express, { Router } from 'express';
import {getAllNote} from '../controllers/postcontroller';
const router=express.Router()

router.get('/note',getAllNote)

export default router 