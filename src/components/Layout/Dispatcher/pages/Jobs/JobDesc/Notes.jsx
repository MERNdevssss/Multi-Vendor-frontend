import React, { useState } from "react";
import { MessageSquare, User, Users, Wrench, Plus } from "lucide-react";

function Notes({ notes }) {
  const [newNote, setNewNote] = useState("");
  const [allNotes, setAllNotes] = useState(notes);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "customer":
        return <User className="h-4 w-4 text-blue-500" />;
      case "internal":
        return <Users className="h-4 w-4 text-green-500" />;
      case "technician":
        return <Wrench className="h-4 w-4 text-orange-500" />;
      default:
        return <MessageSquare className="h-4 w-4 text-gray-500" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "customer":
        return "bg-blue-50 border-blue-200";
      case "internal":
        return "bg-green-50 border-green-200";
      case "technician":
        return "bg-orange-50 border-orange-200";
      default:
        return "bg-gray-50 border-gray-200";
    }
  };

  const getCategoryLabel = (category) => {
    switch (category) {
      case "customer":
        return "Customer Note";
      case "internal":
        return "Internal Note";
      case "technician":
        return "Technician Note";
      default:
        return "Note";
    }
  };

  const handleAddNote = () => {
    if (newNote.trim()) {
      const note = {
        id: Date.now(),
        author: "Dispatch Team",
        timestamp: new Date().toLocaleString(),
        text: newNote.trim(),
        category: "internal"
      };
      setAllNotes([...allNotes, note]);
      setNewNote("");
    }
  };

  return (
    <div>
      <h3 className="font-semibold mb-4">Job Notes</h3>
      
      {/* Existing Notes */}
      <div className="space-y-3 mb-6">
        {allNotes.map((note) => (
          <div key={note.id} className={`p-4 rounded-lg border ${getCategoryColor(note.category)}`}>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-0.5">
                {getCategoryIcon(note.category)}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-900">{note.author}</span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      note.category === "customer" ? "bg-blue-100 text-blue-700" :
                      note.category === "internal" ? "bg-green-100 text-green-700" :
                      "bg-orange-100 text-orange-700"
                    }`}>
                      {getCategoryLabel(note.category)}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">{note.timestamp}</span>
                </div>
                <p className="text-sm text-gray-800">{note.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Note */}
      <div className="border-t pt-4">
        <h4 className="font-medium mb-3">Add New Note</h4>
        <div className="space-y-3">
          <textarea
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Enter your note here..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            rows={3}
          />
          <div className="flex justify-end">
            <button
              onClick={handleAddNote}
              disabled={!newNote.trim()}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              <Plus className="h-4 w-4" />
              <span>Add Note</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notes;