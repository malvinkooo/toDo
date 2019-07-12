<template>
    <div class="form-box">
        <h6 class="title">Добавить новую заметку</h6>

        <form class="form" @submit.prevent="formSubmit">
            <Input
                label="Заголовок"
                type="text"
                v-bind:value.sync="note.title"
                :errorMessage="titleErrorMessage"
            />
            <Input
                label="Текст"
                type="multiline"
                v-bind:value.sync="note.text"
                :errorMessage="textErrorMessage"
            />

            <input type="submit" class="btn -big" value="Добавить" />
        </form>
    </div>
</template>

<script>
import Input from "@/components/input.vue"

export default {
    data() {
        return {
            titleErrorMessage: null,
            textErrorMessage: null
        };
    },

    components: {
        Input
    },

    props: ["noteData"],

    computed: {
        note() {
            return this.noteData
                ? this.noteData
                : {
                      id: 0,
                      title: "",
                      text: ""
                  };
        }
    },

    methods: {
        formSubmit() {
            const note = {
                title: this.note.title,
                text: this.note.text
            };

            if (this.isFormValid()) {
                if (this.noteData) {
                    note.id = this.note.id;
                    this.$store.commit("updateNote", note);
                } else {
                    note.id = Date.now();
                    this.$store.commit("addNote", note);
                }

                this.clearForm();
            }
        },

        isFormValid() {
            let result = true;

            if (!this.note.title) {
                this.titleErrorMessage = "Это поле обязательно для заполнения.";
                result = false;
            } else {
                this.titleErrorMessage = null;
            }

            if (!this.note.text) {
                this.textErrorMessage = "Это поле обязательно для заполнения.";
                result = false;
            } else {
                this.textErrorMessage = null;
            }

            return result;
        },

        clearForm() {
            this.note.text = "";
            this.note.title = "";
        }
    }
};
</script>

<style scoped lang="scss">
.form-box {
    > .title {
        font-size: 22px;
        line-height: 30px;
        background-color: #bdfd37;
        padding: 5px 10px;
    }

    .input {
        margin-bottom: 25px;
    }
}

.form {
    padding: 30px 15px;

    .btn {
        display: block;
        margin: 40px auto;
    }
}

@media (max-width: 768px) {
    .form-box {
        > .title {
            font-size: 18px;
            line-height: 22px;
        }
    }
}
</style>