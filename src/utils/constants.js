export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const NETFLIX_BG = "https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg";
export const USER_AVTAR = "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg";


const token = process.env.REACT_APP_TMDB_API_TOKEN;

export const API_OPTIONS = {method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`
  }
};

export const TMDB_IMAGE_PATH = "https://image.tmdb.org/t/p/w200/";


export const movieCategories = [
  {categoryTitle: "Now Playing Movies", reduxTitle: "nowPlayingMovies"},
  {categoryTitle: "Popular Movies", reduxTitle: "popularMovies"},
  {categoryTitle: "Top Rated Movies", reduxTitle: "topRatedMovies"}
]

export const searchLanguages = [
  {identifier: "en", name: "English"},
  {identifier: "hindi", name: "Hindi"},
  {identifier: "spanish", name: "Spanish"},
]