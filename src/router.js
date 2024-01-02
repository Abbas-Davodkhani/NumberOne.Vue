import {createRouter , createWebHashHistory} from 'vue-router'
import Home from './pages/Home.vue'
import IndexUser from './pages/Products/Index.vue'

const routes = [
    {path:"/" , name : "Home" , component:Home},
    {path:"/users" , name : "Users" , component:IndexUser}
];

const router = createRouter({
    history : createWebHashHistory(),
    routes
});


export default router;