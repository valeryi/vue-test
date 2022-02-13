<template>
    <transition name="fade">
        <div class="overlay" v-if="show" :style="{ zIndex: getZIndex }" @click="onClick"></div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            defaultZIndex: 9999,
        }
    },
    props: {
        show: {
            type: Boolean,
        },
        zIndex: {
            type: Number,
        },
    },
    computed: {
        getZIndex() {
            return this.zIndex || this.defaultZIndex
        },
    },
    methods: {
        onClick() {
            this.$emit('hide')
        },
    },
}
</script>

<style lang="scss">
$layout-color: rgb(233, 233, 233);

.overlay {
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $layout-color;
    opacity: .5;
    cursor: pointer;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
