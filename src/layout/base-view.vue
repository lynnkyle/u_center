<template>
    <div class="common-layout">
        <el-container>
            <el-header id="admin-header-box" height="46px">
                <top-header></top-header>
            </el-header>
            <el-container>
                <el-aside id="left-menu-list-box" width="200px">
                    <left-menu></left-menu>
                </el-aside>
                <el-container>
                    <el-main>
                        <div class="content">
                            <router-view></router-view>
                        </div>
                    </el-main>
                    <el-footer>
                        <div class="footer-part">底部内容</div>
                    </el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import {onMounted} from 'vue'
    import LeftMenu from "@/layout/left-menu";
    import TopHeader from "@/layout/top-header";

    export default {
        name: "base-view",
        components: {
            TopHeader,
            LeftMenu
        },
        setup() {
            onMounted(() => {
                // 动态设置侧边菜单的高度
                let leftMenuListBox = document.getElementById("left-menu-list-box");
                let adminHeaderBox = document.getElementById("admin-header-box");
                if (leftMenuListBox)
                    leftMenuListBox.style.height = window.innerHeight - adminHeaderBox.offsetHeight + 'px';
            })
        }
    }
</script>

<style scoped>
    /deep/ #left-menu-list-box .el-menu {
        border-right: none;
    }

    .el-header {
        background-color: dodgerblue;
        line-height: 46px;
    }

    .el-aside {
        border-right: solid 1px #e6e6e6;
        line-height: 200px;
    }

    .el-main {
        padding: 0;
    }
</style>