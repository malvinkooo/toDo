<template>
    <div class="wrapper" @click="hidePopup" v-if="isVisible">
        <div class="popup" @click.stop>
            <button class="icon" type="button" @click="hidePopup">
                <Icon viewbox="0 0 40 41" width="20" height="20">
                    <icon-close />
                </Icon>
            </button>

            <div class="title">
                <p>Удаление заметки</p>
            </div>
            <div class="text">Вы уверены, что хотите удалить заметку "{{ popupData.title }}"</div>

            <div class="popup-actions">
                <button type="button" class="btn" @click="hidePopup">Отменить</button>
                <button type="button" class="btn -pink" @click="deleteCard">Удалить</button>
            </div>
        </div>
    </div>
</template>

<script>
import Icon from "@/components/icon.vue";
import IconClose from "@/components/icons/IconClose.vue";

export default {
    components: {
        Icon,
        IconClose
    },

    methods: {
        hidePopup() {
            this.$emit("closeBtnClick");
        },

        deleteCard() {
            this.$store.commit("removeNote", this.popupData.id);
            this.$emit("closeBtnClick");
        }
    },

    props: ["isVisible", "popupData"]
};
</script>

<style scoped lang="scss">
.wrapper {
    position: fixed;
    z-index: 3;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.25);
    overflow: auto;
    // display: none;
    z-index: 202;
}

.popup {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    max-width: 1000px;
    background-color: #fff;
    padding: 30px 40px 40px 40px;
    margin: 30px auto;
    width: 500px;
    position: relative;
    // display: none;

    > .icon {
        color: #df007e;
        font-size: 25px;
        position: absolute;
        right: 20px;
        top: 15px;
        transition: 0.3s;

        &:hover {
            color: #bdfd37;
        }
    }
    > .title {
        font-size: 26px;
        line-height: 36px;
        text-align: center;
        margin-bottom: 15px;
    }
}

.popup-actions {
    margin-top: 30px;
    display: flex;
    justify-content: center;

    >.btn {
        &:first-child {
            margin-right: 15px;
        }
    }
}
</style>
