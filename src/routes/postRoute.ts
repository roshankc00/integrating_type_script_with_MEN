import express, { Router } from 'express';
import {createNote, deleteNote, getASingleNote, getAllNote, updateNote} from '../controllers/postcontroller';
const router=express.Router()

router.get('/notes',getAllNote)
router.post('/note',createNote)
router.get('/note/:id',getASingleNote)
router.put('/note/:id',updateNote)
router.delete('/note/:id',deleteNote)

export default router 