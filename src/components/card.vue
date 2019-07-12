<template>
    <div class="card-1">
        <div class="card-1-actions">
            <button class="icon" type="button" @click.stop="editNote">
                <Icon><icon-edit /></Icon>
            </button>
            <button class="icon" type="button" @click="deleteNote">
                <Icon viewbox="0 0 22 18" width="22"><icon-delete /></Icon>
            </button>
        </div>
        <h6 class="title">{{ title }}</h6>
        <div class="text">
            <p>{{ text }}</p>
        </div>
    </div>

</template>

<script>
import Icon from '@/components/icon.vue'
import IconEdit from '@/components/icons/IconEdit.vue'
import IconDelete from '@/components/icons/IconDelete.vue'

export default {
    components: {
        Icon,
        IconEdit,
        IconDelete,
    },

    methods: {
        deleteNote() {
            this.$emit("deleteBtnClick", {
                id: this.id,
                title: this.title,
                text: this.text,
            });
        },

        editNote() {
            this.$store.commit("setEditFormMode");
            this.$emit("editBtnClick", {
                id: this.id,
                title: this.title,
                text: this.text,
            });
        }
    },

    props: ["id", "title", "text"]
}
</script>

<style scoped lang="scss">
.card-1 {
    border-top: 2px solid #bdfd37;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
    padding: 10px 15px 20px 22px;
    transition: .3s;

    > .title {
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        margin-bottom: 15px;
    }

    > .text {
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
    }

    &:hover {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-color: #DF007E;
    }
}

.card-1-actions {
    text-align: right;
    >.icon {
        color: #DF007E;
        display: inline-block;
        padding: 0 5px;
        transition: .3s;

        &:hover {
            color: #8DE300;
        }
    }
}
</style>