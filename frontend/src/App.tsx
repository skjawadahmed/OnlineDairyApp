import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Note } from './types';

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editId, setEditId] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'week' | 'month' | 'year'>('all');

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const res = await axios.get('http://localhost:5000/api/notes');
    const sorted = res.data.sort(
      (a: Note, b: Note) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    setNotes(sorted);
  };

  const addNote = async () => {
    if (!title || !content) return alert('Please enter title and content');
    const res = await axios.post('http://localhost:5000/api/notes', { title, content });
    setNotes([res.data, ...notes]);
    setTitle('');
    setContent('');
  };

  const deleteNote = async (id: string) => {
    await axios.delete(`http://localhost:5000/api/notes/${id}`);
    setNotes(notes.filter(note => note._id !== id));
  };

  const editNote = (note: Note) => {
    setEditId(note._id);
    setTitle(note.title);
    setContent(note.content);
  };

  const updateNote = async () => {
    if (!editId) return;
    const res = await axios.put(`http://localhost:5000/api/notes/${editId}`, { title, content });
    setNotes(notes.map(note => (note._id === editId ? res.data : note)));
    setEditId(null);
    setTitle('');
    setContent('');
  };

  const filteredNotes = notes.filter(note => {
    const now = new Date();
    const created = new Date(note.createdAt);

    switch (filter) {
      case 'week':
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(now.getDate() - 7);
        return created >= oneWeekAgo;
      case 'month':
        return created.getMonth() === now.getMonth() && created.getFullYear() === now.getFullYear();
      case 'year':
        return created.getFullYear() === now.getFullYear();
      default:
        return true;
    }
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-indigo-600 flex items-center justify-center gap-2">
        📝 My Online Diary
      </h1>

      {/* Note Input Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Note Title"
          className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Write your note here..."
          className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {editId ? (
          <button
            onClick={updateNote}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Update
          </button>
        ) : (
          <button
            onClick={addNote}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add Note
          </button>
        )}
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-6 justify-center">
        <button onClick={() => setFilter('all')} className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded">
          All
        </button>
        <button onClick={() => setFilter('week')} className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded">
          This Week
        </button>
        <button onClick={() => setFilter('month')} className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded">
          This Month
        </button>
        <button onClick={() => setFilter('year')} className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded">
          This Year
        </button>
      </div>

      {/* Notes Display */}
      {filteredNotes.length === 0 ? (
        <p className="text-center text-gray-500">No notes available for selected filter.</p>
      ) : (
        filteredNotes.map(note => (
          <div key={note._id} className="bg-white border border-gray-200 p-4 rounded-xl shadow-md mb-4 transition hover:shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800">{note.title}</h2>
            <p className="text-sm text-gray-500">{new Date(note.createdAt).toLocaleString()}</p>
            <p className="mt-2 text-gray-700">{note.content}</p>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => editNote(note)}
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => deleteNote(note._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default App;
