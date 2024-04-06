'use client';

import { useState } from 'react';
import styles from "./createnote.module.css";

export default function CreateNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const create = async() => {
    await fetch('http://127.0.0.1:8090/api/collections/crud/records', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
        })
    });
 
  }

  return (
    <div>

   
    <h1>CREATE NOTE</h1>
    <form className={styles.form} onSubmit={create}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        placeholder="Take a note..."
        value={content}
        onChange={handleContentChange}
      />
        <button type="submit">Save Note</button> 
    </form>
    </div>
  );
}
