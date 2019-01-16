<template>
    <div>
           <div class="nav-header">
            <span>{{ msg }}</span>
            </div>  
            <img class="dog" src="../static/dog.jpg" alt="">
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg: '绝对定位'
        }
    }
}
</script>

<style lang="scss">
.nav-header {
    position: absolute;
    left: 0;
    top: 0;
    background-color: #ccc;
    width: 200px;
    height: 200px;
    span {
        font-size: 16px;
        color: green;
    }
    .dog {
        width: 300px;
        height: 300px;
        display: block;
    }
}
</style>
