// src/components/NoteList.tsx

import { Note } from "../types";


interface Props {
  notes: Note[];
  onDelete: (id: string) => void;
  onEdit: (note: Note) => void;
}

const formatDateTime = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleString(); // shows date + time
};

const NoteList = ({ notes, onDelete, onEdit }: Props) => {
  if (notes.length === 0) return <p className="text-center text-gray-500">No notes available.</p>;

  return (
    <div className="grid gap-4 max-w-3xl mx-auto">
      {notes.map((note) => (
        <div key={note._id} className="bg-white shadow rounded p-4">
          <p className="mb-2">{note.content}</p>
          <p className="text-sm text-gray-500 mb-2">
            Created: {formatDateTime(note.createdAt)}
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(note)}
              className="bg-yellow-500 text-white px-3 py-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(note._id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
