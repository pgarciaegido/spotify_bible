
const spotifyAPIBaseURL = 'https://api.spotify.com/v1';
const spotifyAccountsBaseURL = 'https://accounts.spotify.com/authorize';

export default {

  goToSpotifyAuthorizationPage(goTo) {
    const redirectionPath = '/store-credentials';

    return `${spotifyAccountsBaseURL}?client_id=${process.env.VUE_APP_SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=http://localhost:8080${redirectionPath}?to=${goTo}&state=123`;
  },

  getGenresByCountry: countryCode => fetch(`${spotifyAPIBaseURL}/browse/categories?country=${countryCode}`),
}
