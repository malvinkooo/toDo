<template>
    <div class="page" @click="hideDrawer">
        <Header></Header>

        <div class="drawer" @click.stop>
            <ModifyNoteForm :noteData="cardData"></ModifyNoteForm>

            <button class="icon" type="button" @click="hideDrawer">
                <Icon viewbox="0 0 40 41" width="40" height="40">
                    <icon-close />
                </Icon>
            </button>
        </div>

        <div class="container">
            <div class="list">
                <Card
                    v-for="note in notesList"
                    v-bind="note"
                    :key="note.id"
                    v-on:deleteBtnClick="showConfirmPopup"
                    v-on:editBtnClick="showEditDrawer"
                ></Card>
            </div>
        </div>

        <button type="button" class="float-btn" @click.stop="showDrawer">+</button>

        <ConfirmPopup
            v-bind:popupData="popupData"
            v-bind:isVisible="isConfirmPopupVisible"
            v-on:closeBtnClick="hideConfirmPopup"
        ></ConfirmPopup>
    </div>
</template>

<script>
import Header from "@/components/header.vue";
import ModifyNoteForm from "@/components/modifyNoteForm.vue";
import Card from "@/components/card.vue";
import Icon from "@/components/icon.vue";
import IconClose from "@/components/icons/IconClose.vue";
import ConfirmPopup from "@/components/confirmPopup.vue";

export default {
    data() {
        return {
            isConfirmPopupVisible: false,
            popupData: {
                id: 0,
                title: ""
            },
            cardData: null
        };
    },

    computed: {
        notesList() {
            return this.$store.state.notes;
        }
    },

    components: {
        Header,
        ModifyNoteForm,
        Card,
        Icon,
        IconClose,
        ConfirmPopup,
    },

    created() {
        if (!window.localStorage.my_email) {
            this.$router.push("login")
        } else {
            this.$store.commit("addUser", JSON.parse(window.localStorage.my_email));
        }
    },

    methods: {
        showDrawer() {
            const body = document.querySelector("body");
            body.classList.add("-drawer-opened");
        },

        hideDrawer() {
            const body = document.querySelector("body");
            body.classList.remove("-drawer-opened");

            this.cardData = null;
        },

        showConfirmPopup(data) {
            this.popupData.id = data.id;
            this.popupData.title = data.title;
            this.isConfirmPopupVisible = true;
        },

        hideConfirmPopup() {
            this.isConfirmPopupVisible = false;
        },

        showEditDrawer(data) {
            this.cardData = data;
            this.showDrawer();
        }
    }
};
</script>

<style scoped lang="scss">
body {
    &.-drawer-opened {
        overflow: hidden;
        .drawer {
            transform: translateX(0);
            box-shadow: 2px 0px 5px 0px rgba(0, 0, 0, 0.25);
        }
    }
}

.page {
    height: 100%;
}

.list {
    padding-top: 90px;
    padding-bottom: 75px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    > .card-1 {
        max-width: 100%;
        margin: 0 1% 20px;
        width: 23%;
    }
}

.drawer {
    position: fixed;
    left: 0;
    top: 52px;
    background-color: #fff;
    border-right: 2px solid #bdfd37;
    bottom: 0;
    width: 30%;
    box-sizing: border-box;
    transform: translateX(-300px);
    transition: 0.5s;
    width: 300px;
    overflow: auto;

    > .icon {
        display: block;
        width: 40px;
        margin: 40px auto;
        color: #eca8ce;
        transition: 0.3s;

        &:hover {
            color: #df007e;
        }
    }
}

.float-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e0ffa3;
    color: #000;
    transition: 0.3s;
    font-size: 24px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: fixed;
    bottom: 20px;
    right: 20px;
    cursor: pointer;

    &:hover {
        background-color: #bdfd37;
    }
}

@media (max-width: 1400px) {
    .list {
        > .card-1 {
            width: 31.33333333333333%;
        }
    }
}
@media (max-width: 992px) {
    .list {
        > .card-1 {
            width: 48%;
        }
    }
}
@media (max-width: 550px) {
    .list {
        padding: 80px 0 75px;

        > .card-1 {
            margin: 0 0 20px;
            width: 100%;
        }
    }

    .drawer {
        transform: translateX(-270px);
        width: 270px;

        > .icon {
            margin-top: 0;
            margin-bottom: 10px;
        }
    }
}
</style>
