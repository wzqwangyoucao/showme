<template>
    账号：
    <input type="text" v-model="userName" />
    密码：
    <input type="text" v-model="password" />
    <button @click="login">登录</button>
</template>
<script lang="ts">
import { userLogin, userInfo } from "../../api";
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
    setup() {
        let userInfo = reactive<userInfo>({
            userName: "",
            password: "",
        });

        function login() {
            userLogin({userName: userInfo.password, password: userInfo.userName}).then(res => {
                sessionStorage.setItem('token', res.data.token)
            })
        }

        return { ...toRefs(userInfo), login };
    },
    methods: {}
});
</script>