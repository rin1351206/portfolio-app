import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {

  function onClickSns () {
    window.open("https://twitter.com/mirokujyoho", '_brank');
  }

  return (
    <header>
      <div className='logo'>
        <Link to="/" id='title'><h3>47期</h3></Link>
      </div>

      <nav>
        <ul>
            <li>
                <Link to="/">ホーム</Link>
            </li>
            <li>
                <Link to="/blog">ブログ</Link>
            </li>
            <li>
                <Link onClick={onClickSns}>SNS</Link>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header