<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :height="height"
        :width="width"
        :viewBox="viewbox"
        role="presentation"
    >
        <g :fill="iconColor">
            <slot />
        </g>
    </svg>
</template>

<script>
export default {
    props: {
        height: {
            type: [Number, String],
            default: 18
        },
        width: {
            type: [Number, String],
            default: 18
        },
        viewbox: {
            type: [String],
            default: "0 0 18 18"
        },
        iconColor: {
            type: String,
            default: "currentColor"
        }
    }
};
</script>

<style scoped>
svg {
    display: inline-block;
    vertical-align: baseline;
}
</style>
