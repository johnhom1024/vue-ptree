<template>
    <div id="app">
        <p-tree 
            :full_pm="full_pm" 
            :role_pm="role_pm" 
            v-if="full_pm.length"
        >
        </p-tree>
    </div>
</template>


<script>
// 导入权限数组件
import PTree from "@/components/PTree.vue";
// 导入所有的权限
import PermissionList from "@/components/data/permission.js";
// 导入当前拥有的权限
import RoleList from "@/components/data/role.js";

export default {
    name: "app",
    // 注册组件
    components: {
        PTree
    },
    data() {
        return {
            // 定义一个包含所有权限的数组
            full_pm: [],
            // 定义一个当前拥有的权限数组
            role_pm: []
        };
    },
    mounted() {
        this.getFullPermission();
    },
    methods: {
        // 模仿后端异步请求权限数据
        getFullPermission() {
            setTimeout(() => {
                this.full_pm = PermissionList;
                this.role_pm = RoleList;
            }, 1000);
        }
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    /* -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; */
    /* text-align: center; */
    color: #2c3e50;
    margin-top: 60px;
}
</style>
