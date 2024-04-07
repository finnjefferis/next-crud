import Link from 'next/link'
import CreateNote from './CreateNote';
import DeleteButton from './DeleteButton';
async function getNotes() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/crud/records?page=1&perPage=30', {cache: 'no-store'});
    const data = await res.json();
    console.log(data)
    return data?.items as any[];
}



export default async function NotesPage() {
const notes = await getNotes();

return (
    <div>
        <Link href="/">BACK</Link>
       <h1>NOTES</h1>
       <div className="notesGrid"> 
       <div className="note-panel">
       {notes?.map((note) =>{
                return <Note  key={note.id} note={note} />;
            })}
       </div>
    
             <div className="createNoteWrapper"> 
        <CreateNote /> 
      </div>
       </div>
     
    </div>
 )
 

}

function Note({note}: any){
const {id, title, content, created} = note || {};

return(
    <div>
  <Link href={`/notes/${id}`}>
        <div>
            <h2>{title}</h2>
            <h5>{content}</h5>
            <p>{created}</p>
          
        </div>
    </Link>
      <DeleteButton note={note} />
    </div>
  
)

}