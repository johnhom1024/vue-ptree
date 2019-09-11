<template lang="pug">
    div.p-tree
        ul.p-tree-content
            tree-item(:full_pm="full_pm" :role_pm="role_pm" :tree_pm="tree_pm") 
</template>

<script>
import TreeItem from "@/components/TreeItem.vue";
export default {
    props: {
        // 所有的权限
        full_pm: Array,
        // 拥有的权限，用于返回新的权限
        role_pm: Array
    },
    components: {
        TreeItem
    },
    data() {
        return {
            // 拥有的权限，用于更新组件的状态
            tree_pm: []
        };
    },
    created() {
        this.init();
    },
    methods: {
        init() {
            this.tree_pm = [].concat(this.role_pm);
        }
    },
    watch: {
        role_pm() {
            this.init();
        }
    }
};
</script>

<style lang="scss" scoped>
ul {
    padding: 0;
    & /deep/ li {
        list-style-type: none;
    }
    /deep/ &.p-tree-content  > li.item > div.item-header > div.icon-fold > div.horizontal-line {
        visibility: hidden;
    }
}
</style>
