
import { createRouter, createWebHistory } from "vue-router"
const routeInfos = [
    {
        path : "/",
        component : import("./modules/home/Index.vue")
    },
    // {
    //     path : "/projects",
    //     component : import("./modules/projects/Index.vue")
    // }
]

const router = createRouter({
    history : createWebHistory(),
    routes : routeInfos
})

export default router;