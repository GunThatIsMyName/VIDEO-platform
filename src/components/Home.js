import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMyData } from "../redux/slice/myDataSlice";
import {
  addUsers,
  errorUser,
  fetchUsers,
  loadingUser,
} from "../redux/slice/userSlice";
import GitHubApi from "../utils/GithubApi";
import MovieList from "./MovieList";

const Home = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  // const fetchMovies = async () => {
  //   dispatch(loadingUser())
  //   try{
  //     const { data } = await GitHubApi.get(`users`)
  //     dispatch(addUsers(data));
  //   }catch{
  //     dispatch(errorUser());
  //   }
  // };
  const handleTextChange = useCallback((e) => setText(e.target.value), []);

  useEffect(() => {
    if (text !== "") {
      dispatch(fetchUsers(text));
    }
  }, [text]);

  useEffect(() => {
    dispatch(fetchMyData());
  }, []);

  return (
    <div>
      <form style={{ display: "flex", margin: "auto", justifyContent: "center" }}>
        <input onChange={handleTextChange} type="text" />
        <input type="button" value="button" />
      </form>
      <div className="banner__image"></div>
      <MovieList />
    </div>
  );
};

export default Home;
