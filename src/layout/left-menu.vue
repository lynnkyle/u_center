<template>
    <div>
        <el-row class="tac">
            <el-col>
                <el-menu
                        class="el-menu-vertical"
                        default-active="0">
                    <template v-for="(item,index) in menuList" :key="index">
                        <router-link v-if="!item.children&&!item.hidden" :to="item.path">
                            <el-menu-item :index="index.toString()">
                                <el-icon>
                                    <component :is="item.icon"></component>
                                </el-icon>
                                <span>{{item.name}}</span>
                            </el-menu-item>
                        </router-link>
                        <el-sub-menu v-if="item.children&&!item.hidden" :index="index.toString()">
                            <template #title>
                                <el-icon>
                                    <component :is="item.icon"></component>
                                </el-icon>
                                <span>{{item.name}}</span>
                            </template>
                            <template v-for="(it,idx) in item.children" :key="idx">
                                <router-link :to="item.path+'/'+it.path">
                                    <el-menu-item :index="index+'-'+idx">
                                        <el-icon>
                                            <component :is="it.icon"></component>
                                        </el-icon>
                                        <span>{{it.name}}</span>
                                    </el-menu-item>
                                </router-link>
                            </template>
                        </el-sub-menu>
                    </template>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {reactive} from 'vue'
    import {
        Menu,
        Notebook,
        Edit,
        Document,
        ChatLineRound,
        Picture,
        User,
        UserFilled,
        Unlock,
        Message,
        Files,
        SetUp,
        Film,
        More,
        Setting,
        DataLine,
        Link
    } from "@element-plus/icons-vue";
    import {routes} from "../router";

    export default {
        name: "left-menu",
        components: {
            Menu,
            Notebook,
            Edit,
            Document,
            ChatLineRound,
            Picture,
            User,
            UserFilled,
            Unlock,
            Message,
            Files,
            SetUp,
            Film,
            More,
            Setting,
            DataLine,
            Link
        },
        setup() {
            const menuList = reactive(routes[0].children);
            return {
                menuList: menuList
            }
        }
    }
</script>

<style scoped>
    .el-menu-vertical a {
        text-decoration: none;
    }
</style>