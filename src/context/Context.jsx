import React, { createContext } from 'react'
import UsersAPI from './../API/UsersAPI';
import CommentAPI from '../API/CommentAPI';
import PostAPI from './../API/PostAPI';

// Initialize the Context
export const APIContext = createContext();

const Context = (props) => {

    const APIData = {
        USERSAPI : UsersAPI(),
        COMMENTSAPI : CommentAPI(),
        POSTSAPI : PostAPI()
    };
  return (
    <APIContext.Provider value={APIData}>
      {props.children}
    </APIContext.Provider>
  )
}

export default Context