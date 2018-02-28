<template>
    <div id="main" class="main">
        <my-header></my-header>
        <router-view></router-view>
        <my-footer></my-footer>
    </div>
</template>

<script>
    import MyHeader from '@/components/header'
    import MyFooter from '@/components/footer'
    export default {
        name: 'Main',
        data() {
            return {
                name:"jiangwanpneg"
            }
        },
        components:{
            MyHeader,
            MyFooter
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
<style lang="scss">

</style>
