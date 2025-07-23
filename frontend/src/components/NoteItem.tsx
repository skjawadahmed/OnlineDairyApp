import React from "react";

import { Note } from "../types";


interface NoteItemProps {
  note: Note;
  onDelete: (id: string) => void;
  onEdit: (note: Note) => void;
}

const NoteItem: React.FC<NoteItemProps> = ({ note, onDelete, onEdit }) => {
  const formattedDate = new Date(note.createdAt).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <div className="bg-white rounded-xl shadow-md p-5 border border-gray-200 hover:shadow-lg transition-all duration-300">
      <h2 className="text-xl font-semibold text-indigo-700">{note.title}</h2>
      <p className="text-gray-700 mt-2 whitespace-pre-wrap">{note.content}</p>
      <p className="text-sm text-gray-400 mt-2">📅 {formattedDate}</p>
      <div className="mt-4 flex gap-3">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={() => onEdit(note)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          onClick={() => onDelete(note._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
