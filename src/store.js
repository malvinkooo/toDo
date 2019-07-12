import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        notes: [],
        email: null,
    },
    mutations: {
        addNote(state, note) {
            state.notes.unshift(note)
        },

        removeNote(state, noteId) {
            state.notes = state.notes.filter(itm => itm.id !== noteId)
        },

        updateNote(state, note) {
            state.notes = state.notes.map(itm => itm.id === note.id ? note : itm)
        },

        addUser(state, email) {
            window.localStorage.setItem("my_email", JSON.stringify(email));
            state.email = email;
        },

        deleteUser(state) {
            window.localStorage.removeItem("my_email");
            state.email = null;
        }
    },
    actions: {

    }
})
