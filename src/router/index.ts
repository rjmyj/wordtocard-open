import { createRouter,createWebHashHistory } from 'vue-router';
import Home from "../views/Home.vue";
import WordToCard from "../views/WordToCard.vue";
import mcp from "../views/mcp.vue";
//2、定义一些路由
//每个路由都需要映射到一个组件
//我们后面再讨论嵌套路由
const routes = [
    {path:"/",component:Home,name:"Home"},
    {path:"/WordToCard",component:WordToCard,name:"WordToCard"},
    {path:"/mcp",component:mcp,name:"mcp"},
];
//3、创建路由实例并传递‘routes’配置
//你可以在这里输入更多的配置，但是我们在这里
const router = createRouter({
    //4、内部提供了 history 模式的实现。为了简单起见，我们在这里使用hash模式
    history: createWebHashHistory(),
    routes, //routes:routes 的缩写
})
export default router

