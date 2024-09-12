import React, { Fragment, useContext } from 'react'
import './Users.css'
import { APIContext } from '../../context/Context';
import UserCard from './usercard/UserCard';

const Users = () => {
  const usersAPI = useContext(APIContext);
  // console.log('Users Component = ',usersAPI.USERSAPI.users);

  const [users] = usersAPI.USERSAPI.users;
  // console.log('users = ', users);

  return (
    <Fragment>
        <div className="banner">
            <div className='container'>
                <div className="row">
                    <div className="col">
                    <h1 className="text-center text-info">USERS</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="container my-5">
          <div className="row">
            {
              users.map((user, index) => {
                return(<UserCard key={index} {...user}/>);
              })
            }
          </div>
        </div>
    </Fragment>
  )
}

export default Users