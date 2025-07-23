// src/components/NoteForm.tsx
import React, { useEffect, useState } from 'react';
import { Note } from '../types';

interface NoteFormProps {
  onSave: (note: Omit<Note, '_id' | 'createdAt'>) => void;
  selectedNote: Note | null;
}

const NoteForm: React.FC<NoteFormProps> = ({ onSave, selectedNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title);
      setContent(selectedNote.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [selectedNote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-start mb-4">
      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 border rounded w-1/4"
        required
      />
      <textarea
        placeholder="Write your note here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="p-2 border rounded w-2/4"
        required
      />
      <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">
        {selectedNote ? 'Update' : 'Add Note'}
      </button>
    </form>
  );
};

export default NoteForm;
