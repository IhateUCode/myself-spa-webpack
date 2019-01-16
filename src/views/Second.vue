<template>
    <div id="second">
        <span>{{ msg }}</span>
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg: '我是second页面'
        }
    }
}
</script>

<style scoped>
#second {
    width: 500px;
    height: 500px;
    background-color: orange;
    background-image: url('../static/2323.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}

#second span {
    font-size: 16px;
    font-weight: bold;
    color: #fff;
}
</style>
