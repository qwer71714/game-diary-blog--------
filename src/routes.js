import HomePage from "./Page/HomePage";
import GamebullePage from "./Page/GamebullePage";
import CreatePage from "./Page/CreatePage";

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
  }
];

export default routes;