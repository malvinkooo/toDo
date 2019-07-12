<template>
    <div class="wrapper">
        <div class="container">
            <form class="form" @submit.prevent="formSubmit">
                <Input
                    label="E-mail"
                    v-bind:value.sync="user.email"
                    :errorMessage="errorMessage"
                />

                <button class="btn">Войти</button>
            </form>
        </div>
    </div>
</template>
<script>
import Input from "@/components/input.vue";

export default {
    data() {
        return {
            user: {
                email: null,
            },

            errorMessage: null,
            emailRegExp: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        }
    },

    methods: {
        formSubmit() {
            const { email } = this.user;

            if(this.isFormValid()) {
                this.$store.commit("addUser", email);
                this.$router.push("/");
            }
        },

        isFormValid() {
            const { email } = this.user;
            const { emailRegExp } = this;
            let result = true;

            if(!email) {
                this.errorMessage = "Это поле обязательно для заполнения";
                result = false;
            } else if(!(emailRegExp.test(email))) {
                console.log("reg");
                this.errorMessage = "Вы ввели некорректный электронный адрес"
                result = false;
            } else {
                this.errorMessage = null;
            }

            return result;
        }
    },

    components: {
        Input
    }
};
</script>
<style scoped lang="scss">
.wrapper {
    min-height: 100%;

    > .container {
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }
}

.form {
    max-width: 100%;
    width: 500px;
    padding: 20px;
    border-radius: 2px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 35px;
}

.btn {
    margin-top: 15px;
}
</style>