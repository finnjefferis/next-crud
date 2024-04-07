'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function UpdateNote({ note }) { 
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://127.0.0.1:8090/api/collections/crud/records/${note.id}`, {
        method: 'PATCH', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      });

      if (response.ok) {
        console.log('Note updated successfully!');
     
      } else {
        console.error('Error updating note:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating note:', error);
    }
    router.refresh()
  };

  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="note-title">Title:</label>
      <input 
        type="text" 
        id="note-title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
    </div>

    <div>
      <label htmlFor="note-content">Content:</label>
      <textarea
        id="note-content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </div>

    <button type="submit">Update Note</button>
  </form>
  );
}
