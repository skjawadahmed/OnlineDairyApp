import React, { useState, useEffect } from 'react';

interface AddNoteProps {
  onAdd: (title: string, content: string) => void;
  title: string;
  content: string;
}

const AddNote: React.FC<AddNoteProps> = ({ onAdd, title, content }) => {
  const [noteTitle, setNoteTitle] = useState(title);
  const [noteContent, setNoteContent] = useState(content);

  useEffect(() => {
    setNoteTitle(title);
    setNoteContent(content);
  }, [title, content]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noteTitle.trim() || !noteContent.trim()) return;
    onAdd(noteTitle.trim(), noteContent.trim());
    setNoteTitle('');
    setNoteContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
        <input
          type="text"
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
          placeholder="Enter note title"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
        <textarea
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          rows={4}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
          placeholder="Write your thoughts here..."
        ></textarea>
      </div>

      <div className="text-right">
        <button
          type="submit"
          className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md transition duration-300"
        >
          {title || content ? 'Update Note' : 'Add Note'}
        </button>
      </div>
    </form>
  );
};

export default AddNote;
