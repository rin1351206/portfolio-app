import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {

  return (
    <header>
      <div className='logo'>
        <Link to="/" id='title'><h3>48期</h3></Link>
      </div>

      <nav>
        <ul>
            <li>
                <Link to="/">ホーム</Link>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header