import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { fetchJobs, setSearchParams } from "../store/jobSlice";
import { setJobs, setLoading, setError } from "../store/jobSlice";
import "./JobList.css";
import SearchBar from "./Searchbar";
const JobList = () => {
  const dispatch = useDispatch();
  const { jobs, loading, totalJobs, error, searchParams } = useSelector(
    (state) => state.jobs
  );
  const [currentPage, setCurrentPage] = useState(1);

  //pagination
  const jobsPerPage = 15;
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  //paginate
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = 30;
  useEffect(() => {
    const fetchJobs = async () => {
      dispatch(setLoading());
      // const {} = getState();

      try {
        const response = await axios.get("http://localhost:8000");
        dispatch(setJobs(response.data));
      } catch (error) {
        dispatch(setError(error.message));
      }
    };

    fetchJobs();
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(fetchJobs(currentPage, jobsPerPage));
  // }, [dispatch, currentPage, searchParams]);
  const handleSearch = (params) => {
    dispatch(setSearchParams(params));
    setCurrentPage(1); // Reset to first page on new search
  };

  return (
    <div className="job-list-container">
      <SearchBar onSearch={handleSearch} />
      <h2 className="job-list-title">Job list</h2>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">Error: {error}</p>}
      <div className="job-list">
        {currentJobs.map((job) => (
          <div key={job.id} className="job-item">
            <h3 className="job-title">{job.jobTitle}</h3>
            <h2 className="job-company">{job.companyName}</h2>
            <p className="job-location">Location: {job.location}</p>
            <p className="job-type">Type: {job.jobType}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        {[...Array(totalPages).keys()].map((page) => (
          <button
            key={page + 1}
            onClick={() => paginate(page + 1)}
            className={`page-button ${
              currentPage === page + 1 ? "active" : ""
            }`}
          >
            {page + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JobList;
