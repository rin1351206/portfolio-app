import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {

  function onClickSns () {
    window.open("https://twitter.com/YouTube_Nobita_", '_brank');
  }

  return (
    <header>
      <div className='logo'>
        <h3>ポートフォリオ</h3>
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
                <a onClick={onClickSns}>SNS</a>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header