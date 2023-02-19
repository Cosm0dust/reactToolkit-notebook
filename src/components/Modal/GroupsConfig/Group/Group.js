import React from 'react';
import {useDispatch} from "react-redux";
import {changeGroup, changeNote, deleteGroup} from "../../../../store/notesSlice";
import {useState} from "react";
import styles from './Group.module.css'

const Group = ({group, id}) => {
    const [editText, setEditText] = useState('')
    const [isEditing, setIsEditing] = useState(false)

    const dispatch = useDispatch()

    const onChanging = () => {
        setIsEditing(true)
        setEditText(group)
    }

    const changeText = () => {
        dispatch(changeGroup({id,group: editText}))
        setIsEditing(false)
        setEditText('')
    }

    return (
        <div className={styles.group}>
            <div className={styles.groupText}>
                {isEditing ? <input  value={editText} onChange={event => setEditText(event.target.value)}/> :
                    <span>{group}</span>}
            </div>
            <div className={styles.buttons}>
                <button className={styles.e_button} onClick={isEditing ? changeText : onChanging}>{isEditing ? 'S' : 'E'}</button>
                <button className={styles.d_button} onClick={() => dispatch(deleteGroup({id}))}>D</button>
            </div>
        </div>
    );
};

export default Group;