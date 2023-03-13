import HomePage from "./Page/HomePage";
import GamebullePage from "./Page/GamebullePage";
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
    path: '/gamebull-page/create',
    component: CreatePage
  },
  {
    path: '/gamebull-page/admin',
    component: AdminPage
  }
];

export default routes;