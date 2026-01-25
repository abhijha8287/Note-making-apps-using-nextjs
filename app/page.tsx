"use client";
import { useEffect, useState } from "react";

type Note = {
  _id: string;
  title: string;
  content: string;
};

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchNotes = async () => {
    const res = await fetch("/api/notes");
    const data = await res.json();
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addNote = async () => {
    if (!title || !content) return alert("Fill all fields");

    setLoading(true);
    await fetch("/api/notes", {
      method: "POST",
      body: JSON.stringify({ title, content }),
    });
    setTitle("");
    setContent("");
    setLoading(false);
    fetchNotes();
  };

  const deleteNote = async (id: string) => {
    await fetch("/api/notes", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    fetchNotes();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto p-6">

        <h1 className="text-4xl font-bold mb-6 text-center">📝 Notes Manager</h1>

        {/* Add Note Card */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Add New Note</h2>

          <input
            className="w-full p-3 mb-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="w-full p-3 mb-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Content"
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <button
            onClick={addNote}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-semibold transition"
          >
            {loading ? "Adding..." : "Add Note"}
          </button>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {notes.map((note) => (
            <div
              key={note._id}
              className="bg-gray-900 p-5 rounded-xl shadow-lg relative"
            >
              <h3 className="text-xl font-bold mb-2">{note.title}</h3>
              <p className="text-gray-300 mb-4 whitespace-pre-wrap">
                {note.content}
              </p>

              <button
                onClick={() => deleteNote(note._id)}
                className="absolute top-3 right-3 text-red-400 hover:text-red-600"
              >
                ✖
              </button>
            </div>
          ))}
        </div>

        {notes.length === 0 && (
          <p className="text-center text-gray-400 mt-10">
            No notes yet. Add your first note ✨
          </p>
        )}
      </div>
    </div>
  );
}
