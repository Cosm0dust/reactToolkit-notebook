import './App.css';
import Header from "./components/Header/Header";
import Notes from "./components/Notes/Notes";
import CreateButton from "./components/CreateButton/CreateButton";
import NotesSearch from "./components/NotesSearch/NotesSearch";
import {useState} from "react";
import Modal from "./components/Modal/Modal";
import React from "react";
import NotesField from "./components/Modal/NotesField/NotesField";
import GroupsConfig from "./components/Modal/GroupsConfig/GroupsConfig";
import {useSelector} from "react-redux";
import NotesSelect from "./components/NotesSearch/NoteSelect/NotesSelect";

function App() {
    const groups = useSelector(state => state.notes.groups)
    const [showNotesModal, setShowNotesModal] = useState(false)
    const [showGroupsModal, setShowGroupsModal] = useState(false)
    const [searchQuery, setSearchQuery]= useState('')
    const [filter, setFilter] =useState('All')



    return (
    <div className="App">
        <Header/>
        <NotesSearch
            setShowGroupsModal = {setShowGroupsModal}
            searchQuery = {searchQuery}
            setSearchQuery = {setSearchQuery}
            filter = {filter}
            setFilter = {setFilter}
            groups = {groups}
        />
        <Notes filter={filter}/>
        <CreateButton
            modal = {showNotesModal}
            setModal = {setShowNotesModal}
        />
        <Modal
            modal ={showNotesModal}
            setModal = {setShowNotesModal}
        >
            <NotesField
                setModal={setShowNotesModal}
            />
        </Modal>
        <Modal
            filter={filter}
            setFilter={setFilter}
            modal ={showGroupsModal}
            setModal = {setShowGroupsModal}
        >
            <GroupsConfig
                setModal={setShowGroupsModal}
            />
        </Modal>
    </div>
  );
}

export default App;
