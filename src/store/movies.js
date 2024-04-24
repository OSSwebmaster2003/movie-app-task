import { create } from "zustand";
import tmdbApi, { movieType } from "../api/tmdbApi";

const useMovieStore = create((set) => ({
  movieItems: [],
  bannerMovieItems: [],
  movieDetail: null,
  keyword: "",
  isLoading: false,
  error: null,

  fetchMovies: async (keyword) => {
    set({ isLoading: true, error: null });
    try {
      let response = null;
      if (!keyword) {
        const params = { page: 1 };
        response = await tmdbApi.getMoviesList(movieType.top_rated, { params });
      } else {
        const params = { query: keyword };
        response = await tmdbApi.search("movie", { params });
      }
      set({ movieItems: response?.results, isLoading: false, error: null });
    } catch (error) {
      set({ isLoading: false, error: "Error fetching movies" });
    }
  },
  fetchBannerMovies: async () => {
    set({ isLoading: true, error: null });
    try {
      const params = { page: 1 };
      const response = await tmdbApi.getMoviesList(movieType.popular, {
        params,
      });
      set({
        bannerMovieItems: response.results.slice(1, 5),
        isLoading: false,
        error: null,
      });
    } catch (error) {
      set({ isLoading: false, error: "Error fetching movies" });
    }
  },
  fetchMovieDetail: async (category, id) => {
    set({ isLoading: true, error: null });
    try {
      const response = await tmdbApi.detail(category, id, { params: {} });
      set({
        movieDetail: response,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      set({ isLoading: false, error: "Error fetching movie detail" });
    }
  },
}));

export default useMovieStore;
