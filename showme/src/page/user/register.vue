<template>
    <div class="container">
        <el-row>
            <el-col :span="8" :offset="8">
                <el-form :model="userInfo" label-width="200px">
                    <el-form-item label="账号：">
                        <el-input v-model="userInfo.userName" placeholder="账号"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="userInfo.password" placeholder="账号"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="register">注册</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
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
            userRegister({
                userName: userInfo.userName,
                password: userInfo.password,
            }).then((res) => {
                console.log(res.data);
                sessionStorage.setItem("token", res.data.token);
            });
        }

        return { userInfo, register };
    },
    methods: {},
});
</script>
<style scoped>
.container {
    padding: 40px 0 0 0;
}
</style>