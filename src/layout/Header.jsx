import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-info shadow">
        <div className="container">
            <NavLink to={`/`} className="navbar-brand">React Context</NavLink>

            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink to={`/`} className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/users`} className="nav-link">Users</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/posts`} className="nav-link">Posts</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/comments`} className="nav-link">Comments</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header