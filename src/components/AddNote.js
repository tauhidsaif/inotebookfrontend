import React, {useContext, useState} from 'react';
import noteContext from '../context/notes/noteContext';


const AddNote = (props) => {
    const context = useContext(noteContext);
    const { addnote } = context;
    const [note, setNote] = useState({title :"", description : "", tag: ""});

    const handleAddNote = (e) =>{
        e.preventDefault();
        addnote(note.title, note.description, note.tag);
        setNote({title :"", description : "", tag: ""})
        props.showAlert("Note added successfully", 'success')
    }

    const onChange= (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }
    return <div>
        <h2>Add a Note</h2>

        <form onSubmit={handleAddNote}>
            <div className="form-group" className='my-3'>
                <input className="form-control" id="title" required name='title' value={note.title} onChange={onChange} placeholder="Title" />
            </div>

            <div className="form-group" className='my-3'>
                <textarea className="form-control" id="description" value={note.description} name='description' onChange={onChange} required placeholder='Note???' rows="3"></textarea>
            </div>
            <div className="form-group" className='my-3'>
                <input className="form-control" id="tag"  name='tag' value={note.tag} onChange={onChange} placeholder="Tag" />
            </div>
            <button type="button" type='submit' className="btn btn-primary my-2">Add Note</button>

        </form>
    </div>;
};

export default AddNote;
