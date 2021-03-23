<template>
    账号：
    <input type="text" v-model="userName" />
    密码：
    <input type="text" v-model="password" />
    <button @click="register">登录</button>
</template>
<script lang="ts">
import { userRegister, userInfo } from "../../api";
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
    setup() {
        let userInfo = reactive<userInfo>({
            userName: "",
            password: "",
        });

        function register() {
            userRegister({userName: userInfo.password, password: userInfo.userName}).then(res => {
                console.log(res.data)
                sessionStorage.setItem('token', res.data.token)
            })
        }

        return { ...toRefs(userInfo), register };
    },
    methods: {}
});
</script>