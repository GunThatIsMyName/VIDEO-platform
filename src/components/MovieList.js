import React from 'react'
import { useSelector } from 'react-redux'
import { getAllUsers } from '../redux/slice/userSlice'
import { UserListWrapper } from '../styles/MovieList.style';
import Loader from './Loader';
import UserCard from './UserCard';

const MovieList = () => {
  const {users,loading,error} = useSelector(getAllUsers);

  if(loading){
    <Loader />
  }

  if(error){
    return <h1>ERROR !!!</h1>
  }

  const renderUsers=users.map(item=>{
    console.log(item,"item")
    return <UserCard key={item.id} {...item} />
  })

  return (
    <UserListWrapper className="user__wrapper">
      <div className="user__list">
        <h3>Users</h3>
        <div className="user__container">
          {renderUsers}
        </div>
      </div>
    </UserListWrapper>
  )
}

export default MovieList