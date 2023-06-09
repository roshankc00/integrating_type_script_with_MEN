import express, { Router } from 'express';
import {createNote, deleteNote, getASingleNote, getAllNote, updateNote} from '../controllers/postcontroller';
import { authMiddleware } from '../middlewares/checkAuth';
const router=express.Router()

router.get('/notes',authMiddleware,getAllNote)
router.post('/note',authMiddleware,createNote)
router.get('/note/:id',authMiddleware, getASingleNote)
router.put('/note/:id',authMiddleware, updateNote)
router.delete('/note/:id',authMiddleware,deleteNote)

export default router 