<template>
<div class="index_box">
    <p>{{ msg }}</p>
    <nav-header></nav-header>
    <router-link to="/second">GO TO SECOND</router-link>
</div>    
</template>

<script>
import navHeader from '../components/navHeader'
export default {
    data(){
        return {
            msg: '首页'
        }
    },
    components: {
        navHeader
    }
}
</script>

<style lang="scss">
.index_box {
    background-color: #333;
    width: 100px;
    height: 100px;
    position: relative;
    p {
        font-size: 16px;
        font-weight: bold;
    }
}
</style>
