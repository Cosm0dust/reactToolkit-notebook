import React, {useState} from 'react';
import styles from './Notes.module.css';

import {useDispatch, useSelector} from "react-redux";
import Note from "./Note/Note";

const Notes = ({filter}) => {


    const notes = useSelector(state =>state.notes.searchedNotes)


    return (

        <div className={styles.notes}>
            {
                notes.map(note =>
                    <Note
                    key={note.id}
                    text={note.text}
                    id={note.id}
                    group = {note.group}
                    />
                ).reverse()
            }
            <div>



            </div>
        </div>
    );
};

export default Notes;