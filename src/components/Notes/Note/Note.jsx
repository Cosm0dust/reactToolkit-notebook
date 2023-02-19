import React, {useState} from 'react';
import styles from './Note.module.css';
import {useDispatch} from "react-redux";
import {changeNote, deleteNote} from "../../../store/notesSlice";


const Note = ({text, id, group}) => {
    const [editText, setEditText] = useState('')
    const [isEditing, setIsEditing] = useState(false)

    const dispatch = useDispatch()

    const onChanging = () => {
        setIsEditing(true)
        setEditText(text)
    }


    const changeText = () => {
        dispatch(changeNote({id,text: editText}))
        setIsEditing(false)
        setEditText('')
    }

    

    return (
            <div className={styles.note}>
                <div className={styles.note_exact}>
                    <div className={styles.groupName}>{group}</div>
                    <div  className={styles.buttons}>
                        <button className={styles.e_button} onClick={isEditing ? changeText : onChanging}>
                            {isEditing ? 's' : 'e'}
                        </button>
                        <button className={styles.d_button} onClick={() => dispatch(deleteNote({id}))}>
                            x
                        </button>
                    </div>
                </div>

                <div className={styles.note_text}>
                    {isEditing ? <textarea className={styles.area} value={editText}
                                           onChange={event => setEditText(event.target.value)}/> : text}
                </div>
            </div>


    );
};


export default Note;