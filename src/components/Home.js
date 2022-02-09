import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUsers, errorUser, fetchUsers, loadingUser } from "../redux/slice/userSlice";
import GitHubApi from "../utils/GithubApi";
import MovieList from "./MovieList";

const Home = () => {
  const dispatch=useDispatch();
  
  // const fetchMovies = async () => {
  //   dispatch(loadingUser())
  //   try{
  //     const { data } = await GitHubApi.get(`users`)
  //     dispatch(addUsers(data));
  //   }catch{
  //     dispatch(errorUser());
  //   }
  // };

  useEffect(() => {
    console.log("1")
    dispatch(fetchUsers());
    console.log("2")
  }, []);

  return (
    <div>
      <div className="banner__image"></div>
      <MovieList />
    </div>
  );
};

export default Home;
