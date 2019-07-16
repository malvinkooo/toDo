import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        notes: [],
        email: null,
        formMode: "add",
        baseUrl: "https://raysael.herokuapp.com",
    },
    mutations: {
        setNotes(state, notes) {
            state.notes = notes;
        },

        addNote(state, note) {
            state.notes = [...state.notes, note]
        },

        removeNote(state, noteId) {
            state.notes = state.notes.filter(itm => itm._id !== noteId)
        },

        updateNote(state, note) {
            state.notes = state.notes.map(itm => itm.id === note.id ? note : itm)
        },

        addUser(state, email) {
            state.email = email
        },

        deleteUser(state) {
            state.email = null
        },

        setFormMode(state, mode) {
            state.formMode = mode
        },
    },
    actions: {
        addUser(context, email) {
            window.localStorage.setItem("my_email", JSON.stringify(email));
            context.commit("addUser", email);
        },

        deleteUser(context) {
            window.localStorage.removeItem("my_email");
            context.commit("deleteUser");
        },

        setEditFormMode(context) {
            context.commit("setFormMode", "edit")
        },

        setAddFormMode(context) {
            context.commit("setFormMode", "add")
        },

        getNotes(context) {
            return axios({
                    url: "/todo",
                    method: "get",
                    baseURL: context.state.baseUrl,
                    params: {
                        author: context.state.email,
                    },
                })
                .then(response => {
                    context.commit("setNotes", response.data)
                })
        },

        getNote(context, noteId) {
            return axios({
                    url: `/todo/${noteId}`,
                    baseURL: context.state.baseUrl,
                    method: "get",
                    headers: {
                        'content-type': 'application/json'
                    },
                })
        },

        addNote(context, note) {
            note.author = context.state.email;
            return axios({
                    url: "/todo",
                    baseURL: context.state.baseUrl,
                    method: "post",
                    data: note,
                    headers: {
                        'content-type': 'application/json'
                    },
                })
                .then(response => {
                    context.commit("addNote", response.data)
                })
        },

        updateNote(context, note) {
            return axios({
                    url: `/todo/${note.id}`,
                    baseURL: context.state.baseUrl,
                    method: "patch",
                    data: note.note,
                    headers: {
                        'content-type': 'application/json'
                    },
                })
                .then(response => {
                    context.commit("updateNote", note)
                })
        },

        removeNote(context, noteId) {
            return axios({
                    url: `/todo/${noteId}`,
                    baseURL: context.state.baseUrl,
                    method: "delete",
                    headers: {
                        'content-type': 'application/json'
                    },
                })
                .then(response => {
                    context.commit("removeNote", noteId);
                })
        }
    }
})
