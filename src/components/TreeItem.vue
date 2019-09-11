<!--
 * @Description: 权限树组件
 * @Date: 2019-06-17 11:50:36
 * @Author: jawnwa22
 * @LastEditors: jawnwa22
 * @LastEditTime: 2019-09-11 19:50:21
 -->
<template lang="pug">
    li.item
        div.item-header
            div.item-icon.icon-fold.pointer(@click="toggle" :class="{'no-child': !isFolder()}")
                div.horizontal-line
                div.vertical-line(v-if="open && isFolder()" :style="{'height': verticalHeight + 'px'}")
                div.iconfont.icon-plus(v-if="isFolder() && !open")
                div.iconfont.icon-minus(v-else)
            div.item-icon.icon-check.pointer(@click="switchCheck")
                div.iconfont(:class="iconType[status]")
            div.item-title {{node.name}}
        ul(v-show="open")
            li-item(
                v-for="item in childNode" 
                :key="item.id" 
                :node="item" 
                :full_pm="full_pm"
                :role_pm="role_pm"
                :tree_pm="tree_pm"
                ref="child")

</template>
<script>
export default {
    name: "li-item",
    props: {
        // 代表当前节点
        node: {
            default: () => {
                return {
                    name: "all",
                    id: undefined,
                    pid: -1,
                    type: 1
                };
            }
        },
        // 传入所有权限
        full_pm: Array,
        // 传入拥有的权限，用于更新组件
        tree_pm: Array,
        // 传入拥有的权限，用于返回新的权限列表
        role_pm: Array
    },
    data() {
        return {
            // 控制子节点是否展开
            open: true,
            // 锁，表示当前节点能否有权利变更子节点的check值，为true时无权利，为false时有权利
            lock: true,
            // 显示当前节点的状态，有”all”，”some“，”none“
            // status: "none",
            // 当前节点是否选中
            check: false,
            // 所有子节点的实例对象
            childRef: [],
            // 当前节点的check值是否初始化完毕
            flash: false,
            iconType: {
                all: "icon-tick",
                some: "icon-minus",
                none: ["icon-none", "icon-minus"]
            }
        };
    },
    mounted() {
        this.initCheck();
        this.init();
    },
    methods: {
        // 判断该节点是否含有子节点
        isFolder() {
            return this.childNode && this.childNode.length;
        },
        // 切换当前节点的check值
        switchCheck() {
            this.lock = false;
            this.check = !this.check;
        },
        // 点击展开与折叠子节点
        toggle() {
            this.open = !this.open;
        },
        // 初始化
        init() {
            if (
                this.$refs.child &&
                this.$refs.child.length !== this.childNode.length
            ) {
                this.init();
            } else {
                this.childRef = this.$refs.child;
            }
        },
        // 初始化check的值
        // 通过查询tree_pm权限数组中的元素是否存在节点自身的id
        initCheck() {
            if (!this.tree_pm) {
                return;
            }
            let deleteIndex = this.tree_pm.indexOf(this.node.id);
            this.check = deleteIndex !== -1 ? true : false;

            this.$nextTick(() => {
                this.flash = true;
            });
        },
        updateRole(check) {
            if (!this.flash) return;
            let deleteIndex = 0;
            switch (check) {
                case true:
                    console.time(this.node.id);
                    this.node.id && this.role_pm.push(this.node.id);
                    console.timeEnd(this.node.id);
                    break;
                case false:
                    console.time(this.node.id);
                    deleteIndex = this.role_pm.indexOf(this.node.id);
                    if (deleteIndex !== -1) {
                        this.role_pm.splice(deleteIndex, 1);
                    }
                    console.timeEnd(this.node.id);
                    break;
            }
        }
    },
    computed: {
        // 找出父节点的所有子节点并返回一个包含所有子节点的数组
        childNode() {
            if (!this.full_pm) return [];

            let child = this.full_pm.filter(node => {
                return node.pid === this.node.id;
            });

            let sortChild = child.sort((a, b) => {
                if (a.name < b.name) return -1;
                if (a.name < b.name) return 1;
                return 0;
            });

            return sortChild;
        },
        // 根据所有子节点的check值更新当前节点的状态
        status() {
            if (!this.childRef) return this.check ? "all" : "none";
            let total = 0; // check值为true的子节点之和
            this.childRef.forEach(item => {
                item.check ? total++ : 0;
            });
            // 根据total决定status的值
            switch (total) {
                case 0: // 子节点都没有被选中
                    return "none";
                case this.childRef.length: // 子节点都处于选中状态
                    return "all";
                default:
                    return "some";
            }
        },
        countTotal() {
            if (!this.childRef) return -1;
            let total = 0; // check值为1的子节点之和
            this.childRef.forEach(item => {
                item.check ? total++ : 0;
            });
            return total;
        },
        // 计算当前节点的总高度
        allHeight() {
            let box_height = 28; // 当前的行的高度
            let box_padding = 8; // 行下方的padding值
            let _allHeight = 0;
            let _childHeight = 0;
            // 当前节点为展开状态且含有子节点
            if (this.open && this.childRef) {
                for (let index = 0; index < this.childRef.length; index++) {
                    _childHeight =
                        _childHeight + this.childRef[index].allHeight;
                }
            }
            // 节点自己身高度加上子节点的总高度
            _allHeight = _childHeight + box_height + box_padding;
            return _allHeight;
        },
        // 计算当前节点的垂直线的高度
        verticalHeight() {
            let box_height = 28; // 当前的行的高度
            let box_padding = 8; // 行下方的padding值
            let _childHeight = 0;
            if (this.childRef) {
                for (let index = 0; index < this.childRef.length - 1; index++) {
                    _childHeight =
                        _childHeight + this.childRef[index].allHeight;
                }
                //只需要最后一个子节点的高度的一半
                _childHeight = _childHeight + box_height / 2;
            }
            return box_padding + _childHeight;
        }

        // childRef() {
        //     return this.$refs.child;
        // }
    },
    watch: {
        tree_pm() {
            this.flash = false;
            this.initCheck();
        },
        // 根据当前的check值的变化，改变子节点的check值
        check(newValue) {
            // check值改变时，更新role_pm数组
            this.updateRole(newValue);
            // 是否为锁住状态，为true则无法变更子节点的值
            if (this.lock) {
                return;
            }
            // 无子节点时无需更新子节点的状态
            if (!this.childRef) {
                this.lock = true;
                return;
            }
            switch (newValue) {
                // 当check变成true时，变更子节点的check值为true
                case true:
                    this.childRef.forEach(node => {
                        node.lock = false;
                        node.check = true;
                    });
                    break;
                case false:
                    this.childRef.forEach(node => {
                        node.lock = false;
                        node.check = false;
                    });
                    break;
            }
            this.lock = true;
        },
        // 根据当前的status值的变化，改变当前节点的check值
        status(newValue) {
            switch (newValue) {
                case "all":
                    this.check = true;
                    break;
                case "none":
                    this.check = false;
                    break;
                default:
                    this.check = true;
                    break;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/icon/iconfont.css";

$lighten-5: #1a1d1e;
$lighten-4: #589bad;
$lighten-3: #c3c3e5;
$lighten-2: #c64b2b;
$lighten-1: #f9ce8c;

.pointer {
    cursor: pointer;
}

.item-header {
    position: relative;
    display: flex;
    align-items: center;
    padding-bottom: 8px;

    .item-title {
        margin-left: 12px;
        white-space: nowrap;
    }
}
.iconfont {
    width: 16px;
    height: 16px;
}

.icon-fold {
    position: relative;
    padding: 5px;
    border: 1px solid $lighten-2;
    box-sizing: border-box;
    // box-sizing: content-box;
}
.icon-check {
    margin-left: 12px;
    padding: 5px;
    border: 1px solid $lighten-4;
}
.icon-none {
    visibility: hidden;
}
.no-child {
    border-color: $lighten-3;
}

// 水平线样式
.horizontal-line {
    position: absolute;
    width: 26px;
    height: 1px;
    top: 50%;
    left: -104%;
    // left: 0;
    // background-color: #c64b2b;
    border-top: 1px dashed #c64b2b;
}

// 垂直线样式
.vertical-line {
    position: absolute;
    width: 1px;
    top: 104%;
    left: 50%;
    border-left: 1px dashed #c64b2b;
    // background-color: #c64b2b;
}
</style>
