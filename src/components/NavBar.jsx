import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import '../style.scss';

export default function NavBar() {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <Link to='/'>
            <img src={Logo} alt='logo'/>
          </Link>
          <div className="site-name">
            ReactBlog
          </div>
        </div>
        <div className="links">
          <Link className="link" to='/'>art</Link>
          <Link className="link" to='/'>science</Link>
          <Link className="link" to='/'>technology</Link>
          <Link className="link" to='/'>design</Link>
          <Link className="link" to='/'>food</Link>
          <button>
            <Link className="link" to='/create-post'>Write A Blog</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
