import NotFound from './components/404.vue';
import ByGenre from './components/ByGenre.vue';
import StoreCredentials from './components/StoreCredentials.vue';
import UserInfo from './components/UserInfo.vue';
import Playlist from './components/Playlist.vue';

export default [
  { path: '/not-found', component: NotFound },
  { path: '/by-genre', component: ByGenre },
  { path: '/store-credentials', component: StoreCredentials },
  { path: '/user-info', component: UserInfo},
  { path: '/playlist/:playlistId', component: Playlist }
];
