import express from 'express';
import {
  createNote,
  getAllNotes,
  updateNote,
  deleteNote
} from '../controllers/noteController';

const router = express.Router();

// @route   POST /api/notes
// @desc    Create a new note
router.post('/', createNote);

// @route   GET /api/notes
// @desc    Get all notes
router.get('/', getAllNotes);

// @route   PUT /api/notes/:id
// @desc    Update a note by ID
router.put('/:id', updateNote);

// @route   DELETE /api/notes/:id
// @desc    Delete a note by ID
router.delete('/:id', deleteNote);

export default router;
