import React from 'react'
import { useSelector } from 'react-redux'
import { getAllUsers } from '../redux/slice/userSlice'

const MovieList = () => {
  const users = useSelector(getAllUsers);
  console.log(users,"Users data");
  return (
    <div>MovieList</div>
  )
}

export default MovieList