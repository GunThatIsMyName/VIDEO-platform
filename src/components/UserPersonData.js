import React, { useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { selectedUserFetch } from "../redux/slice/selectedUser";
import { PersonWrapper } from "../styles/SelectedUser.style";

const UserPersonData = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedUser, loading, error } = useSelector(
    (state) => state.selectedUser
  );

  const handleRepository=()=>{
    navigate("repos")
  }

  useEffect(() => {
    console.log(id, "??");
    dispatch(selectedUserFetch(id));
  }, [id]);

  if (error) {
    return <h1>ERROR.</h1>;
  }
  if (loading) {
    return <h1>loading</h1>;
  }

  const {
    public_repos,
    blog,
    avatar_url,
    followers,
    following,
    login,
    repos_url,
    company,
    followers_url,
  } = selectedUser;

  return (
    <PersonWrapper>
      <h3>{login}</h3>
      <div className="user__box">
        <div>
          <h3>git Repos :</h3>
          <h3> {public_repos}</h3>
        </div>

        {blog && (
          <div>
            <h3>Website :</h3>
            <a href={blog}>
                <AiOutlineHome />
            </a>
          </div>
        )}

        <div>
          <h3>Followers :</h3>
          <h3> {followers}</h3>
        </div>

        <div>
          <h3>Following : </h3>
          <h3>{following}</h3>
        </div>
      </div>
      <img src={avatar_url} alt={login} />

      <div>
          <button onClick={handleRepository} >More Repository</button>
      </div>

     {!loading && <Outlet />}        
      {/* <div>{repos_url}</div>
      <div>{company}</div>
      <div>{followers_url}</div> */}
    </PersonWrapper>
  );
};

export default UserPersonData;
