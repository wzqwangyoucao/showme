<template>
    <!-- <form action=""> -->
        账号：<input type="text" v-model="userName">
        密码：<input type="text" v-model="password">
        <button @click="login">登录</button>
    <!-- </form> -->
</template>
<script lang="ts">
interface userInfo {
    userName: string,
    password: string
}
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
    setup() {
        let userInfo = reactive<userInfo>({
            userName: '',
            password: ''
        })

        function login () {
            console.log(userInfo.userName, userInfo.password);
        }

        return {...toRefs(userInfo), login}
    },
    methods: {}
});
</script>