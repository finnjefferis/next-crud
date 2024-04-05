import Link from 'next/link'

async function getNote(noteId:string) {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/crud/records/${noteId}`);
    const data = await res.json();
    console.log(data)
    return data
}

export default async function NotesPage({params}:any) {
const notes = await getNote(params.id);

return(
    <div>
        <a href="/notes">BACK</a>
    <h1>notes/{notes.id}</h1>
    <h3>{notes.title}</h3>
    <h5>{notes.content}</h5>
    <p>{notes.created}</p>
     
    </div>
)

}

