# vue-ptree

> A permission-tree component support for Vue.js

![image](https://github.com/jawnwa22/vue-ptree/raw/master/example.jpg)

## Build Setup

```
# install dependencies
npm install

# serve witdh hot reload
npm run serve
```

## Getting Started

### permission的数据结构示例

* `code`当前权限的代号（暂无用处），类型 `String`
* `name`当前权限的名称， 类型`String`
* `id`代表当前的权限id，类型`String`
* `type`当前权限的类型（暂无用处），类型`String`


permission.js

```javascript
let full_pm_list = [
    {
        "code": "equipment_monitor",        //code: 当前权限的代号（暂无用处）
        "name": "equipment_monitor",        //name: 当前权限的名称
        "id": "5cae05bb899173245e09039c",   //id: 代表当前的权限id
        "type": 1                           //type: 权限的类型（暂无用处）
    },
    {
        "code": "customer_manage",
        "name": "customer_manage",
        "id": "5cae05bb899173245e09039d",
        "type": 1
    },
    {
        "code": "customer_stat_manage",
        "name": "customer_stat_manage",
        "pid": "5cae05bb899173245e09039d",  //pid: 代表父权限的id
        "id": "5cae05bb899173245e09039e",
        "type": 1
    }
}
```

### role的数据结构示例

`role.js`存储权限的`id`，为一维数组。

role.js

```javascript
let role_list = [
    "5cae05bb899173245e09039c",
    "5cae05bb899173245e09039d",
    "5cae05bb899173245e09039e",
]
```

### 使用ptree组件的一个简单例子

下面的例子将会说明在`vue-cli`中如何使用该权限树组件。
```javascript
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
```


