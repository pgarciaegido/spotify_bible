import MenuItems from './db/LateralMenuItems.json';

const spotifyAPIBaseURL = 'https://api.spotify.com/v1';

export default {
  fetchMenuItems() {
    return MenuItems;
  },

  getSpotifyAuthorizationURL() {
    return `https://accounts.spotify.com/authorize?client_id=${process.env.VUE_APP_SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=http://localhost:8080&state=123`;
  },

  getGenresByCountry: countryCode => fetch(`${spotifyAPIBaseURL}/browse/categories?country=${countryCode}`),
}
