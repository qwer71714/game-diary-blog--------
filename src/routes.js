import HomePage from "./Page/HomePage";
import GamebullePage from "./Page/GamebullePage";
import DetailPage from "./Page/DetailPage";
import CreatePage from "./Page/CreatePage";
import AdminPage from "./Page/AdminPage";

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/gamebull-page',
    component: GamebullePage
  },
  {
    path: '/gamebull-page/admin/create',
    component: CreatePage
  },
  {
    path: '/gamebull-page/admin',
    component: AdminPage
  },
  {
    path: '/gamebull-page/:id',
    component: DetailPage
  },
  {
    path: '/gamebull-page/admin/:id',
    component: DetailPage
  },
];

export default routes;