import { createWebHistory, createRouter } from "vue-router";
import Product from "../views/SanPham.vue";
import IntroMenu from "../views/IntroMenu.vue";
import Detail from "../views/Detail.vue";
import UserLogin from "../views/UserLogin.vue";
import AdminMenu from "../views/ProductView.vue";
import ProductAdd from "../views/ProductAdd.vue";
import EditMenu from "../views/EditMenu.vue";
import DeleteMenu from "../views/DeleteMenu.vue";

const routes = [
  //   {
  //     path: "/",
  //     name: "ContactBook",
  //     component: ContactBook,
  //   },
  {
    path: "/",
    name: "IntroMenu",
    component: IntroMenu,
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
  },
  {
    path: "/product/detail",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/login",
    name: "Login",
    component: UserLogin,
  },
  {
    path: "/admin",
    name: "AdminMenu",
    component: AdminMenu,
  },
  {
    path: "/add",
    name: "ProductAdd",
    component: ProductAdd,
  },
  {
    path: "/edit",
    name: "EditMenu",
    component: EditMenu,
  },
  {
    path: "/delete",
    name: "DeleteMenu",
    component: DeleteMenu,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

// import { createWebHistory, createRouter } from "vue-router";
// import UserLogin from "@/views/UserLogin.vue";
// import IntroMenu from "@/views/IntroMenu.vue";
// import UserLogin from "@/views/UserLogin.vue";

// const routes = [
//   {
//     path: "/product",
//     name: "asdasdas",
//     component: IntroMenu,
//   },
//   {
//     path: "/login",
//     name: "login",
//     component: UserLogin,
//   },
//   {
//     path: "/register",
//     name: "register",
//     component: () => import("@/views/UserRegister.vue"),
//   },
//   {
//     path: "/profile",
//     name: "profile",
//     component: () => import("@/views/UserProfile.vue"),
//   },

//   {
//     path: "/contacts/:id",
//     name: "contact.edit",
//     component: () => import("@/views/ContactEdit.vue"),
//     props: true,
//   },
//   {
//     path: "/add",
//     name: "contact.add",
//     component: () => import("@/views/ContactAdd.vue"),
//   },
//   {
//     path: "/:pathMatch(.*)*",
//     name: "notfound",
//     component: () => import("@/views/NotFound.vue"),
//   },
// ];

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes,
// });

// export default router;
