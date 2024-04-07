'use client'; 
import { useRouter } from 'next/navigation';
export default function DeleteButton({ note }: any) {
    const router = useRouter();
    const handleDelete = async (note:any) => {

        try {
          const response = await fetch(`http://127.0.0.1:8090/api/collections/crud/records/${note.id}`, {
            method: 'DELETE',
          });
    
          if (response.ok) {
            console.log('Note deleted successfully!');
          } else {
            console.error('Error deleting note:', response.statusText);
          }
        } catch (error) {
          console.error('Error deleting note:', error);
        }
        router.refresh();
      };

  return <button onClick={() => handleDelete(note)}>Delete</button>;
}