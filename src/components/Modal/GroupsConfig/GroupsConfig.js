import React from 'react';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import styles from './GroupsConfig.module.css'
import {createGroup} from "../../../store/notesSlice";
import Group from "./Group/Group";

const GroupsConfig = ({setModal}) => {
    const [text, setText] = useState('')
    const [error, setError] =useState(false)

    const groups = useSelector(state => state.notes.groups)


    const dispatch = useDispatch()

    const makeGroup = () =>{
        if(text && text.length< 9){
            dispatch(createGroup({group: text}))
            setText('')
            setError(false)
        } else {
            setError(true)
        }
    }

    return (
        <div className={styles.groupsField}>
            <div className={styles.groupsHeader}>Groups Configuration</div>
            <div className={styles.groupsInputs}>
                <input value={text} onChange={(e) => setText(e.target.value)}/>
                <button onClick={makeGroup}>Add</button>
            </div>
            <div>{error ? 'No group name or too long definition': ''}</div>
            <div className={styles.groupsList}>
                {groups.map((group)=>
                    <Group
                    group = {group.group}
                    id = {group.id}
                    key = {group.id}
                    />
                ).reverse()}
            </div>
        </div>
    );
};

export default GroupsConfig;