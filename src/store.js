import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        notes: [
            {
                id: 1,
                title: 'title 1',
                text: 'text 1'
            },
            {
                id: 2,
                title: 'title 2',
                text: 'text 2'
            },
            {
                id: 3,
                title: 'title 3',
                text: 'text 3'
            }
        ],
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
    },
    actions: {

    }
})
