<template>
    <header class="header">
        <p class="user">example@gmail.com</p>
        <a href="#" class="btn" @click="logOut">Log out</a>
    </header>
</template>
<script>
export default {
    data() {
        return {};
    },

    methods: {
        logOut() {
            this.$store.dispatch("deleteUser");
            this.$router.push("login")
        }
    }
};
</script>
<style scoped lang="scss">
.header {
    background-color: #df007e;
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    .user {
        font-size: 22px;
        line-height: 32px;
        color: #fff;
        width: calc(100% - 90px);
    }
}
@media (max-width: 1200px) {
    .header {
        .user {
            font-size: 18px;
            line-height: 22px;
        }
    }
}
@media (max-width: 1200px) {
    .header {
        .user {
            font-size: 16px;
            line-height: 18px;
        }
    }
}
</style>