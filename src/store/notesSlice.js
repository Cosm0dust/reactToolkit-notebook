import {createSlice} from "@reduxjs/toolkit";


const notesSlice = createSlice({
    name: 'notes',
    initialState:{
        notes: [],
        searchedNotes: [],
        groups: [],
    },
    reducers:{
        createNote(state, action){
            state?.notes.push(
                {
                    id: new Date().toISOString(),
                    text: action.payload.text,
                    group: action.payload.group
                }
            )
            state.searchedNotes = state.notes
        },
        deleteNote(state, action){
            state.notes = state.notes.filter(post => post.id !== action.payload.id)
            state.searchedNotes = state.searchedNotes.filter(post => post.id !== action.payload.id)
        },
        changeNote(state, action){
            const newPost = state.notes.find(post => post.id === action.payload.id);
            const newSearchedPost = state.searchedNotes.find(post => post.id === action.payload.id);
            if(!newPost && !newSearchedPost){
                return
            }
            newPost.text = action.payload.text
            newSearchedPost.text = action.payload.text


        },
        searchNotes(state, action){
            if(action.payload.group === 'All'){
                state.searchedNotes = state.notes.filter(note=>note.text.includes(action.payload.text))
            }
            state.searchedNotes = state.notes.filter(note=> (note.group === action.payload.group) && (note.text.includes(action.payload.text)))
        },

        createGroup(state, action){
            state?.groups.push(
                {
                    id: new Date().toISOString(),
                    group: action.payload.group,
                }
            )
        },
        deleteGroup(state, action){
            state.groups = state.groups.filter(group => group.id !== action.payload.id)
        },
        changeGroup(state, action){
            const newGroup = state.groups.find(group => group.id === action.payload.id);
            if(!newGroup){
                return
            }
            newGroup.group = action.payload.group
        },
    }
})


export const {createNote, deleteNote, changeNote, searchNotes, createGroup, changeGroup, deleteGroup} = notesSlice.actions

export default notesSlice.reducer