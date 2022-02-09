import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUsers } from "../redux/slice/userSlice";
import GitHubApi from "../utils/GithubApi";
import MovieList from "./MovieList";

const Home = () => {
  const dispatch=useDispatch();
  
  const fetchMovies = async () => {
    const { data } = await GitHubApi.get(`users`).catch((err) =>
    console.log(err, "ERROR!!")
    );
    dispatch(addUsers(data));
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <div className="banner__image"></div>
      <MovieList />
    </div>
  );
};

export default Home;
