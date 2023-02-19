import React from 'react';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createNote} from "../../../store/notesSlice";
import styles from './NotesField.module.css'

const NotesField = ({setModal}) => {
    const [text, setText] = useState('')
    const groups = useSelector(state => state.notes.groups)
    const [selectedFilter, setSelectedFilter] = useState('All')
    const [error, setError]= useState(false)

    const dispatch = useDispatch()

    const makePost = () =>{
        if(text){
            setError(false)
            dispatch(createNote({text: text, group: selectedFilter}))
            setText('')
            setModal(false)
        } else {
            setError(true)
        }

    }



    return (
        <div className={styles.noteCreate}>
            <div className={styles.noteHeader}>Create a note</div>
            <div>{error ? 'no text(': ''}</div>
            <div className={styles.selectArea}>
                <select value={selectedFilter} onChange={e => setSelectedFilter(e.target.value)}>
                <option value="All">All</option>
                {groups.map(group =>
                    <option value={group.group}>{group.group}</option>
                )}
            </select>
                <span className={styles.customArrow}></span>
            </div>

                <textarea className={styles.noteArea} value={text} onChange={(e) => setText(e.target.value)}/>
                <button className={styles.buttonCreate} onClick={makePost}>Add new Note</button>

        </div>
    );
};

export default NotesField;