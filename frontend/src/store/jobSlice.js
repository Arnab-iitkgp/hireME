import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    loading: false,
    error: null,
    totalJobs: 0,
    searchParams: { title: "", location: "", jobType: "All" },
  },
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setSearchParams(state, action) {
      state.searchParams = action.payload;
    },
  },
});

export const { setLoading, setJobs, setError, setSearchParams } =
  jobSlice.actions;

export const fetchJobs =
  (page = 1, limit = 15) =>
  async (dispatch, getState) => {
    dispatch(setLoading());
    const { searchParams } = getState().jobs;

    try {
      const response = await axios.get(`http://localhost:8000`, {
        params: {
          page,
          limit,
          title: searchParams.title,
          location: searchParams.location,
          jobType: searchParams.jobType,
        },
      });
      dispatch(
        setJobs({
          jobs: response.data,
          totalJobs: response.data.totalJobs,
        })
      );
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
export default jobSlice.reducer;
