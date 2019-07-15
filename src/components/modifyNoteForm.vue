<template>
    <div class="form-box">
        <h6 class="title">{{mode === 'add' ? "Добавить новую заметку" : "Изменить заметку"}}</h6>

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
                :value.sync="noteData.description"
                :errorMessage="descriptionErrorMessage"
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
import Input from "@/components/input.vue";

export default {
    data() {
        return {
            titleErrorMessage: null,
            descriptionErrorMessage: null
        };
    },

    components: {
        Input
    },

    props: ["noteData"],

    computed: {
        mode() {
            return this.$store.state.formMode;
        }
    },

    methods: {
        formSubmit() {
            const note = {
                title: this.noteData.title,
                description: this.noteData.description
            };

            if (this.isFormValid()) {
                if (this.mode === "edit") {
                    this.$store
                        .dispatch("updateNote", {
                            id: this.noteData._id,
                            note
                        })
                        .then(response => {
                            this.$store.dispatch("getNotes");
                            this.$store.dispatch("setAddFormMode");
                            this.clearForm();
                        })
                        .catch(err => {
                            console.log(err.response);
                        });
                } else if (this.mode === "add") {
                    this.$store
                        .dispatch("addNote", note)
                        .then(response => {
                            this.$store.dispatch("getNotes");
                            this.clearForm();
                        })
                        .catch(err => {
                            console.log(err.response);
                        });
                }
            }
        },

        isFormValid() {
            let result = true;

            if (!this.noteData.title) {
                this.titleErrorMessage = "Это поле обязательно для заполнения.";
                result = false;
            } else {
                this.titleErrorMessage = null;
            }

            if (!this.noteData.description) {
                this.descriptionErrorMessage =
                    "Это поле обязательно для заполнения.";
                result = false;
            } else {
                this.descriptionErrorMessage = null;
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