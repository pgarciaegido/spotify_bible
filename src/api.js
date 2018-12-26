
const spotifyAPIBaseURL = 'https://api.spotify.com/v1';
const spotifyAccountsBaseURL = 'https://accounts.spotify.com/authorize';

const formatAuthorizationHeaders = token => ({ 'Authorization': `Bearer ${token}`});

export default {

  goToSpotifyAuthorizationPage: goTo => `${spotifyAccountsBaseURL}?client_id=${process.env.VUE_APP_SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=http://localhost:8080/store-credentials?to=${goTo}&state=123`,
  getGenresByCountry: (params) => {
    const url = `${spotifyAPIBaseURL}/browse/categories?country=${params.countryCode}`;
    const options = { 
      headers: formatAuthorizationHeaders(params.token)
    }
    return fetch(url, options)
  }
}
