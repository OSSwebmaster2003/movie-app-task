import { create } from "zustand";
import tmdbApi, { movieType } from "../api/tmdbApi";

const useMovieStore = create((set) => ({
  bannerMovieItems: [],
  movieDetail: null,
  isLoading: false,

  fetchMovies: async (keyword) => {
    try {
      let response = null;
      if (!keyword) {
        const params = { page: 1 };
        response = await tmdbApi.getMoviesList(movieType.top_rated, { params });
      } else {
        const params = { query: keyword };
        response = await tmdbApi.search("movie", { params });
      }
      return response?.results;
    } catch (error) {
      console.log(error);
    }
  },

  fetchBannerMovies: async () => {
    try {
      const params = { page: 1 };
      const response = await tmdbApi.getMoviesList(movieType.popular, {
        params,
      });
      return response.results.slice(1, 6);
    } catch (error) {
      console.log(error);
    }
  },
  fetchMovieDetail: async (category, id) => {
    set({ isLoading: true });
    try {
      const response = await tmdbApi.detail(category, id, { params: {} });
      set({ isLoading: false });
      return response;
    } catch (error) {
      set({ isLoading: false });
      console.log(error);
    }
  },
}));

export default useMovieStore;
