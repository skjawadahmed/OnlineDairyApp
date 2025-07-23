import React, { useEffect, useState } from 'react';
import FilterButtons from '../components/FilterButtons';

interface Note {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
}

const Home: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [filteredNotes, setFilteredNotes] = useState<Note[]>([]);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    fetchNotes();
  }, []);

  useEffect(() => {
    applyFilter();
  }, [filter, notes]);

  const fetchNotes = async () => {
    const res = await fetch('http://localhost:5000/api/notes');
    const data = await res.json();
    setNotes(data);
  };

  const applyFilter = () => {
    const now = new Date();

    const filtered = notes.filter((note) => {
      const noteDate = new Date(note.createdAt);

      switch (filter) {
        case 'week':
          const oneWeekAgo = new Date(now);
          oneWeekAgo.setDate(now.getDate() - 7);
          return noteDate >= oneWeekAgo;
        case 'month':
          const oneMonthAgo = new Date(now);
          oneMonthAgo.setMonth(now.getMonth() - 1);
          return noteDate >= oneMonthAgo;
        case 'year':
          const oneYearAgo = new Date(now);
          oneYearAgo.setFullYear(now.getFullYear() - 1);
          return noteDate >= oneYearAgo;
        default:
          return true;
      }
    });

    setFilteredNotes(filtered);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Online Diary</h1>
      <FilterButtons onFilterChange={setFilter} />

      {filteredNotes.map((note) => (
        <div key={note._id} className="bg-white p-4 shadow rounded mb-4">
          <h2 className="font-bold text-lg">{note.title}</h2>
          <p className="text-sm text-gray-500">
            {new Date(note.createdAt).toLocaleString()}
          </p>
          <p className="mt-2">{note.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
