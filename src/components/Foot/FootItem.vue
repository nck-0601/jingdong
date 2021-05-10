<template>
    <div>
        <slot name="img1" v-if="!isActive"></slot>
        <slot name="img2" v-else></slot>
    </div>
</template>

<script>
export default {
    props:["path",],
    computed:{
        isActive(){
            return this.$route.path === this.path
        }
    }
}
</script>