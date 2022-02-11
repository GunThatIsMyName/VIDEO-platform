import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { UserReposWrapper } from "../styles/UserRepos.style";
import GithubApi from "../utils/GithubApi";

const UserRepository = () => {
  const [userRepo, setUserRepo] = useState([]);
  const {
    selectedUser: { login },
  } = useSelector((state) => state.selectedUser);

  const getRepoFetch = async () => {
    if (!login) {
      return;
    }
    const { data } = await GithubApi(`users/${login}/repos`);
    setUserRepo(data);
  };
  useEffect(() => {
    getRepoFetch();
  }, []);

  return (
    <div>
      <h1>USERS REPOSITOROIES</h1>
      {userRepo.map((item) => {
        const {
          name,
          language,
          git_url,
          full_name,
          clone_url,
          created_at,
          forks_count,id
        } = item;
        return (
          <UserReposWrapper key={id}>
            <a href={git_url}>
              <div className="title">
                <h3>name : </h3>
                <p>{name}</p>
              </div>
              <div className="language">
                <h3>language :</h3>
                <h3>{language}</h3>
              </div>
            </a>
          </UserReposWrapper>
        );
      })}
    </div>
  );
};

export default UserRepository;
