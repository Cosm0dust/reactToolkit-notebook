import React from 'react';
import {useState} from "react";
import styles from './NotesSearch.module.css'
import {useDispatch} from "react-redux";
import {searchNotes} from "../../store/notesSlice";
import NotesSelect from "./NoteSelect/NotesSelect";

const NotesSearch = ({filter,setFilter, searchQuery, setSearchQuery, groups, setShowGroupsModal}) => {


    const dispatch = useDispatch()

    const searchNote = () => {
        dispatch(searchNotes({text: searchQuery, group: filter}))
        setSearchQuery('')
    }


    return (
        <div className={styles.search}>
            <div className={styles.inputs}>
                <div>
                    <input className={styles.textInput} placeholder='Notes search...' value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}/></div>
                <NotesSelect
                    setShowGroupsModal={setShowGroupsModal}
                    filter={filter}
                    setFilter={setFilter}
                    groups={groups}
                />
        </div>
            <div>
                <button className={styles.startSearch} onClick={searchNote}>Search</button>
            </div>
        </div>
    );
};

export default NotesSearch;