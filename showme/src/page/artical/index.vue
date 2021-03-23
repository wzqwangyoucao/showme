<template>
    <div class="main">
        <side></side>
        <center>
            <router-view></router-view>
        </center>
    </div>
</template>

<script lang="ts">
import side from './side.vue'
import center from './center.vue'

import { defineComponent } from 'vue'

export default defineComponent({
    components: {
        side,
        center
    },
    mounted() {

    }
})
</script>