<template>
    <div class="form-box">
        <h6
            class="title">
            {{mode === 'add' ? "Добавить новую заметку" : "Изменить заметку"}}
        </h6>

        <form class="form" @submit.prevent="formSubmit">
            <Input
                label="Заголовок"
                type="text"
                :value.sync="noteData.title"
                :errorMessage="titleErrorMessage"
            />
            <Input
                label="Текст"
                type="multiline"
                :value.sync="noteData.text"
                :errorMessage="textErrorMessage"
            />

            <input
                type="submit"
                class="btn -big"
                :value="mode === 'add' ? 'Добавить' : 'Сохранить'"
            />
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
        }
    },

    components: {
        Input
    },

    props: ["noteData"],

    computed: {
        mode() {
            return this.$store.state.formMode
        }
    },

    methods: {
        formSubmit() {
            const note = {
                title: this.noteData.title,
                text: this.noteData.text
            };

            if (this.isFormValid()) {
                if (this.mode === "edit") {
                    note.id = this.noteData.id;
                    this.$store.commit("updateNote", note);
                    this.$store.dispatch("setAddFormMode");
                } else if(this.mode === "add") {
                    note.id = Date.now();
                    this.$store.commit("addNote", note);
                }
            }
            this.clearForm();
        },

        isFormValid() {
            let result = true;

            if (!this.noteData.title) {
                this.titleErrorMessage = "Это поле обязательно для заполнения.";
                result = false;
            } else {
                this.titleErrorMessage = null;
            }

            if (!this.noteData.text) {
                this.textErrorMessage = "Это поле обязательно для заполнения.";
                result = false;
            } else {
                this.textErrorMessage = null;
            }

            return result;
        },

        clearForm() {
            this.$emit("update:noteData", {});
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