<template>
    <label class="input" v-bind:class="{ error: errorMessage }">
        <span class="label">{{ label }}</span>

        <div class="wrapper">
            <textarea
                :value="value"
                v-if="type === 'multiline'"
                v-on:keyup="onChange"></textarea>

            <input v-else type="text" :value="value" v-on:keyup="onChange" />

            <button class="icon" type="button" @click.stop="clearInput">
                <Icon viewbox="0 0 40 41" width="10" height="10">
                    <icon-close />
                </Icon>
            </button>

            <p class="error" v-if="errorMessage">{{ errorMessage }}</p>
        </div>
    </label>
</template>

<script>
import Icon from "@/components/icon.vue";
import IconClose from "@/components/icons/IconClose.vue";

export default {
    data() {
        return {}
    },

    methods: {
        clearInput(e) {
            this.$emit("update:value", "");
        },

        onChange(e) {
            this.$emit("update:value", e.target.value);
        }
    },

    components: {
        Icon,
        IconClose
    },

    props: ["label", "type", "value", "errorMessage"]
};
</script>

<style scoped lang="scss">
.input {
    display: block;

    .label {
        display: block;
        font-size: 18px;
        line-height: 22px;
        padding-bottom: 3px;
    }

    input,
    textarea {
        box-sizing: border-box;
        display: block;
        width: 100%;
        resize: vertical;
        padding: 5px 20px 5px 5px;
        font-size: 16px;
        line-height: 18px;
        border-radius: 2px;
        border: 1px solid #eca8ce;
    }

    textarea {
        height: 200px;
        min-height: 200px;
    }

    .wrapper {
        position: relative;
    }

    .icon {
        position: absolute;
        right: 5px;
        top: 2px;
        color: #eca8ce;

        svg {
            pointer-events: none;
        }

        &:hover {
            color: #df007e;
        }
    }

    &.error {
        input,
        textarea {
            border-color: red;
        }
    }

    .error {
        font-size: 12px;
        line-height: 14px;
        padding-top: 3px;
        padding-left: 5px;
        color: red;
    }
}
</style>