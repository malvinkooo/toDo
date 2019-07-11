<template>
    <div class="page" @click="hideDrawer">
        <Header></Header>

        <div class="drawer" @click.stop>
            <ModifyNoteForm></ModifyNoteForm>

            <button class="icon" type="button" @click="hideDrawer">
                <Icon viewbox="0 0 40 41" width="40" height="40">
                    <icon-close />
                </Icon>
            </button>
        </div>

        <div class="container">
            <div class="list">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>

        <button type="button" class="float-btn" @click.stop="showDrawer">+</button>
    </div>
</template>

<script>
import Header from "@/components/header.vue";
import ModifyNoteForm from "@/components/modifyNoteForm.vue";
import Card from "@/components/card.vue";
import Icon from "@/components/icon.vue";
import IconClose from "@/components/icons/IconClose.vue";

export default {
    data() {
        return {};
    },

    components: {
        Header,
        ModifyNoteForm,
        Card,
        Icon,
        IconClose
    },

    methods: {
        showDrawer() {
            const body = document.querySelector("body");
            body.classList.add("-drawer-opened");
        },

        hideDrawer() {
            const body = document.querySelector("body");
            body.classList.remove("-drawer-opened");
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
        cursor: pointer;

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
