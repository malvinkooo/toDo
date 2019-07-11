<template>
    <div class="card-1">
        <div class="card-1-actions">
            <button class="icon" type="button">
                <Icon><icon-edit /></Icon>
            </button>
            <button class="icon" type="button">
                <Icon viewbox="0 0 22 18" width="22"><icon-delete /></Icon>
            </button>
        </div>
        <h6 class="title">Some title</h6>
        <div class="text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
    }
}
</script>

<style scoped lang="scss">
.card-1 {
    border-top: 2px solid #bdfd37;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    padding: 10px 15px 20px 22px;

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
}

.card-1-actions {
    text-align: right;
    >.icon {
        color: #DF007E;
        display: inline-block;
        padding: 0 5px;
        cursor: pointer;
        transition: .3s;

        &:hover {
            color: #8DE300;
        }
    }
}
</style>