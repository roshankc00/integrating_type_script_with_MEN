import express, { Router } from 'express';
import {createNote, getASingleNote, getAllNote} from '../controllers/postcontroller';
const router=express.Router()

router.get('/notes',getAllNote)
router.post('/note',createNote)
router.get('/note/:id',getASingleNote)

export default router 