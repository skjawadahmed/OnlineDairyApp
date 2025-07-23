// src/components/NoteCard.tsx
import React from 'react';
import { Note } from '../types';

interface NoteCardProps {
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (id: string) => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ note, onEdit, onDelete }) => {
  return (
    <div className="border rounded p-4 shadow-md bg-white">
      <h2 className="text-xl font-bold mb-2">{note.title}</h2>
      <p className="text-gray-600 text-sm mb-2">{new Date(note.createdAt).toLocaleString()}</p>
      <p className="mb-4">{note.content}</p>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(note)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(note._id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
