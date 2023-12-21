const fetchAPI = {
    fetchUpComing :`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
    fetchToRate: `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
    fetchNowPlaying:`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`,
    fetchLatest:`https://api.themoviedb.org/3/movie/latest`
}

export default fetchAPI